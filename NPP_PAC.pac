function FindProxyForURL(url, host) {
    // 定義要走 VPN 的網站
    if (dnsDomainIs(host, "outlook.com") ||
        dnsDomainIs(host, "erp.mycorp.com") ||
        shExpMatch(host, "*.office365.com")) {
        return "DIRECT";  // VPN 是系統預設路由時，DIRECT 表示走 VPN
    }
    // 其餘網站不走 VPN
    return "PROXY 127.0.0.1:9";  // 指向不存在的 Proxy，使其 fallback 為非 VPN
}