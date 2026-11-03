---
id: faq
title: Perguntas frequentes
sidebar_label: Perguntas frequentes
---

import FAQ from '@site/src/components/FAQ';

# Perguntas frequentes {/* #faq */}

<FAQ id="google-play-pay-again" question="Paguei pelo StbEmu Pro no Google Play, mas não consigo baixá-lo. O Google Play pede que eu pague novamente">
    Este é um problema conhecido do Google Play. Aguarde até 24 horas para que o Google Play processe seu pagamento e atualize os dados nos seus dispositivos.
    Você também pode abrir um navegador da web no computador ou dispositivo móvel, acessar o [Google Play](https://play.google.com/store),
    encontrar o StbEmu Pro ([link direto](https://play.google.com/store/apps/details?id=com.mvas.stb.emu.pro))
    e instalá-lo remotamente nos seus dispositivos.
</FAQ>

<FAQ id="volume-level-resets-on-playback-start" question="O aplicativo redefine o nível de volume quando eu mudo de canal">
    Este é um problema conhecido em alguns dispositivos Sony, Philips e Xiaomi. Ele também pode afetar outros dispositivos.

    Para resolvê-lo, configure o aplicativo para usar o nível de volume do sistema (global):
    acesse [Settings](settings/index.md) > [Common settings](settings/common_settings.md) e ative ***Always use system volume level***.
    Recarregue o portal ativo pelo menu do aplicativo para que as alterações entrem em vigor.
</FAQ>

<FAQ id="customize-portal-ui" question="Como posso personalizar a interface do portal? Não gosto das cores ou dos ícones">
    Os portais são hospedados nos servidores do seu provedor de IPTV. Você só pode personalizar a interface se o provedor oferecer essa opção.
    A maioria dos portais não permite personalizar a interface, portanto somente o provedor de IPTV pode alterar sua aparência.
</FAQ>

<FAQ id="channels-disappear-from-favorites" question="Os canais desaparecem de Favorites quando recarrego o portal, ou não consigo reordená-los">
    Todas as listas de canais, incluindo os favoritos, são armazenadas nos servidores do seu provedor de IPTV. Se o aplicativo não carregar seus favoritos
    ou os carregar na ordem errada, o portal não foi configurado corretamente pelo provedor de IPTV.
    Somente o provedor pode resolver esse problema.
</FAQ>

<FAQ id="channels-buffer" question="Os canais param com frequência para carregar durante a reprodução">
    Pausas frequentes para carregamento geralmente indicam que sua conexão de rede ou a conexão do provedor de IPTV não é estável ou rápida o suficiente
    para transmitir vídeo ao seu dispositivo. Se tiver certeza de que sua conexão funciona corretamente, informe o problema ao provedor de IPTV.
</FAQ>

<FAQ id="m3u-support" question="O aplicativo aceita listas de reprodução M3U?">
    O StbEmu não aceita M3U nem outras listas de reprodução. Ele aceita apenas portais criados para dispositivos MAG.
</FAQ>

<FAQ id="cannot-create-or-restore-backups" question="Não consigo criar ou restaurar um backup no aplicativo">
    Atualmente, este recurso só funciona corretamente no Android 10 e em versões anteriores. A partir do Android 11, os aplicativos podem ler e gravar arquivos
    apenas nas próprias pastas por padrão. Os aplicativos podem solicitar permissão para acessar outras pastas, mas isso não funciona em alguns
    dispositivos Android TV e decodificadores (STBs). Os problemas subjacentes não serão corrigidos:
    [1](https://issuetracker.google.com/issues/71327396), [2](https://issuetracker.google.com/issues/202985150).

    Se seu dispositivo for afetado, você não poderá criar nem restaurar backups nele.
</FAQ>
