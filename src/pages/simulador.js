import React from 'react';
import Head from 'next/head';
import SimuladorPlanosAvancado from '../components/sections/SimuladorPlanosAvancado';

export default function SimuladorPage() {
    return (
        <>
            <Head>
                <title>Simulador de Planos - Medeiro</title>
                <meta name="description" content="Simule e encontre o plano de saúde ideal para você e sua família. Cotação rápida e contratação online." />
                <meta name="keywords" content="simulador, plano de saúde, cotação, individual, familiar, empresarial" />
                <meta property="og:title" content="Simulador de Planos - Medeiro" />
                <meta property="og:description" content="Simule e encontre o plano de saúde ideal para você e sua família." />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="http://localhost:3000/simulador" />
            </Head>

            <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                {/* Hero Section */}
                <section className="py-20 text-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">🎯 Simulador de Planos Inteligente</h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Encontre o plano de saúde ideal para você em apenas 3 passos simples. Nossa IA calcula o melhor preço para sua idade e perfil.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <div className="text-3xl mb-2">⚡</div>
                                <h3 className="text-xl font-bold mb-2">Cotação Instantânea</h3>
                                <p className="text-gray-600">Resultado em segundos</p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <div className="text-3xl mb-2">💰</div>
                                <h3 className="text-xl font-bold mb-2">Preços Competitivos</h3>
                                <p className="text-gray-600">Melhor custo-benefício</p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <div className="text-3xl mb-2">📱</div>
                                <h3 className="text-xl font-bold mb-2">Contratação Digital</h3>
                                <p className="text-gray-600">100% online</p>
                            </div>
                        </div>

                        {/* Simulador Button */}
                        <div className="flex justify-center">
                            <SimuladorPlanosAvancado />
                        </div>

                        {/* Features */}
                        <div className="mt-16">
                            <h2 className="text-3xl font-bold text-center mb-12">✨ Vantagens do Simulador</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                                    <div className="text-4xl mb-4">🎯</div>
                                    <h3 className="font-bold text-lg mb-2">Simulação Inteligente</h3>
                                    <p className="text-gray-600">IA que aprende seu perfil</p>
                                </div>

                                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                                    <div className="text-4xl mb-4">👨‍💼</div>
                                    <h3 className="font-bold text-lg mb-2">Atendimento Especialista</h3>
                                    <p className="text-gray-600">Fale com nosso time especializado</p>
                                </div>

                                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                                    <div className="text-4xl mb-4">🚀</div>
                                    <h3 className="font-bold text-lg mb-2">Contratação Rápida</h3>
                                    <p className="text-gray-600">Close o plano em minutos</p>
                                </div>

                                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                                    <div className="text-4xl mb-4">📊</div>
                                    <h3 className="font-bold text-lg mb-2">Análise Completa</h3>
                                    <p className="text-gray-600">Compare todas as opções</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonials */}
                        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
                            <h2 className="text-3xl font-bold text-center mb-8">💬 O que nossos clientes dizem</h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
                                    <p className="text-gray-600 mb-4">"Simulação muito fácil! Em 3 cliques já tinha meu plano ideal."</p>
                                    <p className="font-semibold">- Maria Silva, 32 anos</p>
                                </div>

                                <div className="text-center">
                                    <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
                                    <p className="text-gray-600 mb-4">"Atendimento especialista me ajudou muito. Recomendo!"</p>
                                    <p className="font-semibold">- João Santos, 45 anos</p>
                                </div>

                                <div className="text-center">
                                    <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
                                    <p className="text-gray-600 mb-4">"Preço justo e contratação 100% digital. Perfeito!"</p>
                                    <p className="font-semibold">- Ana Costa, 28 anos</p>
                                </div>
                            </div>
                        </div>

                        {/* FAQ */}
                        <div className="mt-16">
                            <h2 className="text-3xl font-bold text-center mb-12">❓ Perguntas Frequentes</h2>

                            <div className="max-w-3xl mx-auto space-y-6">
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="font-bold text-lg mb-2">🎯 Como funciona o simulador?</h3>
                                    <p className="text-gray-600">
                                        É muito simples! Você responde apenas sua idade e tipo de plano desejado. Nossa IA calcula automaticamente o melhor
                                        preço e opções disponíveis.
                                    </p>
                                </div>

                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="font-bold text-lg mb-2">⏱️ Quanto tempo leva para contratar?</h3>
                                    <p className="text-gray-600">
                                        Com nosso simulador, você pode contratar em até 5 minutos! Todo o processo é digital e você recebe confirmação por
                                        email.
                                    </p>
                                </div>

                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="font-bold text-lg mb-2">💳 Posso parcelar o pagamento?</h3>
                                    <p className="text-gray-600">
                                        Sim! Oferecemos diversas opções de pagamento: cartão de crédito, débito automático e PIX. Todas com desconto especial.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl font-bold mb-6">🚀 Não perca tempo, simule seu plano agora!</h2>
                        <p className="text-xl mb-8 text-blue-100">Mais de 50.000 pessoas já encontraram o plano ideal. Seja o próximo!</p>
                        <SimuladorPlanosAvancado className="text-2xl px-12 py-5" />
                    </div>
                </section>
            </main>
        </>
    );
}
