export default async (request, context) => {
    const url = new URL(request.url);

    // Só aplica para as LPs
    if (url.pathname.startsWith('/lp-saude') || url.pathname.startsWith('/lp-odonto')) {
        const city = context.geo?.city || 'sua cidade';
        const country = context.geo?.country?.code || 'BR';

        // Só substitui se for visitante do Brasil
        let replacementCity = city;
        if (country !== 'BR') {
            replacementCity = 'sua região';
        }

        // Reescreve HTML
        const response = await context.next();
        let html = await response.text();

        // Substitui {{CITY}} no conteúdo pelo nome detectado
        html = html.replace(/{{CITY}}/g, replacementCity);

        return new Response(html, {
            status: 200,
            headers: response.headers
        });
    }

    return context.next();
};
