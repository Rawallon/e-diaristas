<?php

namespace App\Rules;

use App\Services\ViaCEP;
use Illuminate\Contracts\Validation\Rule;

class ValidaCep implements Rule
{
    public function __construct(
        public ViaCEP $viaCep
    ) {
    }

    public function passes($attribute, $value)
    {
        $cep = str_replace('-', '', $value);

        return !!$this->viaCep->buscar($cep);
    }

    public function message()
    {
        return 'Cep inválido';
    }
}
