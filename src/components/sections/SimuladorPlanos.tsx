import React, { useState, useEffect } from 'react';

// Dados dos planos simulados
const PLANOS_SAUDE = [
    {
        id: 1,
        nome: 'Medeiro Essencial',
        precoIndividual: 89,
        precoFamiliar: 159,
        tipo: 'Ambulatorial + Hospitalar',
        acomodacao: 'Enfermaria',
        carencia: '24h para urgência',
        cobertura: 'Cobertura médica completa',
        rede: '500+ hospitais',
        destaque: false
    },
    {
        id: 2,
        nome: 'Medeiro Premium',
        precoIndividual: 129,
        precoFamiliar: 229,
        tipo: 'Ambulatorial + Hospitalar',
        acomodacao: 'Apartamento',
        carencia: '24h para urgência',
        cobertura: 'Cobertura médica + exames',
        rede: '800+ hospitais',
        destaque: true
    },
    {
        id: 3,
        nome: 'Medeiro Master',
        precoIndividual: 189,
        precoFamiliar: 339,
        tipo: 'Ambulatorial + Hospitalar',
        acomodacao: 'Apartamento',
        carencia: 'Zero carência*',
        cobertura: 'Cobertura completa + dental',
        rede: '1200+ hospitais',
        destaque: false
    }
];

const PLANOS_ODONTO = [
    {
        id: 1,
        nome: 'Medeiro Odonto Basic',
        precoIndividual: 29,
        precoFamiliar: 49,
        tipo: 'Odontológico Básico',
        cobertura: 'Consultas, limpezas, extrações',
        rede: '1000+ dentistas',
        destaque: false
    },
    {
        id: 2,
        nome: 'Medeiro Odonto Premium',
        precoIndividual: 49,
        precoFamiliar: 89,
        tipo: 'Odontológico Completo',
        cobertura: 'Tudo do Basic + canais, próteses',
        rede: '1500+ dentistas',
        destaque: true
    }
];

