<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LabResultResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'patientid' => $this->patientid,
            'patientname' => $this->patientname,
            'date_of_birth' => $this->date_of_birth,
            'testcode' => $this->testcode,
            'testname' => $this->testname,
            'result' => $this->result,
            'flag' => $this->flag,
            'reference' => $this->reference,
            'comment' => $this->comment,
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d H:i:s'),
            'updated_at' => (new Carbon($this->updated_at))->format('Y-m-d H:i:s'),
        ];
    }
}
