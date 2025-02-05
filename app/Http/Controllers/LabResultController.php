<?php

namespace App\Http\Controllers;

use App\Models\LabResult;
use App\Http\Requests\StoreLabResultRequest;
use App\Http\Requests\UpdateLabResultRequest;
use App\Http\Resources\LabResultResource;
use App\Imports\LabResultImport;
use Codedge\Fpdf\Fpdf\Fpdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Facades\Excel;

class LabResultController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = LabResult::query();
        if (request("patientid")) {
            $query->where("patientid","like","%".request("patientid")."%");
        }
        if (request("patientname")) {
            $query->where("patientname","like","%".request("patientname")."%");
        }
        if (request("date_of_birth")) {
            $query->where("date_of_birth",request("date_of_birth"));
        }
        if (request("testcode")) {
            $query->where("testcode","like","%".request("testcode")."%");
        }
        if (request("testname")) {
            $query->where("testname","like","%".request("testname")."%");
        }
        if (request("result")) {
            $query->where("result","like","%".request("result")."%");
        }
        if (request("flag")) {
            $query->where("flag","like","%".request("flag")."%");
        }
        if (request("reference")) {
            $query->where("reference","like","%".request("reference")."%");
        }
        if (request("comment")) {
            $query->where("comment","like","%".request("comment")."%");
        }
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
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLabResultRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(LabResult $labResult)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(LabResult $labResult)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLabResultRequest $request, LabResult $labResult)
    {
        //
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
              $pdf->Cell(0,4,'LABORATORY RESULT',$b,1,'C');
        
              $pdf->SetFont('','',10);
              //(left)-------------------
              $pdf->Cell(10,5,'','T',0);
              $pdf->Cell(25,5,'Name','T',0);
              $pdf->Cell(2,5,':','T',0);
              $pdf->CellFitScale(60,5,$data->patientname,'T',0);
              //(right)
              $pdf->Cell(25,5,'Request No.','T',0);
              $pdf->Cell(2,5,':','T',0);
              $pdf->Cell(0,5,'2931834123','T',1);
              
              //(left)-------------------
              $pdf->Cell(10,5,'',$b,0);
              $pdf->Cell(25,5,'Patient ID',$b,0);
              $pdf->Cell(2,5,':',$b,0);
              $pdf->CellFitScale(60,5,$data->patientid,$b,0);
              //(right)
              $pdf->Cell(25,5,'Date Of Birth',$b,0);
              $pdf->Cell(2,5,':',$b,0);
              $pdf->Cell(0,5,$data->date_of_birth,$b,1);

              $pdf->Cell(0,3,'',$b,1);
        
              //Header-------------------------
              $pdf->SetFont('','B',10);
              $pdf->Cell(10,4,'','TB',0);
              $pdf->Cell(78,4,'LABORATORY TEST','TB',0);
              $pdf->Cell(18,4,'RESULT','TB',0,'C');
              $pdf->Cell(7,4,'','TB',0,'C');
              //$pdf->Cell(10,4,'UNIT','TB',0,'C');
              $pdf->Cell(7,4,'','TB',0,'C');
              $pdf->Cell(0,4,'REFERENCE RANGE','TB',1,'C');
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

        //result
        $pdf->Cell(10,5,'',0,0);
        $pdf->CellFitScale(80,5,$data->testname,0,0);
        $pdf->CellFitScale(47,5,$data->result,0,0);
        $pdf->CellFitScale(0,5,$data->reference,0,0);
        

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