export default function SimuladorPlanos() {
    const [etapa, setEtapa] = useState(1);
    const [dados, setDados] = useState({
        tipo: '',
        idade: '',
        cep: '',
        necessidade: '',
        beneficiarios: 1
    });
    const [resultados, setResultados] = useState([]);
    const [mostrarResultados, setMostrarResultados] = useState(false);

    const handleInputChange = (campo, valor) => {
        setDados((prev) => ({
            ...prev,
            [campo]: valor
        }));
    };

    const proximaEtapa = () => {
        if (etapa < 4) {
            setEtapa((prev) => prev + 1);
        } else {
            simularPlanos();
        }
    };

    const etapaAnterior = () => {
        if (etapa > 1) {
            setEtapa((prev) => prev - 1);
        }
    };

    const simularPlanos = () => {
        let planos;

        if (dados.necessidade === 'saude') {
            planos = PLANOS_SAUDE;
        } else {
            planos = PLANOS_ODONTO;
        }

        // Ajustar preço por idade
        const planosAjustados = planos.map((plano) => {
            let multiplicador = 1;

            if (parseInt(dados.idade) >= 60) {
                multiplicador = 1.5;
            } else if (parseInt(dados.idade) >= 40) {
                multiplicador = 1.2;
            } else if (parseInt(dados.idade) >= 25) {
                multiplicador = 1.0;
            } else {
                multiplicador = 0.9;
            }

            const precoBase = dados.beneficiarios > 1 ? plano.precoFamiliar : plano.precoIndividual;
            const precoFinal = Math.round(precoBase * multiplicador * dados.beneficiarios);

            return {
                ...plano,
                precoFinal,
                precoOriginal: precoBase * dados.beneficiarios,
                desconto: Math.round((1 - multiplicador) * 100)
            };
        });

        setResultados(planosAjustados);
        setMostrarResultados(true);
    };

    const resetarSimulacao = () => {
        setEtapa(1);
        setDados({
            tipo: '',
            idade: '',
            cep: '',
            necessidade: '',
            beneficiarios: 1
        });
        setResultados([]);
        setMostrarResultados(false);
    };

    const contactarWhatsApp = (plano) => {
        const mensagem = `Olá! Gostaria de contratar o ${plano.nome} por R$ ${plano.precoFinal}/mês. Meus dados: ${dados.idade} anos, ${dados.cep}`;
        const url = `https://wa.me/5511999999999?text=${encodeURIComponent(mensagem)}`;
        window.open(url, '_blank');
    };

    if (mostrarResultados) {
        return (
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Planos Recomendados para Você</h2>
                    <p className="text-gray-600">
                        {dados.necessidade === 'saude' ? 'Planos de Saúde' : 'Planos Odontológicos'} •{dados.beneficiarios}{' '}
                        {dados.beneficiarios > 1 ? 'beneficiários' : 'beneficiário'} •{dados.idade} anos
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {resultados.map((plano) => (
                        <div
                            key={plano.id}
                            className={`p-6 rounded-lg border-2 ${plano.destaque ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'} relative`}
                        >
                            {plano.destaque && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Mais Popular</span>
                                </div>
                            )}

                            <h3 className="text-xl font-bold text-gray-900 mb-2">{plano.nome}</h3>

                            <div className="text-3xl font-bold text-green-600 mb-2">
                                R$ {plano.precoFinal}
                                <span className="text-sm text-gray-500">/mês</span>
                            </div>

                            {plano.desconto > 0 && (
                                <div className="text-sm text-green-600 mb-4">
                                    <span className="font-medium">Desconto jovem:</span> {plano.desconto}% off
                                </div>
                            )}

                            <ul className="space-y-2 mb-6 text-sm text-gray-600">
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    {plano.cobertura}
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    {plano.tipo}
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    {plano.rede}
                                </li>
                                {plano.carencia && (
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2">✓</span>
                                        {plano.carencia}
                                    </li>
                                )}
                            </ul>

                            <button
                                onClick={() => contactarWhatsApp(plano)}
                                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                                    plano.destaque ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-green-600 text-white hover:bg-green-700'
                                }`}
                            >
                                Contratar Agora
                            </button>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <button onClick={resetarSimulacao} className="text-blue-600 hover:text-blue-700 font-medium mr-4">
                        Nova Simulação
                    </button>
                    <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-medium">
                        Falar com Especialista
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Simule seu Plano Ideal</h2>
                <p className="text-gray-600">Responda algumas perguntas e encontre o melhor plano para você e sua família</p>

                {/* Progress bar */}
                <div className="mt-6 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: `${(etapa / 4) * 100}%` }} />
                </div>
            </div>

            {etapa === 1 && (
                <div>
                    <h3 className="text-xl font-semibold mb-4">Qual tipo de plano você precisa?</h3>
                    <div className="space-y-3">
                        {[
                            { value: 'saude', label: 'Plano de Saúde', desc: 'Cobertura médica completa' },
                            { value: 'odonto', label: 'Plano Odontológico', desc: 'Cuidados com o sorriso' },
                            { value: 'ambos', label: 'Plano de Saúde + Odontológico', desc: 'Solução completa' }
                        ].map((opcao) => (
                            <button
                                key={opcao.value}
                                onClick={() => handleInputChange('necessidade', opcao.value)}
                                className={`w-full p-4 text-left rounded-lg border-2 transition-colors ${
                                    dados.necessidade === opcao.value ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                                }`}
                            >
                                <div className="font-medium text-gray-900">{opcao.label}</div>
                                <div className="text-sm text-gray-600">{opcao.desc}</div>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {etapa === 2 && (
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quantos beneficiários?</h3>
                    <div className="grid grid-cols-3 gap-3 mb-6">
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                            <button
                                key={num}
                                onClick={() => handleInputChange('beneficiarios', num)}
                                className={`p-4 rounded-lg border-2 transition-colors ${
                                    dados.beneficiarios === num ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                                }`}
                            >
                                <div className="text-2xl font-bold text-gray-900">{num}</div>
                                <div className="text-sm text-gray-600">{num === 1 ? 'Pessoa' : 'Pessoas'}</div>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {etapa === 3 && (
                <div>
                    <h3 className="text-xl font-semibold mb-4">Qual a idade do titular?</h3>
                    <input
                        type="number"
                        value={dados.idade}
                        onChange={(e) => handleInputChange('idade', e.target.value)}
                        placeholder="Ex: 35"
                        className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                        min="0"
                        max="100"
                    />
                </div>
            )}

            {etapa === 4 && (
                <div>
                    <h3 className="text-xl font-semibold mb-4">Qual seu CEP?</h3>
                    <input
                        type="text"
                        value={dados.cep}
                        onChange={(e) => handleInputChange('cep', e.target.value)}
                        placeholder="Ex: 01310-100"
                        className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                    />
                    <p className="text-sm text-gray-600 mt-2">Usado para verificar cobertura na sua região</p>
                </div>
            )}

            <div className="flex justify-between mt-8">
                <button
                    onClick={etapaAnterior}
                    disabled={etapa === 1}
                    className={`px-6 py-3 rounded-lg font-medium ${
                        etapa === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                >
                    Anterior
                </button>

                <button
                    onClick={proximaEtapa}
                    disabled={(etapa === 1 && !dados.necessidade) || (etapa === 3 && !dados.idade) || (etapa === 4 && !dados.cep)}
                    className={`px-6 py-3 rounded-lg font-medium ${
                        (etapa === 1 && !dados.necessidade) || (etapa === 3 && !dados.idade) || (etapa === 4 && !dados.cep)
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                >
                    {etapa === 4 ? 'Simular Planos' : 'Próximo'}
                </button>
            </div>
        </div>
    );
}
