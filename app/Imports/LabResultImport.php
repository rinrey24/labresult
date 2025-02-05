<?php

namespace App\Imports;

use App\Models\LabResult;
use Carbon\Carbon;
use Exception;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithStartRow;
use PhpOffice\PhpSpreadsheet;

class LabResultImport implements ToModel,WithStartRow
{
    public function startRow(): int
    {
       return 2;
    }

    public function model(array $row)
    {
        try {
            if (!is_numeric($row['2'])) {
                throw new Exception("Import gagal! Format tanggal salah!"); 
                exit;
            }
            return new LabResult([
                'patientid' => $row[0],
                'patientname' => $row[1],
                'date_of_birth' => PhpSpreadsheet\Shared\Date::excelToDateTimeObject($row['2'])->format('Y-m-d'),
                //'date_of_birth' => $row[2],
                'testcode' => $row[3],
                'testname' => $row[4],
                'result' => $row[5],
                'flag' => $row[6],
                'reference' => $row[7],
                'comment' => $row[8],
            ]);
        } catch (\Exception $e) {
            throw($e);
        }
    }
}
