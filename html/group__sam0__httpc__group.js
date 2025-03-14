var group__sam0__httpc__group =
[
    [ "http_client_data_sock_connected", "structhttp__client__data__sock__connected.html", [
      [ "result", "structhttp__client__data__sock__connected.html#a8b2e13c78efca330f06b6ddcd7464b41", null ]
    ] ],
    [ "http_client_data_requested", "structhttp__client__data__requested.html", [
      [ "dummy", "structhttp__client__data__requested.html#a7c1d654b7b6114d7a0abc8d351dd1bcd", null ]
    ] ],
    [ "http_client_data_recv_response", "structhttp__client__data__recv__response.html", [
      [ "content", "structhttp__client__data__recv__response.html#ab0746fb6288bd31fd0d505fab48d8785", null ],
      [ "content_length", "structhttp__client__data__recv__response.html#ab909ac430e94fb90427cd6f198543358", null ],
      [ "is_chunked", "structhttp__client__data__recv__response.html#a03ad0ce2425cdd1501331c699965fca4", null ],
      [ "response_code", "structhttp__client__data__recv__response.html#a7555e8db166eb63c93a5f8d7d837fda8", null ]
    ] ],
    [ "http_client_data_recv_chunked_data", "structhttp__client__data__recv__chunked__data.html", [
      [ "data", "structhttp__client__data__recv__chunked__data.html#a91a70b77df95bd8b0830b49a094c2acb", null ],
      [ "is_complete", "structhttp__client__data__recv__chunked__data.html#a2c10764fc72bd9ce4e784307a5c14bca", null ],
      [ "length", "structhttp__client__data__recv__chunked__data.html#aebb70c2aab3407a9f05334c47131a43b", null ]
    ] ],
    [ "http_client_data_disconnected", "structhttp__client__data__disconnected.html", [
      [ "reason", "structhttp__client__data__disconnected.html#abf19fa5e55c24b9556075afc7b302bbe", null ]
    ] ],
    [ "http_client_data", "unionhttp__client__data.html", [
      [ "disconnected", "unionhttp__client__data.html#aecaf5a2087dcc7ffb0006f6aecae4658", null ],
      [ "recv_chunked_data", "unionhttp__client__data.html#a5499c9378ef8df6eabe68c9a49a64e40", null ],
      [ "recv_response", "unionhttp__client__data.html#a034edd7c485ad7e06e5cce2c8ea885b2", null ],
      [ "requested", "unionhttp__client__data.html#a0990d6b8c48238a2bd70e701a80711c6", null ],
      [ "sock_connected", "unionhttp__client__data.html#a41c79aa7e3ab0c7475f30bafd48481d3", null ]
    ] ],
    [ "http_client_config", "structhttp__client__config.html", [
      [ "port", "structhttp__client__config.html#a8e0798404bf2cf5dabb84c5ba9a4f236", null ],
      [ "recv_buffer", "structhttp__client__config.html#a638bb9e40e1642c3cde577cf07d4b1d8", null ],
      [ "recv_buffer_size", "structhttp__client__config.html#ab4cfed11f8ce4c3ac0451889ba84e4dd", null ],
      [ "send_buffer_size", "structhttp__client__config.html#a2500a7b12551940eecec5fc37c983c03", null ],
      [ "timeout", "structhttp__client__config.html#a7f1ad43d3bf79b40bc39dbb5a6c3a5ae", null ],
      [ "timer_inst", "structhttp__client__config.html#a353c48b87e92669cc47bbc480f0b7a90", null ],
      [ "tls", "structhttp__client__config.html#af40a8370836dd970cc369f3d6d438113", null ],
      [ "user_agent", "structhttp__client__config.html#ac9a491de5da435a17fcef423e6ac872b", null ]
    ] ],
    [ "http_client_req", "structhttp__client__req.html", [
      [ "content_length", "structhttp__client__req.html#a675a47f46ecd9d8ec01c738e04c28cbe", null ],
      [ "entity", "structhttp__client__req.html#adec739587121a50eb806302a9cdf353d", null ],
      [ "ext_header", "structhttp__client__req.html#acebe54cdd0c7971e2987a294efc8525b", null ],
      [ "method", "structhttp__client__req.html#aadf872200b42a5035916383e208fe65e", null ],
      [ "sent_length", "structhttp__client__req.html#a7aae5379081d01d95eda3d4e63f94b60", null ],
      [ "state", "structhttp__client__req.html#a1b0c7bd4d79798ef4e0ce23894c9aeb2", null ],
      [ "uri", "structhttp__client__req.html#adc5d711b5d7074cdfebd2469ee75dccb", null ]
    ] ],
    [ "http_client_resp", "structhttp__client__resp.html", [
      [ "content_length", "structhttp__client__resp.html#a675a47f46ecd9d8ec01c738e04c28cbe", null ],
      [ "read_length", "structhttp__client__resp.html#ac3840773bea86c3e600d0326dcf6047d", null ],
      [ "response_code", "structhttp__client__resp.html#a7555e8db166eb63c93a5f8d7d837fda8", null ],
      [ "state", "structhttp__client__resp.html#a1b0c7bd4d79798ef4e0ce23894c9aeb2", null ]
    ] ],
    [ "http_client_module", "structhttp__client__module.html", [
      [ "alloc_buffer", "structhttp__client__module.html#a45e79ceefac3229377e8fedad910bb78", null ],
      [ "cb", "structhttp__client__module.html#ac10ddaee4e8ffd1830879a2edcd25999", null ],
      [ "config", "structhttp__client__module.html#a9a2f4ca037ff87773bb3adae4154e415", null ],
      [ "host", "structhttp__client__module.html#adc91e993ddc764f1a637afcfca1130b8", null ],
      [ "permanent", "structhttp__client__module.html#a3fb4fd93620d92eca991821f05db9171", null ],
      [ "recved_size", "structhttp__client__module.html#ac028846ec3be27248dce3af23cf1b6c3", null ],
      [ "req", "structhttp__client__module.html#a1451712699ed524a71d1ad72fa39d888", null ],
      [ "resp", "structhttp__client__module.html#a429434c81bd5650c236a1e968e333f6d", null ],
      [ "sending", "structhttp__client__module.html#ae7c5ec1406a14566eb2861e9ef1071dc", null ],
      [ "sock", "structhttp__client__module.html#a6e91849780a994f2adde299b33642829", null ],
      [ "timer_id", "structhttp__client__module.html#a724d31681653653604a2b744c259cd16", null ]
    ] ],
    [ "http_entity", "structhttp__entity.html", [
      [ "close", "structhttp__entity.html#ae67038980459099ef17eecb464dc04e7", null ],
      [ "file_format", "structhttp__entity.html#a5c48fb3fa834d97a78d4c57bf3ec2fac", null ],
      [ "file_object", "structhttp__entity.html#afd6589773df9c2b32f3b1ffcb5e81105", null ],
      [ "get_contents_length", "structhttp__entity.html#ad907f6058fbc15a73521d2f952a2c7fa", null ],
      [ "get_contents_type", "structhttp__entity.html#ae546b2d1e5352960c6566fed7e55fac3", null ],
      [ "is_chunked", "structhttp__entity.html#a03ad0ce2425cdd1501331c699965fca4", null ],
      [ "priv_data", "structhttp__entity.html#a33e7865dc6cf5cbd56a8f1a654e306a5", null ],
      [ "read", "structhttp__entity.html#a36e7600f083cc983a82f6d7455a8059b", null ],
      [ "read_file", "structhttp__entity.html#a1b04bd978ceac0ba89ebae1afbc3db59", null ]
    ] ],
    [ "HTTP_HEADER_ACCEPT", "group__sam0__httpc__group.html#ga8916816e8bd30ab2ac3e8b66e2be2fb0", null ],
    [ "HTTP_HEADER_ACCEPT_CHARSET", "group__sam0__httpc__group.html#gaf9c39f07de45e13c8ce0efa1be802b10", null ],
    [ "HTTP_HEADER_ACCEPT_ENCODING", "group__sam0__httpc__group.html#ga935fe42723329d65ac28a93bbb3c8446", null ],
    [ "HTTP_HEADER_ACCEPT_LANGUAGE", "group__sam0__httpc__group.html#ga8111bf4ef8823270c3dbacf84df08db4", null ],
    [ "HTTP_HEADER_ACCEPT_RANGES", "group__sam0__httpc__group.html#ga5393ce8b7439d4700154bab8d5a321d5", null ],
    [ "HTTP_HEADER_AGE", "group__sam0__httpc__group.html#gaeb9dc3412bff43cfbef7f53174276af7", null ],
    [ "HTTP_HEADER_ALLOW", "group__sam0__httpc__group.html#gadf435d24a3a0be9d802c87b2d6cc44fd", null ],
    [ "HTTP_HEADER_AUTHORIZATION", "group__sam0__httpc__group.html#ga38aa3b5c1d7dedf7e3c5ebe547c7186f", null ],
    [ "HTTP_HEADER_CACHE_CONTROL", "group__sam0__httpc__group.html#ga679d049f214ef2e57f58362d973ed44d", null ],
    [ "HTTP_HEADER_CONNECTION", "group__sam0__httpc__group.html#ga40ddf5f8257286d98534081ddc3c0d1f", null ],
    [ "HTTP_HEADER_CONTENT_ENCODING", "group__sam0__httpc__group.html#gab665726bcd1bd9d2eb4a9c099432e750", null ],
    [ "HTTP_HEADER_CONTENT_LANGUAGE", "group__sam0__httpc__group.html#ga9fbb690f01d55f7a16fec287d27275c9", null ],
    [ "HTTP_HEADER_CONTENT_LENGTH", "group__sam0__httpc__group.html#ga46aa73d58026fc6ef40d5cc5b400933f", null ],
    [ "HTTP_HEADER_CONTENT_LOCATION", "group__sam0__httpc__group.html#gafe03aaec79247cdeb9edcb0d4140d80d", null ],
    [ "HTTP_HEADER_CONTENT_MD5", "group__sam0__httpc__group.html#gab3a2069809a3b41e54e1d7f99b15cb23", null ],
    [ "HTTP_HEADER_CONTENT_RANGE", "group__sam0__httpc__group.html#gacb9d62643078a46496af53879174ee62", null ],
    [ "HTTP_HEADER_CONTENT_TYPE", "group__sam0__httpc__group.html#ga9cecb5a44a36a9a305a8c61065fe10dd", null ],
    [ "HTTP_HEADER_DATE", "group__sam0__httpc__group.html#ga6556a25fcf96289b27ed7b67ff4d2d13", null ],
    [ "HTTP_HEADER_ETAG", "group__sam0__httpc__group.html#ga9dc521be0605b8e71b76a8796a2a55b9", null ],
    [ "HTTP_HEADER_EXPECT", "group__sam0__httpc__group.html#gaf57224e68b40c9ff6d1fe8085a7ffa8f", null ],
    [ "HTTP_HEADER_EXPIRES", "group__sam0__httpc__group.html#ga7bea0956bac8fa374c00d03cf7c26925", null ],
    [ "HTTP_HEADER_FROM", "group__sam0__httpc__group.html#ga128a6d300b03b4d9e920abdc4b11954d", null ],
    [ "HTTP_HEADER_HOST", "group__sam0__httpc__group.html#gaaf840f197519318b676469f473b64660", null ],
    [ "HTTP_HEADER_IF_MATCH", "group__sam0__httpc__group.html#ga944989c1bb1bd1457cfe5623b1bff334", null ],
    [ "HTTP_HEADER_IF_MODIFIED_SINCE", "group__sam0__httpc__group.html#ga2f451a6b8ef882116bea8c3eda13fb3d", null ],
    [ "HTTP_HEADER_IF_NONE_MATCH", "group__sam0__httpc__group.html#ga4d168305d316729eedc7e9819f067b11", null ],
    [ "HTTP_HEADER_IF_RANGE", "group__sam0__httpc__group.html#ga1f8d3e7b737fd1c2e4c04e3f4de5297f", null ],
    [ "HTTP_HEADER_IF_UNMODIFIED_SINCE", "group__sam0__httpc__group.html#gaaaef83aca428c8224f9cfc2a26925b9f", null ],
    [ "HTTP_HEADER_LAST_MODIFIED", "group__sam0__httpc__group.html#gaf3b41c7d880a68adfa7fcb0e07c408bc", null ],
    [ "HTTP_HEADER_LOCATION", "group__sam0__httpc__group.html#gaefdec3a91ec548e2aaf4af3108bac840", null ],
    [ "HTTP_HEADER_MAX_FORWARDS", "group__sam0__httpc__group.html#ga3e19a7d0a36e7b1e15c5d06f8e21f502", null ],
    [ "HTTP_HEADER_PRAGMA", "group__sam0__httpc__group.html#gaf935e3363617625316585962b92b729b", null ],
    [ "HTTP_HEADER_PROXY_AUTHENTICATE", "group__sam0__httpc__group.html#ga0a50e83edf73e110938f4862bf4ab062", null ],
    [ "HTTP_HEADER_PROXY_AUTHORIZATION", "group__sam0__httpc__group.html#gaf12fcf89c53a471be1c3ecd108a872d5", null ],
    [ "HTTP_HEADER_RANGE", "group__sam0__httpc__group.html#ga3020dc0ac0a35c522da074671151746e", null ],
    [ "HTTP_HEADER_REFERER", "group__sam0__httpc__group.html#gac51e0048c3be3c5cb2cfd3f8d4559543", null ],
    [ "HTTP_HEADER_RETRY_AFTER", "group__sam0__httpc__group.html#gae3a84e6dee2ebb67c2b51c2ceae0ae34", null ],
    [ "HTTP_HEADER_SERVER", "group__sam0__httpc__group.html#ga3b80b041ec73f67cb136c8349f941f5f", null ],
    [ "HTTP_HEADER_TE", "group__sam0__httpc__group.html#ga9356e49f6a87b2b5148d5cb895f6fbd4", null ],
    [ "HTTP_HEADER_TRAILER", "group__sam0__httpc__group.html#gac83c5e15fb14b7068f6afef027cdd9ab", null ],
    [ "HTTP_HEADER_TRANSFER_ENCODING", "group__sam0__httpc__group.html#ga8996054c0a947fe3e0270ecdc08decc3", null ],
    [ "HTTP_HEADER_UPGRADE", "group__sam0__httpc__group.html#ga2b7082003229b30bc92e654d8331444e", null ],
    [ "HTTP_HEADER_USER_AGENT", "group__sam0__httpc__group.html#ga2954b6cc4682aa527f8fa3b3d4ed9a59", null ],
    [ "HTTP_HEADER_VARY", "group__sam0__httpc__group.html#ga453709ee557e327295ddd1a67d2d4437", null ],
    [ "HTTP_HEADER_VIA", "group__sam0__httpc__group.html#ga6ed8f1f4e3328093dfb2ec94e6e80410", null ],
    [ "HTTP_HEADER_WARNING", "group__sam0__httpc__group.html#ga4cd3ae50487873894501df0e2c9deff9", null ],
    [ "HTTP_HEADER_WWW_AUTHENTICATE", "group__sam0__httpc__group.html#ga4e831399357f612e11862c9693581b33", null ],
    [ "HTTP_MAX_URI_LENGTH", "group__sam0__httpc__group.html#ga55515a8260b8763f7ce55aa74cc5d4ce", null ],
    [ "HTTP_PROTO_NAME", "group__sam0__httpc__group.html#ga5329bf136a09a39c7afabc613f247026", null ],
    [ "http_client_callback_t", "group__sam0__httpc__group.html#ga40b96b18363d00825a59831186bdc7e2", null ],
    [ "fileFormat", "group__sam0__httpc__group.html#ga76ccb82f4fe649df3933c92031a0369c", [
      [ "HTTP_FILE_FORMAT_NONE", "group__sam0__httpc__group.html#gga76ccb82f4fe649df3933c92031a0369ca6950dcb9f94369342ea732814abff78d", null ],
      [ "HTTP_FILE_FORMAT_FIT", "group__sam0__httpc__group.html#gga76ccb82f4fe649df3933c92031a0369cade165584de6d812dd72caac49267ecff", null ],
      [ "HTTP_FILE_FORMAT_TXT", "group__sam0__httpc__group.html#gga76ccb82f4fe649df3933c92031a0369ca7e89d246d2f675d60b8809b40656302e", null ]
    ] ],
    [ "http_client_callback_type", "group__sam0__httpc__group.html#ga7669724b03005e1c9c648216201f6051", [
      [ "HTTP_CLIENT_CALLBACK_SOCK_CONNECTED", "group__sam0__httpc__group.html#gga7669724b03005e1c9c648216201f6051ad4154464ffbcceba7624ad2978346cc7", null ],
      [ "HTTP_CLIENT_CALLBACK_REQUESTED", "group__sam0__httpc__group.html#gga7669724b03005e1c9c648216201f6051ac1586177fa8912a9e27612263679262b", null ],
      [ "HTTP_CLIENT_CALLBACK_RECV_RESPONSE", "group__sam0__httpc__group.html#gga7669724b03005e1c9c648216201f6051acf73b18429f6ac1dad22541003f93f2e", null ],
      [ "HTTP_CLIENT_CALLBACK_RECV_CHUNKED_DATA", "group__sam0__httpc__group.html#gga7669724b03005e1c9c648216201f6051ae1de2888f119a1ee8608162260bd2982", null ],
      [ "HTTP_CLIENT_CALLBACK_DISCONNECTED", "group__sam0__httpc__group.html#gga7669724b03005e1c9c648216201f6051a6445336f78a27080d31c1cc330716bbc", null ]
    ] ],
    [ "http_method", "group__sam0__httpc__group.html#gaacd5f203e33ac338ca5cb8f02a3ff3b8", [
      [ "HTTP_METHOD_GET", "group__sam0__httpc__group.html#ggaacd5f203e33ac338ca5cb8f02a3ff3b8a90754abc55dbb76862fa50abee5af659", null ],
      [ "HTTP_METHOD_POST", "group__sam0__httpc__group.html#ggaacd5f203e33ac338ca5cb8f02a3ff3b8a1944682922ac79b2e682312d8f3f71e2", null ],
      [ "HTTP_METHOD_DELETE", "group__sam0__httpc__group.html#ggaacd5f203e33ac338ca5cb8f02a3ff3b8a761371f7807255b7912afbac2f665ffe", null ],
      [ "HTTP_METHOD_PUT", "group__sam0__httpc__group.html#ggaacd5f203e33ac338ca5cb8f02a3ff3b8af7557927b605c64f35f629b43823b1c9", null ],
      [ "HTTP_METHOD_OPTIONS", "group__sam0__httpc__group.html#ggaacd5f203e33ac338ca5cb8f02a3ff3b8af6b02f8ff0467dbdaebb24f0a996cdd4", null ],
      [ "HTTP_METHOD_HEAD", "group__sam0__httpc__group.html#ggaacd5f203e33ac338ca5cb8f02a3ff3b8a27e993d38ff6b43284014a10798b6223", null ]
    ] ],
    [ "http_client_close", "group__sam0__httpc__group.html#ga3b780865c50a35872b9345a5b68f5827", null ],
    [ "http_client_deinit", "group__sam0__httpc__group.html#ga70ade0f3a852cf8ef85353d3924c4bbe", null ],
    [ "http_client_get_config_defaults", "group__sam0__httpc__group.html#gaee19421bcb97a63071929f2d7b236722", null ],
    [ "http_client_init", "group__sam0__httpc__group.html#ga378653b75c9a6c3aa0e4eece2a060f29", null ],
    [ "http_client_register_callback", "group__sam0__httpc__group.html#gac09af7517ba2954166ea3bdeffb94b39", null ],
    [ "http_client_send_request", "group__sam0__httpc__group.html#gabd66a129efd047b6b7d3f228237f991f", null ],
    [ "http_client_socket_event_handler", "group__sam0__httpc__group.html#ga3ac628e327d21a353ceaca0aa791ec51", null ],
    [ "http_client_socket_resolve_handler", "group__sam0__httpc__group.html#ga67a0805486cb8227ace452c91c2757f6", null ],
    [ "http_client_unregister_callback", "group__sam0__httpc__group.html#ga9e68a8961200d1421c3f5355db8097df", null ],
    [ "g_recv_pkg_cnt", "group__sam0__httpc__group.html#ga70ac76787683db9e4f40da1566f91f83", null ],
    [ "g_send_pkg_cnt", "group__sam0__httpc__group.html#gafcd0a32e95a87396a805ff98f0e2bc6e", null ]
];