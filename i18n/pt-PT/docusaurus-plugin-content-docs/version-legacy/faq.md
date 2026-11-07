---
id: faq
title: Perguntas frequentes
sidebar_label: Perguntas frequentes
---

import FAQ from '@site/src/components/FAQ';

# Perguntas frequentes {/* #faq */}

<FAQ id="google-play-pay-again" question="Paguei pelo StbEmu Pro no Google Play, mas não consigo transferi-lo. O Google Play pede que eu pague novamente">
    Este é um problema conhecido do Google Play. Aguarde até 24 horas para que o Google Play processe o seu pagamento e atualize os dados nos seus dispositivos.
    Pode também abrir um navegador Web no computador ou dispositivo móvel, aceder ao [Google Play](https://play.google.com/store),
    encontrar o StbEmu Pro ([link direto](https://play.google.com/store/apps/details?id=com.mvas.stb.emu.pro))
    e instalá-lo remotamente nos seus dispositivos.
</FAQ>

<FAQ id="volume-level-resets-on-playback-start" question="A aplicação repõe o nível de volume quando eu mudo de canal">
    Este é um problema conhecido em alguns dispositivos Sony, Philips e Xiaomi. Ele também pode afetar outros dispositivos.

    Para resolvê-lo, configure a aplicação para usar o nível de volume do sistema (global):
    aceda a [Settings](settings/index.md) > [Common settings](settings/common_settings.md) e ative ***Always use system volume level***.
    Recarregue o portal ativo pelo menu da aplicação para que as alterações entrem em vigor.
</FAQ>

<FAQ id="customize-portal-ui" question="Como posso personalizar a interface do portal? Não gosto das cores ou dos ícones">
    Os portais são alojados nos servidores do seu fornecedor de IPTV. Só pode personalizar a interface se o fornecedor oferecer essa opção.
    A maioria dos portais não permite personalizar a interface, portanto somente o fornecedor de IPTV pode alterar a sua aparência.
</FAQ>

<FAQ id="channels-disappear-from-favorites" question="Os canais desaparecem de Favorites quando recarrego o portal, ou não consigo reordená-los">
    Todas as listas de canais, incluindo os favoritos, são armazenadas nos servidores do seu fornecedor de IPTV. Se a aplicação não carregar os seus favoritos
    ou os carregar na ordem errada, o portal não foi configurado corretamente pelo fornecedor de IPTV.
    Somente o fornecedor pode resolver esse problema.
</FAQ>

<FAQ id="channels-buffer" question="Os canais param com frequência para carregar durante a reprodução">
    Pausas frequentes para carregamento normalmente indicam que a sua ligação de rede ou a ligação do fornecedor de IPTV não é estável ou rápida o suficiente
    para transmitir vídeo ao seu dispositivo. Se tiver a certeza de que a sua ligação funciona corretamente, informe o problema ao fornecedor de IPTV.
</FAQ>

<FAQ id="m3u-support" question="A aplicação aceita listas de reprodução M3U?">
    O StbEmu não aceita M3U nem outras listas de reprodução. Ele aceita apenas portais criados para dispositivos MAG.
</FAQ>

<FAQ id="cannot-create-or-restore-backups" question="Não consigo criar ou restaurar uma cópia de segurança na aplicação">
    Atualmente, esta funcionalidade só funciona corretamente no Android 10 e em versões anteriores. A partir do Android 11, as aplicações podem ler e gravar ficheiros
    apenas nas suas próprias pastas por predefinição. As aplicações podem solicitar permissão para aceder a outras pastas, mas isso não funciona em alguns
    dispositivos Android TV e descodificadores (STBs). Os problemas subjacentes não serão corrigidos:
    [1](https://issuetracker.google.com/issues/71327396), [2](https://issuetracker.google.com/issues/202985150).

    Se o seu dispositivo for afetado, não poderá criar nem restaurar cópias de segurança no mesmo.
</FAQ>
