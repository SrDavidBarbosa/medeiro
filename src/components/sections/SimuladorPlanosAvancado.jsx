import React, { useState, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

const SimuladorPlanosAvancado = ({ className = '' }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        idade: '',
        planoTipo: 'individual',
        cobertura: 'basica',
        modalidade: 'sem_odontologico'
    });
    const [precoCalculado, setPrecoCalculado] = useState(null);
    const [loading, setLoading] = useState(false);

    // Dados dos planos (poderiam vir de API) - Otimizado com useMemo
    const planos = useMemo(
        () => ({
            individual: {
                basica: { sem_odontologico: 89.9, com_odontologico: 129.9 },
                completa: { sem_odontologico: 149.9, com_odontologico: 199.9 },
                premium: { sem_odontologico: 249.9, com_odontologico: 319.9 }
            },
            familiar: {
                basica: { sem_odontologico: 159.9, com_odontologico: 229.9 },
                completa: { sem_odontologico: 279.9, com_odontologico: 359.9 },
                premium: { sem_odontologico: 419.9, com_odontologico: 519.9 }
            },
            empresarial: {
                basica: { sem_odontologico: 69.9, com_odontologico: 99.9 },
                completa: { sem_odontologico: 119.9, com_odontologico: 159.9 },
                premium: { sem_odontologico: 189.9, com_odontologico: 239.9 }
            }
        }),
        []
    );

    const calcularPreco = useCallback(() => {
        if (!formData.idade) return null;

        const idade = parseInt(formData.idade);
        const plano = planos[formData.planoTipo][formData.cobertura][formData.modalidade];

        // Ajuste de preço por idade (multiplicador)
        let multiplicador = 1;
        if (idade >= 0 && idade <= 18) multiplicador = 0.8;
        else if (idade >= 19 && idade <= 35) multiplicador = 1.0;
        else if (idade >= 36 && idade <= 50) multiplicador = 1.3;
        else if (idade >= 51 && idade <= 65) multiplicador = 1.6;
        else multiplicador = 2.0;

        return (plano * multiplicador).toFixed(2);
    }, [formData.idade, formData.planoTipo, formData.cobertura, formData.modalidade, planos]);

    useEffect(() => {
        const preco = calcularPreco();
        setPrecoCalculado(preco);
    }, [calcularPreco]);

    const handleStep1Submit = (e) => {
        e.preventDefault();
        if (formData.idade) {
            setStep(2);
        }
    };

    const handleFinalSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simular API call
        setTimeout(() => {
            setLoading(false);
            setStep(4); // Success step
        }, 2000);
    };

    const openWhatsApp = (tipoContrato) => {
        const numero = '34640645370'; // Número WhatsApp Business
        const idade = formData.idade;
        const plano = `${formData.planoTipo} - ${formData.cobertura}`;
        const preco = precoCalculado;

        let mensagem;
        if (tipoContrato === 'especialista') {
            mensagem = `Olá! Gostaria de contratar um plano de saúde com um especialista. Dados: Idade: ${idade} anos, Tipo: ${plano}, Preço calculado: R$ ${preco}/mês`;
        } else if (tipoContrato === 'informacoes') {
            mensagem = `Olá! Gostaria de mais informações sobre os planos. Fui direcionado pelo simulador.`;
        } else {
            mensagem = `Olá! Gostaria de contratar o plano de saúde. Dados: Idade: ${idade} anos, Tipo: ${plano}, Preço calculado: R$ ${preco}/mês`;
        }

        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, '_blank');
    };

    const resetSimulation = () => {
        setFormData({
            idade: '',
            planoTipo: 'individual',
            cobertura: 'basica',
            modalidade: 'sem_odontologico'
        });
        setStep(1);
        setPrecoCalculado(null);
    };

    return (
        <>
            {/* CTA Button to open modal */}
            <button
                onClick={() => setIsModalOpen(true)}
                className={`bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 ${className}`}
            >
                🎯 Simular meu plano agora
            </button>

            {/* Modal Overlay */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-2xl">
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-bold">🎯 Simulador de Planos</h2>
                                <button onClick={() => setIsModalOpen(false)} className="text-white hover:text-gray-200 text-2xl font-bold">
                                    ×
                                </button>
                            </div>
                            <p className="mt-2 text-blue-100">Encontre o plano ideal em segundos</p>
                        </div>

                        {/* Progress Bar */}
                        <div className="px-6 py-4 bg-gray-50">
                            <div className="flex items-center">
                                {[1, 2, 3].map((stepNumber) => (
                                    <div key={stepNumber} className="flex items-center">
                                        <div
                                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                                                step >= stepNumber ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-500'
                                            }`}
                                        >
                                            {stepNumber}
                                        </div>
                                        {stepNumber < 3 && <div className={`flex-1 h-1 mx-2 ${step > stepNumber ? 'bg-blue-600' : 'bg-gray-300'}`} />}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6">
                            {/* Step 1: Idade */}
                            {step === 1 && (
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold mb-4">Quantos anos você tem?</h3>
                                    <p className="text-gray-600 mb-6">Por favor, informe sua idade para calcular o preço do seu plano</p>

                                    <form onSubmit={handleStep1Submit}>
                                        <div className="mb-6">
                                            <input
                                                type="number"
                                                min="0"
                                                max="120"
                                                value={formData.idade}
                                                onChange={(e) => setFormData({ ...formData, idade: e.target.value })}
                                                placeholder="Ex: 30"
                                                className="w-full p-4 text-2xl text-center border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                                                required
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={!formData.idade}
                                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                                        >
                                            Calcular meu preço 💰
                                        </button>
                                    </form>
                                </div>
                            )}

                            {/* Step 2: Tipo de Plano */}
                            {step === 2 && (
                                <div>
                                    <h3 className="text-2xl font-bold mb-4 text-center">Escolha o tipo de plano</h3>
                                    <p className="text-gray-600 mb-6 text-center">Selecione a modalidade que melhor se adequa a você</p>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                        {[
                                            { key: 'individual', label: 'Individual', icon: '👤', desc: 'Só para você' },
                                            { key: 'familiar', label: 'Familiar', icon: '👨‍👩‍👧‍👦', desc: 'Para toda família' },
                                            { key: 'empresarial', label: 'Empresarial', icon: '🏢', desc: 'Para empresas' }
                                        ].map((tipo) => (
                                            <button
                                                key={tipo.key}
                                                onClick={() => setFormData({ ...formData, planoTipo: tipo.key })}
                                                className={`p-4 border-2 rounded-lg text-left transition-all ${
                                                    formData.planoTipo === tipo.key ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
                                                }`}
                                            >
                                                <div className="text-2xl mb-2">{tipo.icon}</div>
                                                <h4 className="font-bold text-lg">{tipo.label}</h4>
                                                <p className="text-gray-600 text-sm">{tipo.desc}</p>
                                            </button>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <button onClick={() => setStep(1)} className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold">
                                            Voltar
                                        </button>
                                        <button
                                            onClick={() => setStep(3)}
                                            className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
                                        >
                                            Continuar
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Resultado */}
                            {step === 3 && (
                                <div>
                                    <h3 className="text-2xl font-bold mb-4 text-center">Seu plano ideal</h3>

                                    {/* Resumo do plano */}
                                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg mb-6">
                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                            <div>
                                                <span className="text-gray-600">Modalidade:</span>
                                                <p className="font-bold">{formData.planoTipo}</p>
                                            </div>
                                            <div>
                                                <span className="text-gray-600">Idade:</span>
                                                <p className="font-bold">{formData.idade} anos</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Preço calculado */}
                                    <div className="text-center mb-6">
                                        <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                                            <p className="text-green-800 font-semibold mb-2">Preço mensal estimado:</p>
                                            <p className="text-3xl font-bold text-green-700">R$ {precoCalculado}</p>
                                            <p className="text-sm text-green-600 mt-2">*Preço final pode variar conforme cobertura</p>
                                        </div>
                                    </div>

                                    {/* CTAs */}
                                    <div className="space-y-3">
                                        <button
                                            onClick={() => openWhatsApp('contratar')}
                                            className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-lg font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all"
                                        >
                                            🚀 Contratar Plano Agora
                                        </button>

                                        <button
                                            onClick={() => openWhatsApp('especialista')}
                                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all"
                                        >
                                            👨‍💼 Contratar Com Especialista
                                        </button>

                                        <button
                                            onClick={() => openWhatsApp('informacoes')}
                                            className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all"
                                        >
                                            ℹ️ Obter Mais Informações
                                        </button>
                                    </div>

                                    <button onClick={resetSimulation} className="w-full mt-4 text-gray-500 hover:text-gray-700 text-sm">
                                        Refazer simulação
                                    </button>
                                </div>
                            )}

                            {/* Step 4: Success */}
                            {step === 4 && (
                                <div className="text-center">
                                    <div className="text-6xl mb-4">🎉</div>
                                    <h3 className="text-2xl font-bold mb-4">Solicitação enviada!</h3>
                                    <p className="text-gray-600 mb-6">Nossa equipe entrará em contato em breve para finalizar sua contratação.</p>

                                    <button onClick={resetSimulation} className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700">
                                        Nova simulação
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

SimuladorPlanosAvancado.propTypes = {
    className: PropTypes.string
};

export default SimuladorPlanosAvancado;
