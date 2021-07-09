<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Diarista extends Model
{
    use HasFactory;

    /**
     * Define os campos que podem ser gravados
     *
     * @var array
     */
    protected $fillable = [
        'nome_completo',
        'cpf',
        'email',
        'telefone',
        'logradouro',
        'numero',
        'complemento',
        'bairro',
        'cidade',
        'estado',
        'cep',
        'codigo_ibge',
        'foto_usuario'
    ];

    /**
     * Define os campos a serem retornados
     *
     * @var array
     */
    protected $visible = [
        'nome_completo',
        'cidade',
        'foto_usuario',
        'reputacao'
    ];

    /**
     * Adiciona campos no retorno
     *
     * @var array
     */
    protected $appends = ['reputacao'];

    /**
     * Monta URL na imagem
     *
     * @param string $valor
     * @return void
     */
    public function getFotoUsuarioAttribute($valor)
    {
        return config('app.url') . '/' . $valor;
    }

    /**
     * Retorna um valor aleatorio a reputacao
     *
     * @param string $valor
     * @return void
     */
    public function getReputacaoAttribute($valor)
    {
        return mt_rand(1, 5);
    }

    /**
     * Busca diaristas por código do IBGE
     *
     * @param integer $codigoIbge
     * @return void
     */
    static public function buscaPorCodigoIbge(int $codigoIbge)
    {
        return self::where('codigo_ibge', $codigoIbge)->limit(6)->get();
    }

    /**
     * Lista o numero restante de diaristas a ser exibido
     *
     * @param integer $codigoIbge
     * @return void
     */
    static public function quantidadePorCodigoIbge(int $codigoIbge)
    {
        $quantidade = self::where('codigo_ibge', $codigoIbge)->limit(6)->count();
        return $quantidade > 6 ? $quantidade - 6 : 0;
    }
}
