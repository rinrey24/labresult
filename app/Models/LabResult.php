<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LabResult extends Model
{
    /** @use HasFactory<\Database\Factories\LabResultFactory> */
    use HasFactory;

    protected $fillable = [
        'patientid',
        'patientname',
        'date_of_birth',
        'testcode',
        'testname',
        'result',
        'flag',
        'reference',
        'comment',
    ];
}
