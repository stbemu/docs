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
    aceda a [Definições](/settings) > [Reprodução e comportamento](/settings/common-settings#playback--behavior) e ative ***Utilizar sempre o volume do sistema***.
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
    Na interface reformulada de Definições, abra [Cópia de segurança e restauro](/settings/backup-restore) e use o seletor de documentos do Android para selecionar um ficheiro ou local para guardar.
    Se não houver um seletor disponível, a aplicação utilizará as pastas de cópia de segurança acessíveis e o seu navegador de ficheiros.
    Verifique as permissões do dispositivo e o acesso ao ficheiro selecionado. Antes de restaurar, verifique o nome da cópia de segurança e o número de perfis e confirme a operação.
</FAQ>
