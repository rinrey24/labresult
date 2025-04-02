<?php

namespace App\Http\Controllers;

use App\Models\LabResult;
use App\Http\Requests\StoreLabResultRequest;
use App\Http\Requests\UpdateLabResultRequest;
use App\Http\Resources\LabResultResource;
use App\Imports\LabResultImport;
use Codedge\Fpdf\Fpdf\Fpdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Facades\Excel;
use PhpParser\Node\Stmt\Label;

class LabResultController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = LabResult::query();
        if (request("tgl_pemeriksaan")) {
            $query->where("tgl_pemeriksaan",request("tgl_pemeriksaan"));
        }
        if (request("nama_pasien")) {
            $query->where("nama_pasien","like","%".request("nama_pasien")."%");
        }
        if (request("alamat")) {
            $query->where("alamat","like","%".request("alamat")."%");
        }
        if (request("jenis_kelamin")) {
            $query->where("jenis_kelamin","like","%".request("jenis_kelamin")."%");
        }
        if (request("tgl_lahir")) {
            $query->where("tgl_lahir",request("tgl_lahir"));
        }
        if (request("umur")) {
            $query->where("umur","like","%".request("umur")."%");
        }
        if (request("poli")) {
            $query->where("poli","like","%".request("poli")."%");
        }
        if (request("status_pembayaran")) {
            $query->where("status_pembayaran","like","%".request("status_pembayaran")."%");
        }
        // if (request("testcode")) {
        //     $query->where("testcode","like","%".request("testcode")."%");
        // }
        // if (request("testname")) {
        //     $query->where("testname","like","%".request("testname")."%");
        // }
        // if (request("result")) {
        //     $query->where("result","like","%".request("result")."%");
        // }
        // if (request("flag")) {
        //     $query->where("flag","like","%".request("flag")."%");
        // }
        // if (request("reference")) {
        //     $query->where("reference","like","%".request("reference")."%");
        // }
        // if (request("comment")) {
        //     $query->where("comment","like","%".request("comment")."%");
        // }
        $result = $query->paginate(10);
        //dd(LabResultResource::collection($result));
        return inertia("LabResult/Index",[
            "results" => LabResultResource::collection($result),
            "queryParams" => request()->query() ?: null,
            "success" => session('success'),
            "error" => session('error'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("LabResult/Partials/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLabResultRequest $request)
    {
        $data = $request->validated();
        $result = LabResult::create($data);

        return to_route('labresult.index')->with('success','Data Berhasil Ditambahkan!');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // $query = DB::connection('sqlite')->table('lab_results')->get();
        // //$a = LabResultResource::collection($query);
        // dd($query);
        // return inertia('LabResult/Partials/Edit',[
        //     'labresult' => $query,
        // ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $labResult = DB::connection('sqlite')->table('lab_results')->where('id',$id)->get()->first();
        return inertia('LabResult/Partials/Edit',[
            'labresult' => $labResult,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLabResultRequest $request, $id)
    {
       $labResult = LabResult::find($id);
       $labResult->update($request->validated());
        return to_route('labresult.index')->with('success','Data Berhasil Diperbarui!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        LabResult::where('id',$id)->delete();
        //return redirect()->back()->with('success', 'Item Berhasil Dihapus!');
        return redirect()->back()->with('success', '');
    }
    
    public function import(Request $request)
    {
        $request->validate([
            'excelfile' => 'required|file|mimes:xlsx,xls,csv',
        ]);
        
        try {
            //Import file
            Excel::import(new LabResultImport, $request->file('excelfile'));
    
            return redirect()->back()->with('success', 'Data Berhasil Diimport!');
       
        }
        catch (\Exception $e){
            Log::info('exception');
            return redirect()->back()->withError($e->getMessage())->withInput();
        }
    }

    public function print($id)
    {
        try {
            $data = LabResult::where('id',$id)->get()->first();
            $pdf = new Fpdf('p','mm','A4');
            $date = Date('d/m/Y');
            $pdf->AliasNbPages();
            $pdf->AddPage();

            // class PDF extends Fpdf
            // {
        
            // Page header
            // function Header()
            // {
              /*/Put the watermark
                $pdf->SetFont('','B',5);
                $pdf->SetTextColor(255, 201, 201);
                $no=1;
                while($no<200){
                  $w = $no*10;
                  $h = $no*5;
                $pdf->RotatedText($w,$h,'COPY FILE',0);
                $no++;
              }
              */
                $pdf->SetTextColor(0,0,0);
        
                //  $pdf->Image('../public/images/yarsi.png',10,8,50);
                  //  $pdf->Ln(5);
        
              $pdf->setFont('Arial','',9);
        
            //   $pdf->Cell(125,4,'',0,0);
            //   $pdf->Cell(59 ,5,'Jl. Letjen Soeprapto kav XIII Cempaka Putih,',0,1);
        
            //   $pdf->Cell(125,4,'',0,0);
            //   $pdf->Cell(34 ,4,'Jakarta Pusat 10510',0,1);
        
            //   $pdf->Cell(125,4,'',0,0);
            //   $pdf->Cell(30 ,4,'Phone (021) 80618618',0,1);
        
            //   $pdf->Cell(125,4,'',0,0);
            //   $pdf->Cell(34 ,4,'Fax (021) 80618619',0,1);
        
            //   $pdf->Cell(125,4,'',0,0);
            //   $pdf->Cell(34 ,4,'www.rsyarsi.co.id',0,1);
        
            $b = 0;
              //Line 1
               $pdf->Cell(0,4,'',$b,1);
              $pdf->SetFont('','B',12);
              $pdf->Cell(0,4,'HASIL LABORATORIUM',$b,1,'C');
        
              $pdf->SetFont('','',10);
              //(left)-------------------
              $pdf->Cell(10,5,'','T',0);
              $pdf->Cell(25,5,'Nama','T',0);
              $pdf->Cell(2,5,':','T',0);
            //   $pdf->CellFitScale(60,5,$data->patientname,'T',0);
            $pdf->Cell(60,5,$data->nama_pasien,'T',0);
              //(right)
              $pdf->Cell(30,5,'Tgl Pemeriksaan','T',0);
              $pdf->Cell(2,5,':','T',0);
              $pdf->Cell(0,5,$data->tgl_pemeriksaan,'T',1);
              
              //(left)-------------------
              $pdf->Cell(10,5,'',$b,0);
              $pdf->Cell(25,5,'Tgl Lahir',$b,0);
              $pdf->Cell(2,5,':',$b,0);
            //   $pdf->CellFitScale(60,5,$data->patientid,$b,0);
            $pdf->Cell(60,5,$data->tgl_lahir,$b,0);
              //(right)
              $pdf->Cell(30,5,'Poli',$b,0);
              $pdf->Cell(2,5,':',$b,0);
              $pdf->Cell(0,5,$data->poli,$b,1);

              //(left)-------------------
              $pdf->Cell(10,5,'',$b,0);
              $pdf->Cell(25,5,'Jenis Kelamin',$b,0);
              $pdf->Cell(2,5,':',$b,0);
            //   $pdf->CellFitScale(60,5,$data->patientid,$b,0);
            $pdf->Cell(60,5,$data->jenis_kelamin,$b,0);
              //(right)
              $pdf->Cell(30,5,'Pembayaran',$b,0);
              $pdf->Cell(2,5,':',$b,0);
              $pdf->Cell(0,5,$data->status_pembayaran,$b,1);

                 //(left)-------------------
                 $pdf->Cell(10,5,'',$b,0);
                 $pdf->Cell(25,5,'Alamat',$b,0);
                 $pdf->Cell(2,5,':',$b,0);
               //   $pdf->CellFitScale(60,5,$data->patientid,$b,0);
               $pdf->Cell(60,5,$data->alamat,$b,1);

              $pdf->Cell(0,3,'',$b,1);
        
              //Header-------------------------
              $pdf->SetFont('','B',10);
              $pdf->Cell(10,4,'','TB',0);
              $pdf->Cell(78,4,'NAMA PEMERIKSAAN','TB',0);
              $pdf->Cell(18,4,'HASIL','TB',0,'C');
              $pdf->Cell(0,4,'','TB',1,'C');
              //$pdf->Cell(7,4,'','TB',0,'C');
              //$pdf->Cell(10,4,'UNIT','TB',0,'C');
              //$pdf->Cell(7,4,'','TB',0,'C');
              //$pdf->Cell(0,4,'REFERENCE RANGE','TB',1,'C');
              //$pdf->Cell(26,4,'Keterangan',0,1,'R');
              // $pdf->SetFont('','U',10);
              // $pdf->Cell(15,4,'',0,0);
              // $pdf->Cell(10,0,'                                                                                                                                                                     ',0,1);
              $pdf->Cell(10,3,'',0,1);
              //#End Header----------------------
              
            //}
            
            
            // Page footer
            // function Footer()
            // {
            //     $datenowx = date('d/m/y      H:i');
            //     // Position at 1.5 cm from bottom
            //                   $pdf->SetTextColor(0,0,0);
            //     $pdf->SetY(-37);
            //   $pdf->SetFont('','',8);
            //   //$pdf->Cell(5,4,'',0,0);
            //  //$pdf->Cell(10,4,'                                                                                                                                              Clinical Pathologist :'.$GLOBALS['footer']['Validate_by'],0,1);
            //  $pdf->Cell(0,4,'Clinical Pathologists : Dr. Syukrini Bahri SpPK, Dr. Endah Purnamasari SpPK, Dr. Dewi Lesthiowati SpPK(K), DR. Dr. Anggraini Iriani SpPK(K)','B',1);
            //   //$pdf->SetFont('','',8);
            //   $pdf->Cell(15,4,'',0,0);
            //   $pdf->Cell(0,4,'*This document has been electronically validated',0,1);
            //   $pdf->Cell(15,4,'',0,0);
            //   $pdf->Cell(35,4,'Received time',0,0);
            //   $pdf->Cell(2,4,':',0,0);
            //   $pdf->Cell(0,4,$GLOBALS['footer']['Validate_by'],0,0);
            //   $pdf->Cell(55,4,'002/FRM/LAB/RSY/Rev0/II/2020',0,0);
            //     $pdf->Image('../public/images/LogoGabungCert.png',155,265, 43,'R');
            //   $pdf->Image('../public/images/footer_1.png', 0, 284, 210, 13);
            //   $pdf->SetY(-23);
            //   }
        //}
        if($data->flag==''){
            $pdf->SetTextColor(0,0,0);
          }elseif($data->flag=='N'){
            $pdf->SetTextColor(0,0,0);
          }else{
            $pdf->SetTextColor(214,0,0);
          }

        $a_hematologi_hb = $data->a_hematologi_hb;
        $a_hematologi_diffcount = $data->a_hematologi_diffcount;
        $a_hematologi_leukosit = $data->a_hematologi_leukosit;
        $a_hematologi_trombosit = $data->a_hematologi_trombosit;
        $a_hematologi_ht = $data->a_hematologi_ht;
        $a_hematologi_led = $data->a_hematologi_led;
        $a_hematologi_golongandarah = $data->a_hematologi_golongandarah;
        $b_kimiadarah_glukosadarah = $data->b_kimiadarah_glukosadarah;
        $b_kimiadarah_kolesterol = $data->b_kimiadarah_kolesterol;
        $b_kimiadarah_asamurat = $data->b_kimiadarah_asamurat;
        $c_serologi_widal_o = $data->c_serologi_widal_o;
        $c_serologi_widal_ao = $data->c_serologi_widal_ao;
        $c_serologi_widal_h = $data->c_serologi_widal_h;
        $c_serologi_widal_ah = $data->c_serologi_widal_ah;
        $c_serologi_dengue_iggigm = $data->c_serologi_dengue_iggigm;
        $c_serologi_dengue_ns1 = $data->c_serologi_dengue_ns1;
        $c_serologi_malaria = $data->c_serologi_malaria;
        $c_serologi_syphilis = $data->c_serologi_syphilis;
        $c_serologi_hbsag = $data->c_serologi_hbsag;
        $c_serologi_hiv = $data->c_serologi_hiv;
        $c_serologi_hcv = $data->c_serologi_hcv;
        $c_serologi_teskehamilan = $data->c_serologi_teskehamilan;
        $d_urin_makroskopis_warna = $data->d_urin_makroskopis_warna;
        $d_urin_makroskopis_kekeruhan = $data->d_urin_makroskopis_kekeruhan;
        $d_urin_makroskopis_ph = $data->d_urin_makroskopis_ph;
        $d_urin_makroskopis_bjurin = $data->d_urin_makroskopis_bjurin;
        $d_urin_makroskopis_protein = $data->d_urin_makroskopis_protein;
        $d_urin_makroskopis_glukosa = $data->d_urin_makroskopis_glukosa;
        $d_urin_makroskopis_bilirubin = $data->d_urin_makroskopis_bilirubin;
        $d_urin_makroskopis_urobilinogen = $data->d_urin_makroskopis_urobilinogen;
        $d_urin_makroskopis_keton = $data->d_urin_makroskopis_keton;
        $d_urin_makroskopis_nitrit = $data->d_urin_makroskopis_nitrit;
        $d_urin_makroskopis_leukosit = $data->d_urin_makroskopis_leukosit;
        $d_urin_makroskopis_blood = $data->d_urin_makroskopis_blood;
        $d_urin_makroskopis_asamaskorbat = $data->d_urin_makroskopis_asamaskorbat;
        $d_urin_mikroskopis_eritrosit = $data->d_urin_mikroskopis_eritrosit;
        $d_urin_mikroskopis_leukosit = $data->d_urin_mikroskopis_leukosit;
        $d_urin_mikroskopis_epitel = $data->d_urin_mikroskopis_epitel;
        $d_urin_mikroskopis_bakteri = $data->d_urin_mikroskopis_bakteri;
        $d_urin_mikroskopis_kristal = $data->d_urin_mikroskopis_kristal;
        $d_urin_mikroskopis_silinder = $data->d_urin_mikroskopis_silinder;
        $d_urin_mikroskopis_jamur = $data->d_urin_mikroskopis_jamur;
        $d_urin_mikroskopis_trichomonas = $data->d_urin_mikroskopis_trichomonas;
        $d_urin_mikroskopis_sprema = $data->d_urin_mikroskopis_sprema;
        $e_sekret_vagina = $data->e_sekret_vagina;
        $e_sekret_utera = $data->e_sekret_utera;
        $f_dahak_slide = $data->f_dahak_slide;
        $f_dahak_tcm = $data->f_dahak_tcm;
        $g_kimiadarah2_ureum = $data->g_kimiadarah2_ureum;
        $g_kimiadarah2_kreatinin = $data->g_kimiadarah2_kreatinin;
        $g_kimiadarah2_sgot = $data->g_kimiadarah2_sgot;
        $g_kimiadarah2_sgpt = $data->g_kimiadarah2_sgpt;
        $g_kimiadarah2_hdl = $data->g_kimiadarah2_hdl;
        $g_kimiadarah2_ldl = $data->g_kimiadarah2_ldl;
        $g_kimiadarah2_trigliserida = $data->g_kimiadarah2_trigliserida;
        $h_urin2_tesnarkoba = $data->h_urin2_tesnarkoba;
        $i_lainlain = $data->i_lainlain;

          //a. hematologi
          if ($a_hematologi_hb != null || $a_hematologi_diffcount != null || $a_hematologi_leukosit != null || $a_hematologi_trombosit != null || $a_hematologi_ht != null || $a_hematologi_led != null || $a_hematologi_golongandarah != null){
            $header_a = 'Hematologi';
            $pdf->Cell(10,5,'',0,0);
            $pdf->Cell(0,5,$header_a,0,1);
            
            $pdf->SetFont('','',10);
            //result
            if ($a_hematologi_hb != null){
                $pdf->Cell(13,5,'',0,0);
                $pdf->Cell(80,5,'HB',0,0);
                $pdf->Cell(44,5,$a_hematologi_hb,0,1);
                // $pdf->Cell(0,5,$data->reference,0,0);
            }
            if ($a_hematologi_diffcount != null){
                $pdf->Cell(13,5,'',0,0);
                $pdf->Cell(80,5,'Diffcount',0,0);
                $pdf->Cell(44,5,$a_hematologi_diffcount,0,1);
                // $pdf->Cell(0,5,$data->reference,0,0);
            }
            if ($a_hematologi_leukosit != null){
                $pdf->Cell(13,5,'',0,0);
                $pdf->Cell(80,5,'Leukosit',0,0);
                $pdf->Cell(44,5,$a_hematologi_leukosit,0,1);
                // $pdf->Cell(0,5,$data->reference,0,0);
            }
            if ($a_hematologi_trombosit != null){
                $pdf->Cell(13,5,'',0,0);
                $pdf->Cell(80,5,'Trombosit',0,0);
                $pdf->Cell(44,5,$a_hematologi_trombosit,0,1);
                // $pdf->Cell(0,5,$data->reference,0,0);
            }
            if ($a_hematologi_ht != null){
                $pdf->Cell(13,5,'',0,0);
                $pdf->Cell(80,5,'HT',0,0);
                $pdf->Cell(44,5,$a_hematologi_ht,0,1);
                // $pdf->Cell(0,5,$data->reference,0,0);
            }
            if ($a_hematologi_led != null){
                $pdf->Cell(13,5,'',0,0);
                $pdf->Cell(80,5,'LED',0,0);
                $pdf->Cell(44,5,$a_hematologi_led,0,1);
                // $pdf->Cell(0,5,$data->reference,0,0);
            }
            if ($a_hematologi_golongandarah != null){
                $pdf->Cell(13,5,'',0,0);
                $pdf->Cell(80,5,'Golongan Darah',0,0);
                $pdf->Cell(44,5,$a_hematologi_golongandarah,0,1);
                // $pdf->Cell(0,5,$data->reference,0,0);
            }
          }

          //b. kimiadarah
          if ($b_kimiadarah_glukosadarah != null || $b_kimiadarah_kolesterol != null || $b_kimiadarah_asamurat != null){
            $header_a = 'Kimia Darah';
            $pdf->Cell(10,5,'',0,0);
            $pdf->Cell(0,5,$header_a,0,1);
            
            $pdf->SetFont('','',10);
            //result
            if ($b_kimiadarah_glukosadarah != null){
                $pdf->Cell(13,5,'',0,0);
                $pdf->Cell(80,5,'Glukosa Darah',0,0);
                $pdf->Cell(44,5,$b_kimiadarah_glukosadarah,0,1);
                // $pdf->Cell(0,5,$data->reference,0,0);
            }
            if ($b_kimiadarah_kolesterol != null){
                $pdf->Cell(13,5,'',0,0);
                $pdf->Cell(80,5,'Kolesterol',0,0);
                $pdf->Cell(44,5,$b_kimiadarah_kolesterol,0,1);
                // $pdf->Cell(0,5,$data->reference,0,0);
            }
            if ($b_kimiadarah_asamurat != null){
                $pdf->Cell(13,5,'',0,0);
                $pdf->Cell(80,5,'Asam Urat',0,0);
                $pdf->Cell(44,5,$b_kimiadarah_asamurat,0,1);
                // $pdf->Cell(0,5,$data->reference,0,0);
            }
          }

           //c. serologi
           if (
            $c_serologi_widal_o != null || $c_serologi_widal_ao != null || $c_serologi_widal_h != null || $c_serologi_widal_ah != null || $c_serologi_dengue_iggigm != null || $c_serologi_dengue_ns1 != null || $c_serologi_malaria != null || $c_serologi_syphilis != null || $c_serologi_hbsag != null || $c_serologi_hiv != null || $c_serologi_hcv != null || $c_serologi_teskehamilan != null
           ){
            $pdf->SetFont('','B',10);
            $header_a = 'Serologi';
            $pdf->Cell(10,5,'',0,0);
            $pdf->Cell(0,5,$header_a,0,1);

            $pdf->SetFont('','',10);
            if ($c_serologi_malaria != null){
                $pdf->Cell(13,5,'',0,0);
                $pdf->Cell(80,5,'Malaria',0,0);
                $pdf->Cell(44,5,$c_serologi_malaria,0,1);
                // $pdf->Cell(0,5,$data->reference,0,0);
            }
            if ($c_serologi_syphilis != null){
                $pdf->Cell(13,5,'',0,0);
                $pdf->Cell(80,5,'Syphilis',0,0);
                $pdf->Cell(44,5,$c_serologi_syphilis,0,1);
                // $pdf->Cell(0,5,$data->reference,0,0);
            }
            if ($c_serologi_hbsag != null){
                $pdf->Cell(13,5,'',0,0);
                $pdf->Cell(80,5,'HBsAg',0,0);
                $pdf->Cell(44,5,$c_serologi_hbsag,0,1);
                // $pdf->Cell(0,5,$data->reference,0,0);
            }
            if ($c_serologi_hiv != null){
                $pdf->Cell(13,5,'',0,0);
                $pdf->Cell(80,5,'HIV',0,0);
                $pdf->Cell(44,5,$c_serologi_hiv,0,1);
                // $pdf->Cell(0,5,$data->reference,0,0);
            }
            if ($c_serologi_hcv != null){
                $pdf->Cell(13,5,'',0,0);
                $pdf->Cell(80,5,'HCV',0,0);
                $pdf->Cell(44,5,$c_serologi_hcv,0,1);
                // $pdf->Cell(0,5,$data->reference,0,0);
            }
            if ($c_serologi_teskehamilan != null){
                $pdf->Cell(13,5,'',0,0);
                $pdf->Cell(80,5,'Tes Kehamilan (PP Test)',0,0);
                $pdf->Cell(44,5,$c_serologi_teskehamilan,0,1);
                // $pdf->Cell(0,5,$data->reference,0,0);
            }
            
            $pdf->SetFont('','',10);
            if ($c_serologi_widal_o != null || $c_serologi_widal_ao != null || $c_serologi_widal_h != null || $c_serologi_widal_ah != null){
                $header_a = 'Widal';
                $pdf->Cell(13,5,'',0,0);
                $pdf->Cell(0,5,$header_a,0,1);
                
                if ($c_serologi_widal_o != null){
                    $pdf->Cell(13,5,'',0,0);
                    $pdf->Cell(80,5,'O',0,0);
                    $pdf->Cell(41,5,$c_serologi_widal_o,0,1);
                    // $pdf->Cell(0,5,$data->reference,0,0);
                }
                if ($c_serologi_widal_ao != null){
                    $pdf->Cell(13,5,'',0,0);
                    $pdf->Cell(80,5,'OA',0,0);
                    $pdf->Cell(41,5,$c_serologi_widal_ao,0,1);
                    // $pdf->Cell(0,5,$data->reference,0,0);
                }
                if ($c_serologi_widal_h != null){
                    $pdf->Cell(13,5,'',0,0);
                    $pdf->Cell(80,5,'H',0,0);
                    $pdf->Cell(41,5,$c_serologi_widal_h,0,1);
                    // $pdf->Cell(0,5,$data->reference,0,0);
                }
                if ($c_serologi_widal_ah != null){
                    $pdf->Cell(13,5,'',0,0);
                    $pdf->Cell(80,5,'AH',0,0);
                    $pdf->Cell(41,5,$c_serologi_widal_ah,0,1);
                    // $pdf->Cell(0,5,$data->reference,0,0);
                }
            }
            if ($c_serologi_dengue_iggigm != null || $c_serologi_dengue_ns1 != null){
                $header_a = 'Dengue';
                $pdf->Cell(13,5,'',0,0);
                $pdf->Cell(0,5,$header_a,0,1);
                
                if ($c_serologi_dengue_iggigm != null){
                    $pdf->Cell(13,5,'',0,0);
                    $pdf->Cell(80,5,'IgG/igM',0,0);
                    $pdf->Cell(41,5,$c_serologi_dengue_iggigm,0,1);
                    // $pdf->Cell(0,5,$data->reference,0,0);
                }
                if ($c_serologi_dengue_ns1 != null){
                    $pdf->Cell(13,5,'',0,0);
                    $pdf->Cell(80,5,'NS1',0,0);
                    $pdf->Cell(41,5,$c_serologi_dengue_ns1,0,1);
                    // $pdf->Cell(0,5,$data->reference,0,0);
                }
            }
          }

            if ($d_urin_makroskopis_warna != null || $d_urin_makroskopis_kekeruhan != null || $d_urin_makroskopis_ph != null || $d_urin_makroskopis_bjurin != null || $d_urin_makroskopis_protein != null || $d_urin_makroskopis_glukosa != null || $d_urin_makroskopis_bilirubin != null || $d_urin_makroskopis_urobilinogen != null || $d_urin_makroskopis_keton != null || $d_urin_makroskopis_nitrit != null || $d_urin_makroskopis_leukosit != null || $d_urin_makroskopis_blood != null || $d_urin_makroskopis_asamaskorbat != null || $d_urin_mikroskopis_eritrosit != null || $d_urin_mikroskopis_leukosit != null || $d_urin_mikroskopis_epitel != null || $d_urin_mikroskopis_bakteri != null || $d_urin_mikroskopis_kristal != null || $d_urin_mikroskopis_silinder != null || $d_urin_mikroskopis_jamur != null || $d_urin_mikroskopis_trichomonas != null || $d_urin_mikroskopis_sprema != null){
                $pdf->SetFont('','B',10);
                $header_a = 'Urin Rutin / Lengkap';
                $pdf->Cell(10,5,'',0,0);
                $pdf->Cell(0,5,$header_a,0,1);

                if ($d_urin_makroskopis_warna != null || $d_urin_makroskopis_kekeruhan != null || $d_urin_makroskopis_ph != null || $d_urin_makroskopis_bjurin != null || $d_urin_makroskopis_protein != null || $d_urin_makroskopis_glukosa != null || $d_urin_makroskopis_bilirubin != null || $d_urin_makroskopis_urobilinogen != null || $d_urin_makroskopis_keton != null || $d_urin_makroskopis_nitrit != null || $d_urin_makroskopis_leukosit != null || $d_urin_makroskopis_blood != null || $d_urin_makroskopis_asamaskorbat != null){
                    $pdf->SetFont('','',10);
                    $pdf->Cell(13,5,'',0,0);
                    $pdf->Cell(0,5,'Makroskopis',0,1);
                    
                    if ($d_urin_makroskopis_warna != null){
                        $pdf->Cell(16,5,'',0,0);
                        $pdf->Cell(77,5,'Warna',0,0);
                        $pdf->Cell(41,5,$d_urin_makroskopis_warna,0,1);
                        // $pdf->Cell(0,5,$data->reference,0,0);
                    }
                    if ($d_urin_makroskopis_kekeruhan != null){
                        $pdf->Cell(16,5,'',0,0);
                        $pdf->Cell(77,5,'Kekeruhan',0,0);
                        $pdf->Cell(41,5,$d_urin_makroskopis_kekeruhan,0,1);
                        // $pdf->Cell(0,5,$data->reference,0,0);
                    }
                    if ($d_urin_makroskopis_ph != null){
                        $pdf->Cell(16,5,'',0,0);
                        $pdf->Cell(77,5,'pH',0,0);
                        $pdf->Cell(41,5,$d_urin_makroskopis_ph,0,1);
                        // $pdf->Cell(0,5,$data->reference,0,0);
                    }
                    if ($d_urin_makroskopis_bjurin != null){
                        $pdf->Cell(16,5,'',0,0);
                        $pdf->Cell(77,5,'BJ Urin',0,0);
                        $pdf->Cell(41,5,$d_urin_makroskopis_bjurin,0,1);
                        // $pdf->Cell(0,5,$data->reference,0,0);
                    }
                    if ($d_urin_makroskopis_protein != null){
                        $pdf->Cell(16,5,'',0,0);
                        $pdf->Cell(77,5,'Protein',0,0);
                        $pdf->Cell(41,5,$d_urin_makroskopis_protein,0,1);
                        // $pdf->Cell(0,5,$data->reference,0,0);
                    }
                    if ($d_urin_makroskopis_glukosa != null){
                        $pdf->Cell(16,5,'',0,0);
                        $pdf->Cell(77,5,'Glukosa',0,0);
                        $pdf->Cell(41,5,$d_urin_makroskopis_glukosa,0,1);
                        // $pdf->Cell(0,5,$data->reference,0,0);
                    }
                    if ($d_urin_makroskopis_bilirubin != null){
                        $pdf->Cell(16,5,'',0,0);
                        $pdf->Cell(77,5,'Bilirubin',0,0);
                        $pdf->Cell(41,5,$d_urin_makroskopis_bilirubin,0,1);
                        // $pdf->Cell(0,5,$data->reference,0,0);
                    }
                    if ($d_urin_makroskopis_urobilinogen != null){
                        $pdf->Cell(16,5,'',0,0);
                        $pdf->Cell(77,5,'Urobilinogen',0,0);
                        $pdf->Cell(41,5,$d_urin_makroskopis_urobilinogen,0,1);
                        // $pdf->Cell(0,5,$data->reference,0,0);
                    }
                    if ($d_urin_makroskopis_keton != null){
                        $pdf->Cell(16,5,'',0,0);
                        $pdf->Cell(77,5,'Keton',0,0);
                        $pdf->Cell(41,5,$d_urin_makroskopis_keton,0,1);
                        // $pdf->Cell(0,5,$data->reference,0,0);
                    }
                    if ($d_urin_makroskopis_nitrit != null){
                        $pdf->Cell(16,5,'',0,0);
                        $pdf->Cell(77,5,'Nitrit',0,0);
                        $pdf->Cell(41,5,$d_urin_makroskopis_nitrit,0,1);
                        // $pdf->Cell(0,5,$data->reference,0,0);
                    }
                    if ($d_urin_makroskopis_leukosit != null){
                        $pdf->Cell(16,5,'',0,0);
                        $pdf->Cell(77,5,'Leukosit',0,0);
                        $pdf->Cell(41,5,$d_urin_makroskopis_leukosit,0,1);
                        // $pdf->Cell(0,5,$data->reference,0,0);
                    }
                    if ($d_urin_makroskopis_blood != null){
                        $pdf->Cell(16,5,'',0,0);
                        $pdf->Cell(77,5,'Blood',0,0);
                        $pdf->Cell(41,5,$d_urin_makroskopis_blood,0,1);
                        // $pdf->Cell(0,5,$data->reference,0,0);
                    }
                    if ($d_urin_makroskopis_asamaskorbat != null){
                        $pdf->Cell(16,5,'',0,0);
                        $pdf->Cell(77,5,'Asam Askorbat',0,0);
                        $pdf->Cell(41,5,$d_urin_makroskopis_asamaskorbat,0,1);
                        // $pdf->Cell(0,5,$data->reference,0,0);
                    }
                }

                if ($d_urin_mikroskopis_eritrosit != null || $d_urin_mikroskopis_leukosit != null || $d_urin_mikroskopis_epitel != null || $d_urin_mikroskopis_bakteri != null || $d_urin_mikroskopis_kristal != null || $d_urin_mikroskopis_silinder != null || $d_urin_mikroskopis_jamur != null || $d_urin_mikroskopis_trichomonas != null || $d_urin_mikroskopis_sprema != null){
                    $pdf->SetFont('','',10);
                    $pdf->Cell(13,5,'',0,0);
                    $pdf->Cell(0,5,'Mikroskopis',0,1);
                    
                    if ($d_urin_mikroskopis_eritrosit != null){
                        $pdf->Cell(16,5,'',0,0);
                        $pdf->Cell(77,5,'Eritrosit',0,0);
                        $pdf->Cell(41,5,$d_urin_mikroskopis_eritrosit,0,1);
                        // $pdf->Cell(0,5,$data->reference,0,0);
                    }
                    if ($d_urin_mikroskopis_leukosit != null){
                        $pdf->Cell(16,5,'',0,0);
                        $pdf->Cell(77,5,'Leukosit',0,0);
                        $pdf->Cell(41,5,$d_urin_mikroskopis_leukosit,0,1);
                        // $pdf->Cell(0,5,$data->reference,0,0);
                    }
                    if ($d_urin_mikroskopis_epitel != null){
                        $pdf->Cell(16,5,'',0,0);
                        $pdf->Cell(77,5,'Epitel',0,0);
                        $pdf->Cell(41,5,$d_urin_mikroskopis_epitel,0,1);
                        // $pdf->Cell(0,5,$data->reference,0,0);
                    }
                    if ($d_urin_mikroskopis_bakteri != null){
                        $pdf->Cell(16,5,'',0,0);
                        $pdf->Cell(77,5,'Bakteri',0,0);
                        $pdf->Cell(41,5,$d_urin_mikroskopis_bakteri,0,1);
                        // $pdf->Cell(0,5,$data->reference,0,0);
                    }
                    if ($d_urin_mikroskopis_kristal != null){
                        $pdf->Cell(16,5,'',0,0);
                        $pdf->Cell(77,5,'Kristal',0,0);
                        $pdf->Cell(41,5,$d_urin_mikroskopis_kristal,0,1);
                        // $pdf->Cell(0,5,$data->reference,0,0);
                    }
                    if ($d_urin_mikroskopis_silinder != null){
                        $pdf->Cell(16,5,'',0,0);
                        $pdf->Cell(77,5,'Silinder',0,0);
                        $pdf->Cell(41,5,$d_urin_mikroskopis_silinder,0,1);
                        // $pdf->Cell(0,5,$data->reference,0,0);
                    }
                    if ($d_urin_mikroskopis_jamur != null){
                        $pdf->Cell(16,5,'',0,0);
                        $pdf->Cell(77,5,'Jamur',0,0);
                        $pdf->Cell(41,5,$d_urin_mikroskopis_jamur,0,1);
                        // $pdf->Cell(0,5,$data->reference,0,0);
                    }
                    if ($d_urin_mikroskopis_trichomonas != null){
                        $pdf->Cell(16,5,'',0,0);
                        $pdf->Cell(77,5,'Trichomonas',0,0);
                        $pdf->Cell(41,5,$d_urin_mikroskopis_trichomonas,0,1);
                        // $pdf->Cell(0,5,$data->reference,0,0);
                    }
                    if ($d_urin_mikroskopis_sprema != null){
                        $pdf->Cell(16,5,'',0,0);
                        $pdf->Cell(77,5,'Sperma',0,0);
                        $pdf->Cell(41,5,$d_urin_mikroskopis_sprema,0,1);
                        // $pdf->Cell(0,5,$data->reference,0,0);
                    }
                }
            }

            if ($e_sekret_vagina != null || $e_sekret_utera != null){
                $pdf->SetFont('','B',10);
                $header_a = 'Sekret';
                $pdf->Cell(10,5,'',0,0);
                $pdf->Cell(0,5,$header_a,0,1);

                $pdf->SetFont('','',10);
                if ($e_sekret_vagina != null){
                    $pdf->Cell(13,5,'',0,0);
                    $pdf->Cell(80,5,'Vagina',0,0);
                    $pdf->Cell(44,5,$e_sekret_vagina,0,1);
                    // $pdf->Cell(0,5,$data->reference,0,0);
                }
                if ($e_sekret_utera != null){
                    $pdf->Cell(13,5,'',0,0);
                    $pdf->Cell(80,5,'Uretra',0,0);
                    $pdf->Cell(44,5,$e_sekret_utera,0,1);
                    // $pdf->Cell(0,5,$data->reference,0,0);
                }
            }
            
            if ($f_dahak_slide != null || $f_dahak_tcm != null){
                $pdf->SetFont('','B',10);
                $header_a = 'Dahak';
                $pdf->Cell(10,5,'',0,0);
                $pdf->Cell(0,5,$header_a,0,1);

                $pdf->SetFont('','',10);
                if ($f_dahak_slide != null){
                    $pdf->Cell(13,5,'',0,0);
                    $pdf->Cell(80,5,'Slide',0,0);
                    $pdf->Cell(44,5,$f_dahak_slide,0,1);
                    // $pdf->Cell(0,5,$data->reference,0,0);
                }
                if ($f_dahak_tcm != null){
                    $pdf->Cell(13,5,'',0,0);
                    $pdf->Cell(80,5,'TCM',0,0);
                    $pdf->Cell(44,5,$f_dahak_tcm,0,1);
                    // $pdf->Cell(0,5,$data->reference,0,0);
                }
            }

            
            if ($g_kimiadarah2_ureum != null || $g_kimiadarah2_kreatinin != null || $g_kimiadarah2_sgot != null || $g_kimiadarah2_sgpt != null || $g_kimiadarah2_hdl != null || $g_kimiadarah2_ldl != null || $g_kimiadarah2_trigliserida != null){
                $pdf->SetFont('','B',10);
                $header_a = 'Kimia Darah II';
                $pdf->Cell(10,5,'',0,0);
                $pdf->Cell(0,5,$header_a,0,1);

                $pdf->SetFont('','',10);
                if ($g_kimiadarah2_ureum != null){
                    $pdf->Cell(13,5,'',0,0);
                    $pdf->Cell(80,5,'Ureum',0,0);
                    $pdf->Cell(44,5,$g_kimiadarah2_ureum,0,1);
                    // $pdf->Cell(0,5,$data->reference,0,0);
                }
                if ($g_kimiadarah2_kreatinin != null){
                    $pdf->Cell(13,5,'',0,0);
                    $pdf->Cell(80,5,'Kreatinin',0,0);
                    $pdf->Cell(44,5,$g_kimiadarah2_kreatinin,0,1);
                    // $pdf->Cell(0,5,$data->reference,0,0);
                }
                if ($g_kimiadarah2_sgot != null){
                    $pdf->Cell(13,5,'',0,0);
                    $pdf->Cell(80,5,'SGOT',0,0);
                    $pdf->Cell(44,5,$g_kimiadarah2_sgot,0,1);
                    // $pdf->Cell(0,5,$data->reference,0,0);
                }
                if ($g_kimiadarah2_sgpt != null){
                    $pdf->Cell(13,5,'',0,0);
                    $pdf->Cell(80,5,'SGPT',0,0);
                    $pdf->Cell(44,5,$g_kimiadarah2_sgpt,0,1);
                    // $pdf->Cell(0,5,$data->reference,0,0);
                }
                if ($g_kimiadarah2_hdl != null){
                    $pdf->Cell(13,5,'',0,0);
                    $pdf->Cell(80,5,'HDL',0,0);
                    $pdf->Cell(44,5,$g_kimiadarah2_hdl,0,1);
                    // $pdf->Cell(0,5,$data->reference,0,0);
                }
                if ($g_kimiadarah2_ldl != null){
                    $pdf->Cell(13,5,'',0,0);
                    $pdf->Cell(80,5,'LDL',0,0);
                    $pdf->Cell(44,5,$g_kimiadarah2_ldl,0,1);
                    // $pdf->Cell(0,5,$data->reference,0,0);
                }
                if ($g_kimiadarah2_trigliserida != null){
                    $pdf->Cell(13,5,'',0,0);
                    $pdf->Cell(80,5,'Trigliserida',0,0);
                    $pdf->Cell(44,5,$g_kimiadarah2_trigliserida,0,1);
                    // $pdf->Cell(0,5,$data->reference,0,0);
                }
            }

            if ($h_urin2_tesnarkoba != null){
                $pdf->SetFont('','B',10);
                $header_a = 'Urin II';
                $pdf->Cell(10,5,'',0,0);
                $pdf->Cell(0,5,$header_a,0,1);

                $pdf->SetFont('','',10);
                if ($h_urin2_tesnarkoba != null){
                    $pdf->Cell(13,5,'',0,0);
                    $pdf->Cell(80,5,'Tes Narkoba',0,0);
                    $pdf->Cell(44,5,$h_urin2_tesnarkoba,0,1);
                    // $pdf->Cell(0,5,$data->reference,0,0);
                }
            }

            if ($i_lainlain != null){
                //$pdf->SetFont('','B',10);
                $pdf->SetFont('','',10);
                    $pdf->Cell(10,5,'',0,0);
                    $pdf->Cell(83,5,'Lain-lain',0,0);
                    $pdf->MultiCell(0,5,$i_lainlain,0,1);
                    // $pdf->Cell(0,5,$data->reference,0,0);
            }

        // //result
        // $pdf->Cell(10,5,'',0,0);
        // $pdf->Cell(80,5,$data->header_a,0,0);
        // $pdf->Cell(47,5,$data->result,0,0);
        // $pdf->Cell(0,5,$data->reference,0,0);
        

        // $filename = 'HasilLab.pdf';
        // // Send headers
        // header("Content-Type: application/pdf");
        // header("Pragma: public");
        // header("Expires: 0");
        // header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
        // header("Content-Type: application/force-download");
        // header("Content-Type: application/octet-stream");
        // header("Content-Type: application/download");
        // header('Content-Disposition: attachment; filename="'.$filename.'"');
        // header("Content-Transfer-Encoding: binary ");

        // Blast out the PDF
        //$pdf->Output('php://output');
             $pdf->Output('','I');
             exit;
         }catch (\Exception $e){
            Log::info('exception');
            return redirect()->back()->withError($e->getMessage())->withInput();
        }
    }
}
