import{_ as r,r as t,o as p,c as i,a as n,b as a,F as b,d as s,e as l}from"./app.91d0dc40.js";const c={},o=n("h1",{id:"\u7EC3\u4E60-26-\u7F51\u7EDC-\u5C01\u5305\u8FC7\u6EE4\u914D\u7F6E-iptables",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7EC3\u4E60-26-\u7F51\u7EDC-\u5C01\u5305\u8FC7\u6EE4\u914D\u7F6E-iptables","aria-hidden":"true"},"#"),s(" \u7EC3\u4E60 26\uFF1A\u7F51\u7EDC\uFF1A\u5C01\u5305\u8FC7\u6EE4\u914D\u7F6E\uFF0C"),n("code",null,"iptables")],-1),d=s("\u539F\u6587\uFF1A"),T={href:"https://archive.fo/D3zbt",target:"_blank",rel:"noopener noreferrer"},u=s("Exercise 26. Networking: packet filter configuration, iptables"),m=s("\u8BD1\u8005\uFF1A"),P={href:"https://github.com/wizardforcel",target:"_blank",rel:"noopener noreferrer"},C=s("\u98DE\u9F99"),O=s("\u534F\u8BAE\uFF1A"),R={href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank",rel:"noopener noreferrer"},_=s("CC BY-NC-SA 4.0"),E=s("\u81EA\u8C6A\u5730\u91C7\u7528"),S={href:"https://translate.google.cn/",target:"_blank",rel:"noopener noreferrer"},I=s("\u8C37\u6B4C\u7FFB\u8BD1"),h=s("\u8BA9\u6211\u4EE5\u5F15\u7528\u7EF4\u57FA\u767E\u79D1\u4E0A\u7684"),N={href:"http://en.wikipedia.org/wiki/Iptables",target:"_blank",rel:"noopener noreferrer"},U=n("code",null,"iptables",-1),x=s("\u6765\u5F00\u59CB\uFF1A"),D=n("blockquote",null,[n("p",null,[n("code",null,"iptables"),s("\u662F\u4E00\u4E2A\u7528\u6237\u6001\u5E94\u7528\u7A0B\u5E8F\uFF0C\u5141\u8BB8\u7CFB\u7EDF\u7BA1\u7406\u5458\u914D\u7F6E\u7531 Linux \u5185\u6838\u9632\u706B\u5899\uFF08\u5B9E\u73B0\u4E3A\u4E0D\u540C\u7684 Netfilter \u6A21\u5757\uFF09\u63D0\u4F9B\u7684\u8868\uFF0C\u4EE5\u53CA\u5B83\u5B58\u50A8\u7684\u94FE\u548C\u89C4\u5219\u3002\u4E0D\u540C\u7684\u5185\u6838\u6A21\u5757\u548C\u7A0B\u5E8F\u76EE\u524D\u7528\u4E8E\u4E0D\u540C\u7684\u534F\u8BAE\uFF1B"),n("code",null,"iptables"),s("\u9002\u7528\u4E8E IPv4\uFF0C"),n("code",null,"ip6tables"),s("\u9002\u7528\u4E8E IPv6\uFF0C"),n("code",null,"arptables"),s("\u9002\u7528\u4E8E ARP\uFF0C"),n("code",null,"ebtables"),s("\u9002\u7528\u4E8E\u4EE5\u592A\u7F51\u5E27\u3002")])],-1),A=n("p",null,"\u4E3A\u4E86\u4F7F\u7528\u5B83\uFF0C\u4F60\u5FC5\u987B\u4E86\u89E3\u4EE5\u4E0B\u6982\u5FF5\uFF1A",-1),g={href:"http://www.tcpdump.org/linktypes/LINKTYPE_LINUX_SLL.html",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LINKTYPE_LINUX_SLL",-1),L=s(" - "),v=n("code",null,"tcpdump",-1),G=s("\u4F2A\u94FE\u8DEF\u5C42\u534F\u8BAE\u3002"),W={href:"http://en.wikipedia.org/wiki/Ethernet_frame%23Header",target:"_blank",rel:"noopener noreferrer"},y=s("\u4EE5\u592A\u7F51\u5E27\u5934\u90E8"),w=s(" - \u4EE5\u592A\u7F51\u94FE\u8DEF\u4E0A\u7684\u6570\u636E\u5305\u79F0\u4E3A\u4EE5\u592A\u7F51\u5E27\u3002\u5E27\u4EE5\u524D\u7F00\u548C\u8D77\u59CB\u5206\u9694\u7B26\u5F00\u59CB\u3002\u63A5\u4E0B\u6765\uFF0C\u6BCF\u4E2A\u4EE5\u592A\u7F51\u5E27\u90FD\u6709\u4E00\u4E2A\u5934\u90E8\uFF0C\u5176\u7279\u5F81\u4E3A\u6E90\u548C\u76EE\u6807 MAC \u5730\u5740\u3002\u5E27\u7684\u4E2D\u95F4\u90E8\u5206\u662F\u8F7D\u8377\u6570\u636E\uFF0C\u5305\u542B\u5E27\u4E2D\u643A\u5E26\u7684\u5176\u4ED6\u534F\u8BAE\uFF08\u4F8B\u5982\uFF0C\u4E92\u8054\u7F51\u534F\u8BAE\uFF09\u7684\u4EFB\u4F55\u5934\u90E8\u3002\u8BE5\u5E27\u4EE5 32 \u4F4D\u5FAA\u73AF\u5197\u4F59\u6821\u9A8C\uFF08CRC\uFF09\u7ED3\u675F\uFF0C\u7528\u4E8E\u68C0\u6D4B\u4F20\u8F93\u4E2D\u6570\u636E\u7684\u4EFB\u4F55\u635F\u574F\u3002"),K={href:"http://en.wikipedia.org/wiki/IPv4_header%23IPv4%20header",target:"_blank",rel:"noopener noreferrer"},F=s("IPv4 \u5934\u90E8"),k=s(" - IP \u5C01\u5305\u5305\u62EC\u5934\u90E8\u90E8\u5206\u548C\u6570\u636E\u90E8\u5206\u3002IPv4 \u5C01\u5305\u5934\u90E8\u7531 14 \u4E2A\u5B57\u6BB5\u7EC4\u6210\uFF0C\u5176\u4E2D 13 \u4E2A\u662F\u5FC5\u9700\u7684\u3002\u7B2C\u5341\u56DB\u4E2A\u5B57\u6BB5\u662F\u53EF\u9009\u7684\uFF0C\u9002\u5F53\u5730\u547D\u540D\u4E3A\uFF1A"),M=n("code",null,"options",-1),Q=s("\u3002"),B={href:"http://en.wikipedia.org/wiki/Transmission_Control_Protocol%23TCP_segment_structure",target:"_blank",rel:"noopener noreferrer"},$=s("TCP \u6BB5\u7ED3\u6784"),q=s(" - \u4F20\u8F93\u63A7\u5236\u534F\u8BAE\u63A5\u53D7\u6765\u81EA\u6570\u636E\u6D41\u7684\u6570\u636E\uFF0C\u5C06\u5176\u5206\u5272\u6210\u5757\uFF0C\u5E76\u6DFB\u52A0 TCP \u5934\u90E8\u6765\u521B\u5EFA TCP \u6BB5\u3002TCP \u6BB5\u7136\u540E\u88AB\u5C01\u88C5\u6210\u4E92\u8054\u7F51\u534F\u8BAE\uFF08IP\uFF09\u6570\u636E\u62A5\u3002TCP \u6BB5\u662F\u201C\u4FE1\u606F\u5C01\u5305\uFF0CTCP \u7528\u4E8E\u4E0E\u5BF9\u65B9\u4EA4\u6362\u6570\u636E\u201D\u3002"),H=n("p",null,"\u6211\u4F1A\u63D0\u9192\u4F60\uFF0C\u8BA9\u4F60\u83B7\u53D6\u4E00\u4E9B\u6307\u5357\uFF1A",-1),Y=n("li",null,[s("\u9605\u8BFB\u76F8\u5E94\u7684\u7EF4\u57FA\u767E\u79D1\u6587\u7AE0\uFF0C\u76F4\u5230\u4F60\u81F3\u5C11\u8868\u9762\u4E0A\u7406\u89E3\u4E86\u5B83\uFF08\u4F46\u662F\u6DF1\u5165\u7814\u7A76\u5F53\u7136\u66F4\u597D\uFF09\u3002 "),n("ul",null,[n("li",null,"\u5C55\u5F00\u7AD9\u70B9\u5DE6\u4FA7\u7684 IP \u5730\u5740\u6811\u8282\u70B9\uFF0C\u5E76\u901A\u8FC7\u5B83\u6765\u4EE5\u4F60\u7684\u65B9\u5F0F\u5B9E\u73B0\u3002"),n("li",null,"\u5C55\u5F00 TCP \u6811\u8282\u70B9\u5E76\u6267\u884C\u76F8\u540C\u64CD\u4F5C\u3002")])],-1),j=s("\u9605\u8BFB "),J={href:"http://www.iptables.org/documentation/HOWTO//networking-concepts-HOWTO-3.html%23ss3.1",target:"_blank",rel:"noopener noreferrer"},X=s("Linux \u7F51\u7EDC\u6982\u5FF5\u4ECB\u7ECD"),Z=s("\u3002\u8FD9\u672C\u6307\u5357\u5F88\u597D\uFF0C\u56E0\u4E3A\u5B83\u751A\u81F3\u627F\u8BA4 \u4E92\u8054\u7F51\u662F\u4E3A\u60C5\u6B32\u800C\u751F\u7684\u3002"),V=s("\u6BD4\u8D77 "),z={href:"http://www.linuxhomenetworking.com/wiki/index.php/Quick_HOWTO_:_Ch14_:_Linux_Firewalls_Using_iptables",target:"_blank",rel:"noopener noreferrer"},nn=s("Peter Harrison \u7684\u4F18\u79C0\u6307\u5357"),sn=s("\uFF0C\u6211\u6CA1\u529E\u6CD5\u66F4\u597D\u5730\u63CF\u8FF0"),en=n("code",null,"iptables",-1),an=s("\u4E86\u3002\u5982\u679C\u4F60\u4ECE\u672A\u4F7F\u7528\u8FC7\u5B83\uFF0C\u8BF7\u5148\u9605\u8BFB\u672C\u6307\u5357\u3002"),ln=l(`<p>\u4F46\u662F\uFF0C\u6211\u5C06\u4F1A\u5C06\u7406\u8BBA\u4ED8\u8BF8\u5B9E\u8DF5\uFF0C\u5E76 \u5728\u6570\u636E\u4EA4\u6362\u7684\u4E00\u4E2A\u975E\u5E38\u7B80\u5355\u7684\u60C5\u51B5\u4E0B\uFF0C\u9010\u6B65\u5C55\u793A\u51FA<code>iptalbes</code>\u5185\u90E8\u7684\u5185\u5BB9\u3002\u7B2C\u4E00\u4EF6\u4E8B\u60C5\u662F\u4E3B\u8981\u6982\u5FF5\uFF1A</p><p><code>iptables</code> - \u7528\u4E8E\u5728 Linux \u5185\u6838\u4E2D\u8BBE\u7F6E\uFF0C\u7EF4\u62A4\u548C\u68C0\u67E5 IPv4 \u5305\u8FC7\u6EE4\u89C4\u5219\u8868\u7684\u7A0B\u5E8F\u3002\u53EF\u4EE5\u5B9A\u4E49\u51E0\u4E2A\u4E0D\u540C\u7684\u8868\u3002\u6BCF\u4E2A\u8868\u5305\u542B\u591A\u4E2A\u5185\u7F6E\u94FE\uFF0C\u5E76\u4E14\u8FD8\u53EF\u4EE5\u5305\u542B\u7528\u6237\u5B9A\u4E49\u7684\u94FE\u3002 <code>ip6tables</code> - \u7528\u4E8E IPv6 \u7684\u76F8\u540C\u4E1C\u897F\u3002 \u94FE - \u53EF\u4EE5\u5339\u914D\u4E00\u7EC4\u6570\u636E\u5305\u7684\u89C4\u5219\u5217\u8868\u3002\u6BCF\u4E2A\u89C4\u5219\u89C4\u5B9A\u4E86\uFF0C\u5982\u4F55\u5904\u7406\u5339\u914D\u7684\u6570\u636E\u5305\u3002\u8FD9\u88AB\u79F0\u4E3A\u76EE\u6807\uFF0C\u5B83\u53EF\u80FD\u662F\u76F8\u540C\u8868\u4E2D\u7684\uFF0C\u7528\u6237\u5B9A\u4E49\u7684\u94FE\u7684\u8DF3\u8F6C\u3002 \u76EE\u6807 - \u9632\u706B\u5899\u89C4\u5219\u4E3A\u5C01\u5305\u548C\u76EE\u6807\u6307\u5B9A\u4E86\u5224\u522B\u6807\u51C6\u3002\u5982\u679C\u6570\u636E\u5305\u4E0D\u5339\u914D\uFF0C\u5C31\u4F1A\u68C0\u67E5\u7684\u94FE\u4E2D\u7684\u4E0B\u4E00\u4E2A\u89C4\u5219\uFF1B\u5982\u679C\u5B83\u5339\u914D\uFF0C\u5219\u4E0B\u4E00\u4E2A\u89C4\u5219\u7531\u76EE\u6807\u7684\u503C\u6307\u5B9A\uFF0C\u8BE5\u503C\u53EF\u4EE5\u662F\u7528\u6237\u5B9A\u4E49\u94FE\u7684\u540D\u79F0\u6216\u7279\u6B8A\u503C\u4E4B\u4E00\uFF1A</p><p><code>ACCEPT</code> - \u8BA9\u5305\u901A\u8FC7\u3002 <code>DROP</code> - \u5C06\u6570\u636E\u5305\u4E22\u5F03\u3002 <code>QUEUE</code> - \u5C06\u6570\u636E\u5305\u4F20\u9012\u7ED9\u7528\u6237\u7A7A\u95F4\u3002 <code>RETURN</code> - \u505C\u6B62\u904D\u5386\u6B64\u94FE\uFF0C\u5E76\u5728\u4E0A\u4E00\u4E2A\uFF08\u8C03\u7528\uFF09\u94FE\u4E2D\u7684\u4E0B\u4E00\u4E2A\u89C4\u5219\u5904\u6062\u590D\u3002\u5982\u679C\u8FBE\u5230\u4E86\u5185\u7F6E\u94FE\u7684\u7ED3\u5C3E\uFF0C\u6216\u8005\u5185\u7F6E\u94FE\u4E2D\u7684\u4E00\u4E2A\u5E26\u6709<code>RETURN</code>\u7684\u89C4\u5219\u5339\u914D\u5B83\uFF0C\u94FE\u7B56\u7565\u6307\u5B9A\u7684\u76EE\u6807\u51B3\u5B9A\u4E86\u6570\u636E\u5305\u7684\u547D\u8FD0\u3002</p><p>\u73B0\u5728\u8BA9\u6211\u4EEC\u770B\u770B\u6709\u4EC0\u4E48\u9ED8\u8BA4\u7684\u8868\u548C\u5185\u7F6E\u7684\u94FE\uFF1A</p><table><thead><tr><th>\u8868\u540D</th><th>\u5185\u7F6E\u94FE</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>raw</code></td><td></td><td>\u8BE5\u8868\u4E3B\u8981\u7528\u4E8E\u914D\u7F6E\u4E0E<code>NOTRACK</code>\u76EE\u6807\u7ED3\u5408\u7684\u8FDE\u63A5\u8DDF\u8E2A\u7684\u514D\u9664\u3002\u5B83\u4EE5\u8F83\u9AD8\u7684\u4F18\u5148\u7EA7\u5728<code>netfilter</code>\u94A9\u5B50\u4E2D\u6CE8\u518C\uFF0C\u56E0\u6B64\u5728<code>ip_conntrack</code>\u6216\u4EFB\u4F55\u5176\u4ED6 IP \u8868\u4E4B\u524D\u8C03\u7528\u3002</td></tr><tr><td></td><td>PREROUTING</td><td>\u7528\u4E8E\u7ECF\u8FC7\u4EFB\u4F55\u7F51\u7EDC\u63A5\u53E3\u5230\u8FBE\u7684\u5C01\u5305\u3002</td></tr><tr><td></td><td>OUTPUT</td><td>\u7528\u4E8E\u672C\u5730\u8FDB\u7A0B\u751F\u6210\u7684\u5C01\u5305\u3002</td></tr><tr><td><code>mangle</code></td><td></td><td>\u8BE5\u8868\u7528\u4E8E\u4E13\u95E8\u7684\u6570\u636E\u5305\u66F4\u6539\u3002</td></tr><tr><td></td><td>PREROUTING</td><td>\u7528\u4E8E\u5728\u8DEF\u7531\u4E4B\u524D\u66F4\u6539\u4F20\u5165\u7684\u6570\u636E\u5305\u3002</td></tr><tr><td></td><td>OUTPUT</td><td>\u7528\u4E8E\u5728\u8DEF\u7531\u4E4B\u524D\u66F4\u6539\u672C\u5730\u751F\u6210\u7684\u6570\u636E\u5305\u3002</td></tr><tr><td></td><td>INPUT</td><td>\u7528\u4E8E\u8FDB\u5165\u672C\u673A\u7684\u6570\u636E\u5305\u3002</td></tr><tr><td></td><td>FORWARD</td><td>\u7528\u4E8E\u7ECF\u8FC7\u672C\u673A\u7684\u6570\u636E\u5305\u3002</td></tr><tr><td></td><td>POSTROUTING</td><td>\u7528\u4E8E\u5F53\u6570\u636E\u5305\u6253\u7B97\u51FA\u53BB\u65F6\uFF0C\u66F4\u6539\u5B83\u4EEC\u3002</td></tr><tr><td><code>nat</code></td><td></td><td>\u5F53\u9047\u5230\u521B\u5EFA\u65B0\u8FDE\u63A5\u7684\u6570\u636E\u5305\u65F6\uFF0C\u5C06\u67E5\u770B\u6B64\u8868\u3002</td></tr><tr><td></td><td>PREROUTING</td><td>\u7528\u4E8E\u4E00\u65E6\u6570\u636E\u5305\u8FDB\u6765\uFF0C\u5C31\u66F4\u6539\u5B83\u4EEC\u3002</td></tr><tr><td></td><td>OUTPUT</td><td>\u7528\u4E8E\u5728\u8DEF\u7531\u4E4B\u524D\u66F4\u6539\u672C\u5730\u751F\u6210\u7684\u6570\u636E\u5305\u3002</td></tr><tr><td></td><td>POSTROUTING</td><td>\u7528\u4E8E\u5F53\u6570\u636E\u5305\u6253\u7B97\u51FA\u53BB\u65F6\uFF0C\u66F4\u6539\u5B83\u4EEC\u3002</td></tr><tr><td><code>filter</code></td><td></td><td>\u8FD9\u662F\u9ED8\u8BA4\u8868\uFF08\u5982\u679C\u6CA1\u6709\u4F20\u5165<code>-t</code>\u9009\u9879\uFF09\u3002</td></tr><tr><td></td><td>INPUT</td><td>\u7528\u4E8E\u53D1\u5F80\u672C\u5730\u5957\u63A5\u5B57\u7684\u6570\u636E\u5305\u3002</td></tr><tr><td></td><td>FORWARD</td><td>\u7528\u4E8E\u7ECF\u8FC7\u672C\u673A\u7684\u6570\u636E\u5305\u3002</td></tr><tr><td></td><td>OUTPUT</td><td>\u7528\u4E8E\u672C\u5730\u751F\u6210\u7684\u6570\u636E\u5305\u3002</td></tr></tbody></table><p>\u597D\u7684\uFF0C\u6211\u4EEC\u51C6\u5907\u770B\u770B\u5B83\u5B9E\u9645\u5982\u4F55\u8FD0\u4F5C\u3002\u6211\u4F1A\u4ECE\u6211\u7684\u5BB6\u7528\u8BA1\u7B97\u673A\uFF0C\u4F7F\u7528 TCP \u534F\u8BAE\u548C<code>netcat</code>\u5411<code>vm1</code>\u53D1\u9001\u4E00\u4E2A\u5B57\u7B26\u4E32<code>Hello world!</code>\uFF0C<code>netcat</code>\u5C31\u50CF<code>cat</code>\u4E00\u6837\uFF0C\u4F46\u662F\u901A\u8FC7\u7F51\u7EDC\u3002\u8D77\u6B65\uFF1A</p><p>1. \u6211\u5C06\u53E6\u4E00\u4E2A\u7AEF\u53E3\uFF0C80\uFF0C\u8F6C\u53D1\u5230\u6211\u8FD0\u884C Linux \u7684\u5BB6\u7528 PC\uFF0C\u6240\u4EE5\u6211\u80FD\u8C61\u8FD9\u6837\u8FDE\u63A5\u5B83\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(My home PC) --&gt; vm1:80
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>2. \u6211\u5C06\u8FD9\u4E2A\u89C4\u5219\u6DFB\u52A0\u5230<code>iptables</code>\uFF0C\u6765\u8BB0\u5F55<code>iptables</code>\u5185\u90E8\u7684\u6570\u636E\u5305\u53D1\u751F\u4E86\u4EC0\u4E48\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo iptables -t raw -A PREROUTING -p tcp -m tcp --dport 80 -j TRACE
sudo iptables -t raw -A INPUT -p tcp -m tcp --sport 80 -j TRACE
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8FD9\u662F\u6211\u7684<code>vm1</code>\u4E0A\u7684<code>iptables</code>\u89C4\u5219\u96C6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@vm1:/home/user1# for i in raw mangle nat filter ; do echo -e &quot;\\n-----&quot; TABLE: $i &#39;-----&#39; ; iptables -t $i -L ; done

----- TABLE: raw -----
Chain PREROUTING (policy ACCEPT)  target     prot opt source               destination
                                  TRACE      tcp  --  anywhere             anywhere            tcp dpt:www
Chain OUTPUT (policy ACCEPT)      target     prot opt source               destination
                                  TRACE      tcp  --  anywhere             anywhere            tcp spt:www
----- TABLE: mangle -----
Chain PREROUTING (policy ACCEPT)  target     prot opt source               destination
Chain INPUT (policy ACCEPT)       target     prot opt source               destination
Chain FORWARD (policy ACCEPT)     target     prot opt source               destination
Chain OUTPUT (policy ACCEPT)      target     prot opt source               destination
Chain POSTROUTING (policy ACCEPT) target     prot opt source               destination
 
----- TABLE: nat -----
Chain PREROUTING (policy ACCEPT)  target     prot opt source               destination
Chain POSTROUTING (policy ACCEPT) target     prot opt source               destination
Chain OUTPUT (policy ACCEPT)      target     prot opt source               destination
 
----- TABLE: filter -----
Chain INPUT (policy ACCEPT)       target     prot opt source               destination
Chain FORWARD (policy ACCEPT)     target     prot opt source               destination
Chain OUTPUT (policy ACCEPT)      target     prot opt source               destination
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u4F60\u53EF\u4EE5\u770B\u5230\uFF0C\u6CA1\u6709\u5176\u5B83\u89C4\u5219\u4E86\u3002\u53E6\u4E00\u79CD\u67E5\u770B<code>iptables</code>\u89C4\u5219\u7684\u65B9\u5F0F\uFF0C\u662F\u4F7F\u7528<code>iptables-save</code>\u5DE5\u5177\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@vm1:/home/user1# iptables-save
# Generated by iptables-save v1.4.8 on Fri Jul 13 08:09:04 2012
#(1)
*mangle
#(2)        (3)     (4)   (5)
:PREROUTING ACCEPT [15662:802240]
:INPUT ACCEPT [15662:802240]
:FORWARD ACCEPT [0:0]
:OUTPUT ACCEPT [12756:3671974]
:POSTROUTING ACCEPT [12756:3671974]
COMMIT
# Completed on Fri Jul 13 08:09:04 2012
# Generated by iptables-save v1.4.8 on Fri Jul 13 08:09:04 2012
*nat
:PREROUTING ACCEPT [18:792]
:POSTROUTING ACCEPT [42:2660]
:OUTPUT ACCEPT [42:2660]
COMMIT
# Completed on Fri Jul 13 08:09:04 2012
# Generated by iptables-save v1.4.8 on Fri Jul 13 08:09:04 2012
*raw
:PREROUTING ACCEPT [15854:814892]
:OUTPUT ACCEPT [12855:3682054]
-A PREROUTING -p tcp -m tcp --dport 80 -j TRACE
-A OUTPUT -p tcp -m tcp --sport 80 -j TRACE
COMMIT
# Completed on Fri Jul 13 08:09:04 2012
# Generated by iptables-save v1.4.8 on Fri Jul 13 08:09:04 2012
*filter
:INPUT ACCEPT [35107:2459066]
:FORWARD ACCEPT [0:0]
:OUTPUT ACCEPT [26433:10670628]
COMMIT
# Completed on Fri Jul 13 08:09:04 2012
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p><code> iptables-save</code>\u5B57\u6BB5\u5982\u4E0B\u6240\u793A\uFF1A</p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>(1)</td><td>\u8868\u540D\u79F0</td></tr><tr><td>(2)</td><td>\u94FE\u540D\u79F0</td></tr><tr><td>(3)</td><td>\u94FE\u7B56\u7565</td></tr><tr><td>(4)</td><td>\u5C01\u5305\u8BA1\u6570</td></tr><tr><td>(5)</td><td>\u5B57\u8282\u8BA1\u6570</td></tr></tbody></table><p>3. \u6211\u542F\u52A8<code>nc</code>\u6765\u76D1\u542C\u7AEF\u53E3 80\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>nc -l 80
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>4. \u6211\u5411<code>vm1</code>\u53D1\u9001\u5B57\u7B26\u4E32\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>echo &#39;Hello, world!&#39; | nc localhost 80
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4E0B\u9762\u7684\u662F\u6211\u7684\u5BB6\u7528 PC \u548C<code>vm1</code>\u4E4B\u95F4\u7684\u4EA4\u6362\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>08:00:05.655339 IP 10.0.2.2.51534 &gt; 10.0.2.15.80: Flags [S], seq 4164179969, win 65535, options [mss 1460], length 0
08:00:05.655653 IP 10.0.2.15.80 &gt; 10.0.2.2.51534: Flags [S.], seq 4149908960, ack 4164179970, win 5840, options [mss 1460], length 0
08:00:05.655773 IP 10.0.2.2.51534 &gt; 10.0.2.15.80: Flags [.], ack 1, win 65535, length 0
08:00:05.655868 IP 10.0.2.2.51534 &gt; 10.0.2.15.80: Flags [P.], seq 1:15, ack 1, win 65535, length 14
08:00:05.655978 IP 10.0.2.15.80 &gt; 10.0.2.2.51534: Flags [.], ack 15, win 5840, length 0
08:00:10.037978 IP 10.0.2.2.51534 &gt; 10.0.2.15.80: Flags [F.], seq 15, ack 1, win 65535, length 0
08:00:10.038287 IP 10.0.2.15.80 &gt; 10.0.2.2.51534: Flags [F.], seq 1, ack 16, win 5840, length 0
08:00:10.038993 IP 10.0.2.2.51534 &gt; 10.0.2.15.80: Flags [.], ack 2, win 65535, length 0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u8BA9\u6211\u4EEC\u56DE\u5FC6\uFF0C\u6570\u636E\u5982\u4F55\u4EA4\u6362\u3002\u4E3A\u6B64\uFF0C\u8BA9\u6211\u4EEC\u62C6\u5F00\u7B2C\u4E00\u4E2A\u5C01\u5305\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#                  (13)     (15)    (14)      (16)      (20)     (17)            (25)            
08:00:05.655339 IP 10.0.2.2.51534 &gt; 10.0.2.15.80: Flags [S], seq 4164179969, win 65535, 
#        (8)        (9)
options [mss 1460], length 0
#                (1)  (2)  (3)  (4)                 (5)    
#                ____ ____ ____ ___________________ ____
        0x0000:  0000 0001 0006 5254 0012 3502 0000 0800  ......RT..5.....
#                (6)  (7)  (8)  (9)(10,11)(12)  (13)
#                ____ ____ ____ ____ /\\/\\ ____ _________  
        0x0010:  4500 002c a006 0000 4006 c2b5 0a00 0202  E..,....@.......
#                (14)      (15) (16) (17)      (18)
#                _________ ____ ____ _________ __________ 
        0x0020:  0a00 020f c94e 0050 f834 5801 0000 0000  .....N.P.4X.....
#              (19,20)(21) (22) (23) (24) (25)
#                /\\/\\ ____ ____ ____ ____ ____ 
        0x0030:  6002 ffff 6641 0000 0204 05b4 0000       \`...fA........
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u6211\u4EEC\u5C01\u5305\u4E2D\u7684\u5B57\u6BB5\u548C\u63CF\u8FF0\uFF1A</p><p>| DOD \u6A21\u578B\u5C42 | OSI \u6A21\u578B\u5C42 | \u4F4D\u4E8E | \u5B57\u6BB5 | \u63CF\u8FF0 | | --- | --- | --- | --- | --- | --- | | \u94FE\u8DEF | \u7269\u7406/\u6570\u636E\u94FE\u8DEF | <code>LINUX_SLL</code> \u5934\u90E8 | (1) | \u5C01\u5305\u7C7B\u578B | | | | | (2) | <code>ARPHRD_</code> \u7C7B\u578B | | | | | (3) | \u94FE\u8DEF\u5C42 (MAC) \u5730\u5740\u957F\u5EA6 | | | | | (4) | \u94FE\u8DEF\u5C42 (MAC) \u6E90\u5730\u5740 | | | | | (5) | \u534F\u8BAE\u7C7B\u578B (IP) | | \u4E92\u8054\u7F51 | \u7F51\u7EDC | IPv4 \u5934\u90E8 | (6) | \u7248\u672C\uFF0C\u4E92\u8054\u7F51\u5934\u90E8\u957F\u5EA6\uFF0C\u5DEE\u5206\u670D\u52A1\u4EE3\u7801\u70B9\uFF0C\u663E\u5F0F\u62E5\u585E\u901A\u77E5. | | | | | (7) | \u603B\u957F\u5EA6 | | | | | (8) | \u8EAB\u4EFD\uFF0C\u4E3B\u8981\u7528\u4E8E\u6E90 IP \u6570\u636E\u62A5\u7684\u6BB5\u7684\u552F\u4E00\u6027\u9274\u5B9A | | | | | (9) | \u6807\u5FD7\uFF0C\u6BB5\u7684\u504F\u79FB | | | | | (10) | \u751F\u5B58\u65F6\u95F4 (TTL) | | | | | (11) | \u534F\u8BAE\u7F16\u53F7 | | | | | (12) | \u5934\u90E8\u6821\u9A8C\u548C | | | | | (13) | \u6E90 IP \u5730\u5740 | | | | | (14) | \u76EE\u6807 IP \u5730\u5740 | | \u4F20\u8F93 | \u4F20\u8F93 | TCP \u5934\u90E8 | (15) | \u6E90 TCP \u7AEF\u53E3 | | | | | (16) | \u76EE\u6807 TCP \u7AEF\u53E3 | | | | | (17) | TCP \u521D\u59CB\u5E8F\u5217\u53F7 | | | | | (18) | ACK \u7F16\u53F7\u5B57\u6BB5 (\u7A7A\u7684\uFF0C\u7531\u4E8E\u5B83\u662F\u7B2C\u4E00\u4E2A\u5C01\u5305) | | | | | (19) | | | | | | (20) | SYN TCP \u6807\u5FD7 | | | | | (21) | TCP \u7A97\u53E3\u5927\u5C0F | | | | | (22) | TCP \u6821\u9A8C\u548C | | | | | (23) | \u7D27\u6025\u6307\u9488 | | | | | (24) | \u53EF\u9009\u5B57\u6BB5\u7684\u5F00\u59CB | | | | | (25) | TCP \u6700\u5927\u6BB5\u5927\u5C0F (\u6700\u5927\u4F20\u8F93\u5355\u5143 - 40 \u5B57\u8282) |</p><p>\u8BA9\u6211\u4EEC\u770B\u770B<code>iptables</code>\u4E2D\uFF0C\u8FD9\u4E2A\u5C01\u5305\u53D1\u751F\u4E86\u4EC0\u4E48\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#(1)(2)        (3)    (4)   (5)     (6)  (7) (8)               (9)               (10)  (11)         (12)
raw:PREROUTING:policy:2     IN=eth0 OUT= MAC=08:00:27:d4:45:68:52:54:00:12:35:02:08:00 SRC=10.0.2.2 DST=10.0.2.15
#                           (13)   (14)     (15)      (16)   (17)     (18)      (19)      (20)
                            LEN=44 TOS=0x00 PREC=0x00 TTL=64 ID=40966 PROTO=TCP SPT=51534 DPT=80
#                           (21)           (22)  (23)         (24)     (25)(26)   (27)
                            SEQ=4164179969 ACK=0 WINDOW=65535 RES=0x00 SYN URGP=0 OPT (020405B4)
mangle:PREROUTING:policy:1  IN=eth0 OUT= MAC=08:00:27:d4:45:68:52:54:00:12:35:02:08:00 SRC=10.0.2.2 DST=10.0.2.15
                            LEN=44 TOS=0x00 PREC=0x00 TTL=64 ID=40966 PROTO=TCP SPT=51534 DPT=80
                            SEQ=4164179969 ACK=0 WINDOW=65535 RES=0x00 SYN URGP=0 OPT (020405B4)
nat:PREROUTING:policy:1     IN=eth0 OUT= MAC=08:00:27:d4:45:68:52:54:00:12:35:02:08:00 SRC=10.0.2.2 DST=10.0.2.15
                            LEN=44 TOS=0x00 PREC=0x00 TTL=64 ID=40966 PROTO=TCP SPT=51534 DPT=80
                            SEQ=4164179969 ACK=0 WINDOW=65535 RES=0x00 SYN URGP=0 OPT (020405B4)
mangle:INPUT:policy:1       IN=eth0 OUT= MAC=08:00:27:d4:45:68:52:54:00:12:35:02:08:00 SRC=10.0.2.2 DST=10.0.2.15
                            LEN=44 TOS=0x00 PREC=0x00 TTL=64 ID=40966 PROTO=TCP SPT=51534 DPT=80
                            SEQ=4164179969 ACK=0 WINDOW=65535 RES=0x00 SYN URGP=0 OPT (020405B4)
filter:INPUT:policy:1       IN=eth0 OUT= MAC=08:00:27:d4:45:68:52:54:00:12:35:02:08:00 SRC=10.0.2.2 DST=10.0.2.15
                            LEN=44 TOS=0x00 PREC=0x00 TTL=64 ID=40966 PROTO=TCP SPT=51534 DPT=80
                            SEQ=4164179969 ACK=0 WINDOW=65535 RES=0x00 SYN URGP=0 OPT (020405B4)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p><code>iptables</code>\u65E5\u5FD7\u7684\u5B57\u6BB5\u7684\u63CF\u8FF0\uFF1A</p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>(1)</td><td>\u8868\u540D\u79F0</td></tr><tr><td>(2)</td><td>\u94FE\u540D\u79F0</td></tr><tr><td>(3)</td><td>\u7C7B\u578B (\u7528\u4E8E\u5185\u5EFA\u94FE\u7684\u7B56\u7565)</td></tr><tr><td>(4)</td><td>\u89C4\u5219\u7F16\u53F7</td></tr><tr><td>(5)</td><td>\u8F93\u5165\u63A5\u53E3</td></tr><tr><td>(6)</td><td>\u8F93\u51FA\u63A5\u53E3 (\u7A7A\u7684\uFF0C\u56E0\u4E3A\u5C01\u5305\u7684\u76EE\u6807\u662F vm1 \u81EA\u8EAB)</td></tr><tr><td>(7)</td><td>MAC \u5730\u5740</td></tr><tr><td>(8)</td><td>\u76EE\u6807 (vm1) MAC</td></tr><tr><td>(9)</td><td>\u6E90 MAC</td></tr><tr><td>(10)</td><td>\u534F\u8BAE\u7C7B\u578B\uFF1AIP</td></tr><tr><td>(11)</td><td>\u6E90 IP \u5730\u5740</td></tr><tr><td>(12)</td><td>\u76EE\u6807 IP \u5730\u5740</td></tr><tr><td>(13)</td><td>IP \u5C01\u5305\u957F\u5EA6\uFF0C\u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D (\u4E0D\u5305\u62EC\u94FE\u8DEF\u5C42\u5934\u90E8)</td></tr><tr><td>(14)</td><td>IP \u670D\u52A1\u7C7B\u578B</td></tr><tr><td>(15)</td><td>IP \u4F18\u5148\u7EA7</td></tr><tr><td>(16)</td><td>IP \u751F\u5B58\u65F6\u95F4</td></tr><tr><td>(17)</td><td>IP \u5C01\u5305 ID</td></tr><tr><td>(18)</td><td>\u534F\u8BAE\u7C7B\u578B\uFF1ATCP</td></tr><tr><td>(19)</td><td>TCP \u6E90\u7AEF\u53E3</td></tr><tr><td>(20)</td><td>TCP \u76EE\u6807\u7AEF\u53E3</td></tr><tr><td>(21)</td><td>TCP \u5E8F\u5217\u53F7</td></tr><tr><td>(22)</td><td>TCP \u5E94\u7B54\u7F16\u53F7</td></tr><tr><td>(23)</td><td>TCP \u7A97\u53E3\u5927\u5C0F</td></tr><tr><td>(24)</td><td>TCP \u4FDD\u7559\u4F4D</td></tr><tr><td>(25)</td><td>TCP SYN \u6807\u5FD7\u5DF2\u8BBE\u7F6E</td></tr><tr><td>(25)</td><td>TCP \u7D27\u6025\u6307\u9488\u672A\u8BBE\u7F6E</td></tr><tr><td>(25)</td><td>TCP \u9009\u9879</td></tr></tbody></table>`,30),rn=s("\u73B0\u5728\u6211\u5C06\u4F7F\u7528"),tn=n("code",null,"tcpdump",-1),pn=s("\u8F93\u51FA\u548C"),bn=n("code",null,"iptables",-1),cn=s("\u65E5\u5FD7\uFF0C\u5E76\u6392\uFF08\u66F4\u591A\u7684\u662F\u9010\u6BB5\uFF09\u5411\u4F60\u663E\u793A\u8FD9\u4E2A\u4EA4\u6362\u3002\u4F60\u7684\u4EFB\u52A1\u662F\u9010\u884C\u6D4F\u89C8\u8FD9\u4E2A\u4EA4\u6362\uFF0C\u4E86\u89E3\u4F1A\u53D1\u751F\u4EC0\u4E48\u3002\u6211\u5EFA\u8BAE\u4F60\u6253\u5370\u8FD9\u4E2A\u4EA4\u6362\uFF0C\u5E76\u4F7F\u7528\u7B14\u548C\u7EB8\u8FDB\u884C\u5904\u7406\u5B83\uFF0C\u4F60\u53EF\u4EE5\u4ECE"),on={href:"http://nixsrv.com/llthw/ex26/log",target:"_blank",rel:"noopener noreferrer"},dn=s("\u7279\u6B8A\u9875\u9762"),Tn=s("\u6253\u5370\u5B83\u3002\u4F60\u9700\u8981\u56DE\u7B54\u7684\u95EE\u9898\u662F\uFF1A"),un=l(`<ul><li>\u6BCF\u4E2A\u5B57\u6BB5\u7684\u610F\u601D\u662F\u4EC0\u4E48\uFF1F\u62FF\u7740\u94C5\u7B14\uFF0C\u5C06\u5B57\u6BB5\u4ECE<code>tcpdump</code>\u7684\u8E2A\u8FF9\u8FDE\u63A5\u5230\u539F\u59CB\u6570\u636E\u5305\u7684\u5341\u516D\u8FDB\u5236\u6570\u636E\uFF0C\u518D\u5230<code>iptables</code>\u65E5\u5FD7\u3002</li><li>\u6570\u636E\u5305\u4EE5\u4EC0\u4E48\u987A\u5E8F\u8FDB\u884C\u5904\u7406\uFF1F\u9996\u5148\u662F\u54EA\u4E2A\u8868\uFF0C\u6700\u540E\u662F\u54EA\u4E2A\uFF0C\u4E3A\u4EC0\u4E48\uFF1F</li><li>\u4E3A\u4EC0\u4E48\u53EA\u6709\u7B2C\u4E00\u4E2A\u6570\u636E\u5305\u901A\u8FC7<code>nat</code>\u8868\u8FDB\u884C\u5904\u7406\uFF1F</li></ul><p>\u8FD9\u662F\u8F93\u51FA\uFF0C\u770B\u770B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>08:00:05.655339 IP 10.0.2.2.51534 &gt; 10.0.2.15.80: Flags [S], seq 4164179969, win 65535, options [mss 1460], length 0
        0x0000:  0000 0001 0006 5254 0012 3502 0000 0800  ......RT..5.....
        0x0010:  4500 002c a006 0000 4006 c2b5 0a00 0202  E..,....@.......
        0x0020:  0a00 020f c94e 0050 f834 5801 0000 0000  .....N.P.4X.....
        0x0030:  6002 ffff 6641 0000 0204 05b4 0000       \`...fA........
\`
raw:PREROUTING:policy:2     IN=eth0 OUT= MAC=08:00:27:d4:45:68:52:54:00:12:35:02:08:00 SRC=10.0.2.2 DST=10.0.2.15
                            LEN=44 TOS=0x00 PREC=0x00 TTL=64 ID=40966 PROTO=TCP SPT=51534 DPT=80
                            SEQ=4164179969 ACK=0 WINDOW=65535 RES=0x00 SYN URGP=0 OPT (020405B4)
mangle:PREROUTING:policy:1  IN=eth0 OUT= MAC=08:00:27:d4:45:68:52:54:00:12:35:02:08:00 SRC=10.0.2.2 DST=10.0.2.15
                            LEN=44 TOS=0x00 PREC=0x00 TTL=64 ID=40966 PROTO=TCP SPT=51534 DPT=80
                            SEQ=4164179969 ACK=0 WINDOW=65535 RES=0x00 SYN URGP=0 OPT (020405B4)
nat:PREROUTING:policy:1     IN=eth0 OUT= MAC=08:00:27:d4:45:68:52:54:00:12:35:02:08:00 SRC=10.0.2.2 DST=10.0.2.15
                            LEN=44 TOS=0x00 PREC=0x00 TTL=64 ID=40966 PROTO=TCP SPT=51534 DPT=80
                            SEQ=4164179969 ACK=0 WINDOW=65535 RES=0x00 SYN URGP=0 OPT (020405B4)
mangle:INPUT:policy:1       IN=eth0 OUT= MAC=08:00:27:d4:45:68:52:54:00:12:35:02:08:00 SRC=10.0.2.2 DST=10.0.2.15
                            LEN=44 TOS=0x00 PREC=0x00 TTL=64 ID=40966 PROTO=TCP SPT=51534 DPT=80
                            SEQ=4164179969 ACK=0 WINDOW=65535 RES=0x00 SYN URGP=0 OPT (020405B4)
filter:INPUT:policy:1       IN=eth0 OUT= MAC=08:00:27:d4:45:68:52:54:00:12:35:02:08:00 SRC=10.0.2.2 DST=10.0.2.15
                            LEN=44 TOS=0x00 PREC=0x00 TTL=64 ID=40966 PROTO=TCP SPT=51534 DPT=80
                            SEQ=4164179969 ACK=0 WINDOW=65535 RES=0x00 SYN URGP=0 OPT (020405B4)
 
08:00:05.655653 IP 10.0.2.15.80 &gt; 10.0.2.2.51534: Flags [S.], seq 4149908960, ack 4164179970, win 5840, options [mss 1460], length 0
        0x0000:  0004 0001 0006 0800 27d4 4568 0000 0800  ........&#39;.Eh....
        0x0010:  4500 002c 0000 4000 4006 22bc 0a00 020f  E..,..@.@.&quot;.....
        0x0020:  0a00 0202 0050 c94e f75a 95e0 f834 5802  .....P.N.Z...4X.
        0x0030:  6012 16d0 c224 0000 0204 05b4            \`....$......
&#39;
raw:OUTPUT:policy:2         IN= OUT=eth0 SRC=10.0.2.15 DST=10.0.2.2
                            LEN=44 TOS=0x00 PREC=0x00 TTL=64 ID=0 DF PROTO=TCP SPT=80 DPT=51534
                            SEQ=4149908960 ACK=4164179970 WINDOW=5840 RES=0x00 ACK SYN URGP=0 OPT (020405B4) UID=0 GID=0
mangle:OUTPUT:policy:1      IN= OUT=eth0 SRC=10.0.2.15 DST=10.0.2.2
                            LEN=44 TOS=0x00 PREC=0x00 TTL=64 ID=0 DF PROTO=TCP SPT=80 DPT=51534
                            SEQ=4149908960 ACK=4164179970 WINDOW=5840 RES=0x00 ACK SYN URGP=0 OPT (020405B4) UID=0 GID=0
filter:OUTPUT:policy:1      IN= OUT=eth0 SRC=10.0.2.15 DST=10.0.2.2
                            LEN=44 TOS=0x00 PREC=0x00 TTL=64 ID=0 DF PROTO=TCP SPT=80 DPT=51534
                            SEQ=4149908960 ACK=4164179970 WINDOW=5840 RES=0x00 ACK SYN URGP=0 OPT (020405B4) UID=0 GID=0
mangle:POSTROUTING:policy:1 IN= OUT=eth0 SRC=10.0.2.15 DST=10.0.2.2
                            LEN=44 TOS=0x00 PREC=0x00 TTL=64 ID=0 DF PROTO=TCP SPT=80 DPT=51534
                            SEQ=4149908960 ACK=4164179970 WINDOW=5840 RES=0x00 ACK SYN URGP=0 OPT (020405B4) UID=0 GID=0
 
08:00:05.655773 IP 10.0.2.2.51534 &gt; 10.0.2.15.80: Flags [.], ack 1, win 65535, length 0
        0x0000:  0000 0001 0006 5254 0012 3502 0000 0800  ......RT..5.....
        0x0010:  4500 0028 a007 0000 4006 c2b8 0a00 0202  E..(....@.......
        0x0020:  0a00 020f c94e 0050 f834 5802 f75a 95e1  .....N.P.4X..Z..
        0x0030:  5010 ffff f0b1 0000 0000 0000 0000       P.............
 
raw:PREROUTING:policy:2     IN=eth0 OUT= MAC=08:00:27:d4:45:68:52:54:00:12:35:02:08:00 SRC=10.0.2.2 DST=10.0.2.15
                            LEN=40 TOS=0x00 PREC=0x00 TTL=64 ID=40967 PROTO=TCP SPT=51534 DPT=80
                            SEQ=4164179970 ACK=4149908961 WINDOW=65535 RES=0x00 ACK URGP=0
mangle:PREROUTING:policy:1  IN=eth0 OUT= MAC=08:00:27:d4:45:68:52:54:00:12:35:02:08:00 SRC=10.0.2.2 DST=10.0.2.15
                            LEN=40 TOS=0x00 PREC=0x00 TTL=64 ID=40967 PROTO=TCP SPT=51534 DPT=80
                            SEQ=4164179970 ACK=4149908961 WINDOW=65535 RES=0x00 ACK URGP=0
mangle:INPUT:policy:1       IN=eth0 OUT= MAC=08:00:27:d4:45:68:52:54:00:12:35:02:08:00 SRC=10.0.2.2 DST=10.0.2.15
                            LEN=40 TOS=0x00 PREC=0x00 TTL=64 ID=40967 PROTO=TCP SPT=51534 DPT=80
                            SEQ=4164179970 ACK=4149908961 WINDOW=65535 RES=0x00 ACK URGP=0
filter:INPUT:policy:1       IN=eth0 OUT= MAC=08:00:27:d4:45:68:52:54:00:12:35:02:08:00 SRC=10.0.2.2 DST=10.0.2.15
                            LEN=40 TOS=0x00 PREC=0x00 TTL=64 ID=40967 PROTO=TCP SPT=51534 DPT=80
                            SEQ=4164179970 ACK=4149908961 WINDOW=65535 RES=0x00 ACK URGP=0
 
08:00:05.655868 IP 10.0.2.2.51534 &gt; 10.0.2.15.80: Flags [P.], seq 1:15, ack 1, win 65535, length 14
        0x0000:  0000 0001 0006 5254 0012 3502 0000 0800  ......RT..5.....
        0x0010:  4500 0036 a008 0000 4006 c2a9 0a00 0202  E..6....@.......
        0x0020:  0a00 020f c94e 0050 f834 5802 f75a 95e1  .....N.P.4X..Z..
        0x0030:  5018 ffff af45 0000 4865 6c6c 6f2c 2077  P....E..Hello,.w
        0x0040:  6f72 6c64 210a                           orld!.
 
raw:PREROUTING:policy:2     IN=eth0 OUT= MAC=08:00:27:d4:45:68:52:54:00:12:35:02:08:00 SRC=10.0.2.2 DST=10.0.2.15
                            LEN=54 TOS=0x00 PREC=0x00 TTL=64 ID=40968 PROTO=TCP SPT=51534 DPT=80
                            SEQ=4164179970 ACK=4149908961 WINDOW=65535 RES=0x00 ACK PSH URGP=0
mangle:PREROUTING:policy:1  IN=eth0 OUT= MAC=08:00:27:d4:45:68:52:54:00:12:35:02:08:00 SRC=10.0.2.2 DST=10.0.2.15
                            LEN=54 TOS=0x00 PREC=0x00 TTL=64 ID=40968 PROTO=TCP SPT=51534 DPT=80
                            SEQ=4164179970 ACK=4149908961 WINDOW=65535 RES=0x00 ACK PSH URGP=0
mangle:INPUT:policy:1       IN=eth0 OUT= MAC=08:00:27:d4:45:68:52:54:00:12:35:02:08:00 SRC=10.0.2.2 DST=10.0.2.15
                            LEN=54 TOS=0x00 PREC=0x00 TTL=64 ID=40968 PROTO=TCP SPT=51534 DPT=80
                            SEQ=4164179970 ACK=4149908961 WINDOW=65535 RES=0x00 ACK PSH URGP=0
filter:INPUT:policy:1       IN=eth0 OUT= MAC=08:00:27:d4:45:68:52:54:00:12:35:02:08:00 SRC=10.0.2.2 DST=10.0.2.15
                            LEN=54 TOS=0x00 PREC=0x00 TTL=64 ID=40968 PROTO=TCP SPT=51534 DPT=80
                            SEQ=4164179970 ACK=4149908961 WINDOW=65535 RES=0x00 ACK PSH URGP=0
 
08:00:05.655978 IP 10.0.2.15.80 &gt; 10.0.2.2.51534: Flags [.], ack 15, win 5840, length 0
        0x0000:  0004 0001 0006 0800 27d4 4568 0000 0800  ........&#39;.Eh....
        0x0010:  4500 0028 377c 4000 4006 eb43 0a00 020f  E..(7|@.@..C....
        0x0020:  0a00 0202 0050 c94e f75a 95e1 f834 5810  .....P.N.Z...4X.
        0x0030:  5010 16d0 d9d3 0000                      P.......
&#39;
raw:OUTPUT:policy:2         IN= OUT=eth0 SRC=10.0.2.15 DST=10.0.2.2
                            LEN=40 TOS=0x00 PREC=0x00 TTL=64 ID=14204 DF PROTO=TCP SPT=80 DPT=51534
                            SEQ=4149908961 ACK=4164179984 WINDOW=5840 RES=0x00 ACK URGP=0
mangle:OUTPUT:policy:1      IN= OUT=eth0 SRC=10.0.2.15 DST=10.0.2.2
                            LEN=40 TOS=0x00 PREC=0x00 TTL=64 ID=14204 DF PROTO=TCP SPT=80 DPT=51534
                            SEQ=4149908961 ACK=4164179984 WINDOW=5840 RES=0x00 ACK URGP=0
filter:OUTPUT:policy:1      IN= OUT=eth0 SRC=10.0.2.15 DST=10.0.2.2
                            LEN=40 TOS=0x00 PREC=0x00 TTL=64 ID=14204 DF PROTO=TCP SPT=80 DPT=51534
                            SEQ=4149908961 ACK=4164179984 WINDOW=5840 RES=0x00 ACK URGP=0
mangle:POSTROUTING:policy:1 IN= OUT=eth0 SRC=10.0.2.15 DST=10.0.2.2
                            LEN=40 TOS=0x00 PREC=0x00 TTL=64 ID=14204 DF PROTO=TCP SPT=80 DPT=51534
                            SEQ=4149908961 ACK=4164179984 WINDOW=5840 RES=0x00 ACK URGP=0
 
08:00:10.037978 IP 10.0.2.2.51534 &gt; 10.0.2.15.80: Flags [F.], seq 15, ack 1, win 65535, length 0
        0x0000:  0000 0001 0006 5254 0012 3502 0000 0800  ......RT..5.....
        0x0010:  4500 0028 a00e 0000 4006 c2b1 0a00 0202  E..(....@.......
        0x0020:  0a00 020f c94e 0050 f834 5810 f75a 95e1  .....N.P.4X..Z..
        0x0030:  5011 ffff f0a2 0000 0000 0000 0000       P.............
 
raw:PREROUTING:policy:2     IN=eth0 OUT= MAC=08:00:27:d4:45:68:52:54:00:12:35:02:08:00 SRC=10.0.2.2 DST=10.0.2.15
                            LEN=40 TOS=0x00 PREC=0x00 TTL=64 ID=40974 PROTO=TCP SPT=51534 DPT=80
                            SEQ=4164179984 ACK=4149908961 WINDOW=65535 RES=0x00 ACK FIN URGP=0
mangle:PREROUTING:policy:1  IN=eth0 OUT= MAC=08:00:27:d4:45:68:52:54:00:12:35:02:08:00 SRC=10.0.2.2 DST=10.0.2.15
                            LEN=40 TOS=0x00 PREC=0x00 TTL=64 ID=40974 PROTO=TCP SPT=51534 DPT=80
                            SEQ=4164179984 ACK=4149908961 WINDOW=65535 RES=0x00 ACK FIN URGP=0
mangle:INPUT:policy:1       IN=eth0 OUT= MAC=08:00:27:d4:45:68:52:54:00:12:35:02:08:00 SRC=10.0.2.2 DST=10.0.2.15
                            LEN=40 TOS=0x00 PREC=0x00 TTL=64 ID=40974 PROTO=TCP SPT=51534 DPT=80
                            SEQ=4164179984 ACK=4149908961 WINDOW=65535 RES=0x00 ACK FIN URGP=0
filter:INPUT:policy:1       IN=eth0 OUT= MAC=08:00:27:d4:45:68:52:54:00:12:35:02:08:00 SRC=10.0.2.2 DST=10.0.2.15
                            LEN=40 TOS=0x00 PREC=0x00 TTL=64 ID=40974 PROTO=TCP SPT=51534 DPT=80
                            SEQ=4164179984 ACK=4149908961 WINDOW=65535 RES=0x00 ACK FIN URGP=0
 
08:00:10.038287 IP 10.0.2.15.80 &gt; 10.0.2.2.51534: Flags [F.], seq 1, ack 16, win 5840, length 0
        0x0000:  0004 0001 0006 0800 27d4 4568 0000 0800  ........&#39;.Eh....
        0x0010:  4500 0028 377d 4000 4006 eb42 0a00 020f  E..(7}@.@..B....
        0x0020:  0a00 0202 0050 c94e f75a 95e1 f834 5811  .....P.N.Z...4X.
        0x0030:  5011 16d0 d9d1 0000                      P.......
&#39;
raw:OUTPUT:policy:2         IN= OUT=eth0 SRC=10.0.2.15 DST=10.0.2.2
                            LEN=40 TOS=0x00 PREC=0x00 TTL=64 ID=14205 DF PROTO=TCP SPT=80 DPT=51534
                            SEQ=4149908961 ACK=4164179985 WINDOW=5840 RES=0x00 ACK FIN URGP=0 UID=0 GID=0
mangle:OUTPUT:policy:1      IN= OUT=eth0 SRC=10.0.2.15 DST=10.0.2.2
                            LEN=40 TOS=0x00 PREC=0x00 TTL=64 ID=14205 DF PROTO=TCP SPT=80 DPT=51534
                            SEQ=4149908961 ACK=4164179985 WINDOW=5840 RES=0x00 ACK FIN URGP=0 UID=0 GID=0
filter:OUTPUT:policy:1      IN= OUT=eth0 SRC=10.0.2.15 DST=10.0.2.2
                            LEN=40 TOS=0x00 PREC=0x00 TTL=64 ID=14205 DF PROTO=TCP SPT=80 DPT=51534
                            SEQ=4149908961 ACK=4164179985 WINDOW=5840 RES=0x00 ACK FIN URGP=0 UID=0 GID=0
mangle:POSTROUTING:policy:1 IN= OUT=eth0 SRC=10.0.2.15 DST=10.0.2.2
                            LEN=40 TOS=0x00 PREC=0x00 TTL=64 ID=14205 DF PROTO=TCP SPT=80 DPT=51534
                            SEQ=4149908961 ACK=4164179985 WINDOW=5840 RES=0x00 ACK FIN URGP=0 UID=0 GID=0
 
08:00:10.038993 IP 10.0.2.2.51534 &gt; 10.0.2.15.80: Flags [.], ack 2, win 65535, length 0
        0x0000:  0000 0001 0006 5254 0012 3502 0000 0800  ......RT..5.....
        0x0010:  4500 0028 a00f 0000 4006 c2b0 0a00 0202  E..(....@.......
        0x0020:  0a00 020f c94e 0050 f834 5811 f75a 95e2  .....N.P.4X..Z..
        0x0030:  5010 ffff f0a1 0000 0000 0000 0000       P.............
 
raw:PREROUTING:policy:2     IN=eth0 OUT= MAC=08:00:27:d4:45:68:52:54:00:12:35:02:08:00 SRC=10.0.2.2 DST=10.0.2.15
                            LEN=40 TOS=0x00 PREC=0x00 TTL=64 ID=40975 PROTO=TCP SPT=51534 DPT=80
                            SEQ=4164179985 ACK=4149908962 WINDOW=65535 RES=0x00 ACK URGP=0
mangle:PREROUTING:policy:1  IN=eth0 OUT= MAC=08:00:27:d4:45:68:52:54:00:12:35:02:08:00 SRC=10.0.2.2 DST=10.0.2.15
                            LEN=40 TOS=0x00 PREC=0x00 TTL=64 ID=40975 PROTO=TCP SPT=51534 DPT=80
                            SEQ=4164179985 ACK=4149908962 WINDOW=65535 RES=0x00 ACK URGP=0
mangle:INPUT:policy:1       IN=eth0 OUT= MAC=08:00:27:d4:45:68:52:54:00:12:35:02:08:00 SRC=10.0.2.2 DST=10.0.2.15
                            LEN=40 TOS=0x00 PREC=0x00 TTL=64 ID=40975 PROTO=TCP SPT=51534 DPT=80
                            SEQ=4164179985 ACK=4149908962 WINDOW=65535 RES=0x00 ACK URGP=0
filter:INPUT:policy:1       IN=eth0 OUT= MAC=08:00:27:d4:45:68:52:54:00:12:35:02:08:00 SRC=10.0.2.2 DST=10.0.2.15
                            LEN=40 TOS=0x00 PREC=0x00 TTL=64 ID=40975 PROTO=TCP SPT=51534 DPT=80
                            SEQ=4164179985 ACK=4149908962 WINDOW=65535 RES=0x00 ACK URGP=0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br></div></div><h2 id="\u8FD9\u6837\u505A" tabindex="-1"><a class="header-anchor" href="#\u8FD9\u6837\u505A" aria-hidden="true">#</a> \u8FD9\u6837\u505A</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> 1: sudo iptables-save
 2: sudo iptables -t filter -A INPUT -i lo -j ACCEPT
 3: sudo iptables -t filter -A INPUT -p tcp -m tcp --dport 22 -j ACCEPT
 4: sudo iptables -t filter -P INPUT DROP
 5: sudo iptables -nt filter -L --line-numbers
 6: ping -c 2 -W 1 10.0.2.2
 7: sudo iptables -t filter -A INPUT --match state --state ESTABLISHED -j ACCEPT
 8: sudo iptables -nt filter -L --line-numbers
 9: ping -c 2 -W 1 10.0.2.2
10: sudo modprobe ipt_LOG
11: sudo iptables -nt raw -L --line-numbers
12: sudo iptables -t raw -A PREROUTING -p udp -m udp --dport 1024 -j TRACE
13: sudo iptables -t raw -A OUTPUT -p udp -m udp --sport 1024 -j TRACE
14: sudo tail -n0 -f /var/log/kern.log | cut -c52-300 &amp;
15: nc -ulp 1024 &amp;
16: echo &#39;Hello there!&#39; | nc -u localhost 1000
17: &lt;CTRL+C&gt;
18: fg
19: &lt;CTRL+C&gt;
20: fg
21: &lt;CTRL+C&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="\u4F60\u4F1A\u770B\u5230\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4F60\u4F1A\u770B\u5230\u4EC0\u4E48" aria-hidden="true">#</a> \u4F60\u4F1A\u770B\u5230\u4EC0\u4E48</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:~$ sudo iptables-save
# Generated by iptables-save v1.4.8 on Mon Jul 16 09:01:32 2012
*mangle
:PREROUTING ACCEPT [45783:3411367]
:INPUT ACCEPT [45783:3411367]
:FORWARD ACCEPT [0:0]
:OUTPUT ACCEPT [30409:9552110]
:POSTROUTING ACCEPT [30331:9543294]
COMMIT
# Completed on Mon Jul 16 09:01:32 2012
# Generated by iptables-save v1.4.8 on Mon Jul 16 09:01:32 2012
*nat
:PREROUTING ACCEPT [24:1056]
:POSTROUTING ACCEPT [755:41247]
:OUTPUT ACCEPT [817:45207]
COMMIT
# Completed on Mon Jul 16 09:01:32 2012
# Generated by iptables-save v1.4.8 on Mon Jul 16 09:01:32 2012
*raw
:PREROUTING ACCEPT [3171:197900]
:OUTPUT ACCEPT [1991:1294054]
-A PREROUTING -p udp -m udp --dport 80 -j TRACE
-A OUTPUT -p udp -m udp --sport 80 -j TRACE
COMMIT
# Completed on Mon Jul 16 09:01:32 2012
# Generated by iptables-save v1.4.8 on Mon Jul 16 09:01:32 2012
*filter
:INPUT ACCEPT [54:3564]
:FORWARD ACCEPT [0:0]
:OUTPUT ACCEPT [28:2540]
COMMIT
# Completed on Mon Jul 16 09:01:32 2012
user1@vm1:~$ sudo iptables -t filter -A INPUT -i lo -j ACCEPT
user1@vm1:~$ sudo iptables -t filter -A INPUT -p tcp -m tcp --dport 22 -j ACCEPT
user1@vm1:~$ sudo iptables -t filter -P INPUT DROP
user1@vm1:~$ sudo iptables -nt filter -L --line-numbers
Chain INPUT (policy DROP)
num  target     prot opt source               destination
1    ACCEPT     all  --  0.0.0.0/0            0.0.0.0/0
2    ACCEPT     tcp  --  0.0.0.0/0            0.0.0.0/0           tcp dpt:22
 
Chain FORWARD (policy ACCEPT)
num  target     prot opt source               destination
 
Chain OUTPUT (policy ACCEPT)
num  target     prot opt source               destination
 
user1@vm1:~$ ping -c 2 -W 1 10.0.2.2
PING 10.0.2.2 (10.0.2.2) 56(84) bytes of data.
 
--- 10.0.2.2 ping statistics ---
2 packets transmitted, 0 received, 100% packet loss, time 1008ms
 
user1@vm1:~$ sudo iptables -t filter -A INPUT --match state --state ESTABLISHED -j ACCEPT
user1@vm1:~$ sudo iptables -nt filter -L --line-numbers
Chain INPUT (policy DROP)
num  target     prot opt source               destination
1    ACCEPT     all  --  0.0.0.0/0            0.0.0.0/0
2    ACCEPT     tcp  --  0.0.0.0/0            0.0.0.0/0           tcp dpt:22
3    ACCEPT     all  --  0.0.0.0/0            0.0.0.0/0           state ESTABLISHED
 
Chain FORWARD (policy ACCEPT)
num  target     prot opt source               destination
 
Chain OUTPUT (policy ACCEPT)
num  target     prot opt source               destination
 
user1@vm1:~$ ping -c 2 -W 1 10.0.2.2
PING 10.0.2.2 (10.0.2.2) 56(84) bytes of data.
64 bytes from 10.0.2.2: icmp_req=1 ttl=63 time=0.385 ms
64 bytes from 10.0.2.2: icmp_req=2 ttl=63 time=0.142 ms
 
--- 10.0.2.2 ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 999ms
rtt min/avg/max/mdev = 0.142/0.263/0.385/0.122 ms
user1@vm1:~$ sudo iptables -nt raw -L --line-numbers
Chain PREROUTING (policy ACCEPT)
num  target     prot opt source               destination
 
Chain OUTPUT (policy ACCEPT)
num  target     prot opt source               destination
user1@vm1:~$ sudo iptables -t raw -A PREROUTING -p udp -m udp --dport 1024 -j TRACE
user1@vm1:~$ sudo iptables -t raw -A OUTPUT -p udp -m udp --sport 1024 -j TRACE
user1@vm1:~$ sudo iptables -nt raw -L --line-numbers
Chain PREROUTING (policy ACCEPT)
num  target     prot opt source               destination
1    TRACE      udp  --  0.0.0.0/0            0.0.0.0/0           udp dpt:1024
 
Chain OUTPUT (policy ACCEPT)
num  target     prot opt source               destination
1    TRACE      udp  --  0.0.0.0/0            0.0.0.0/0           udp spt:1024
user1@vm1:~$ sudo tail -n0 -f /var/log/kern.log | cut -c52-300 &amp;
[1] 10249
user1@vm1:~$ nc -ulp 1024 &amp;
[2] 10251
user1@vm1:~$ echo &#39;Hello there!&#39; | nc -u localhost 1024
Hello there!
raw:PREROUTING:policy:2 IN=lo OUT= MAC=00:00:00:00:00:00:00:00:00:00:00:00:08:00 SRC=127.0.0.1 DST=127.0.0.1 LEN=41 TOS=0x00 PREC=0x00 TTL=64 ID=57898 DF PROTO=UDP SPT=50407 DPT=1024 LEN=21
mangle:PREROUTING:policy:1 IN=lo OUT= MAC=00:00:00:00:00:00:00:00:00:00:00:00:08:00 SRC=127.0.0.1 DST=127.0.0.1 LEN=41 TOS=0x00 PREC=0x00 TTL=64 ID=57898 DF PROTO=UDP SPT=50407 DPT=1024 LEN=21
mangle:INPUT:policy:1 IN=lo OUT= MAC=00:00:00:00:00:00:00:00:00:00:00:00:08:00 SRC=127.0.0.1 DST=127.0.0.1 LEN=41 TOS=0x00 PREC=0x00 TTL=64 ID=57898 DF PROTO=UDP SPT=50407 DPT=1024 LEN=21
filter:INPUT:rule:1 IN=lo OUT= MAC=00:00:00:00:00:00:00:00:00:00:00:00:08:00 SRC=127.0.0.1 DST=127.0.0.1 LEN=41 TOS=0x00 PREC=0x00 TTL=64 ID=57898 DF PROTO=UDP SPT=50407 DPT=1024 LEN=21
 
^C
[2]+  Stopped                 nc -ulp 1024
user1@vm1:~$ fg
nc -ulp 1024
^C
user1@vm1:~$ fg
sudo tail -n0 -f /var/log/kern.log | cut -c52-300
^C
user1@vm1:~$
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br></div></div><h2 id="\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#\u89E3\u91CA" aria-hidden="true">#</a> \u89E3\u91CA</h2>`,8),mn=n("li",null,[s("\u5217\u51FA\u6240\u6709\u8868\u4E2D\u7684\u6240\u6709"),n("code",null,"iptables"),s("\u89C4\u5219\u3002\u4F60\u770B\u4E0D\u5230\u4EFB\u4F55\u4E1C\u897F\u3002")],-1),Pn=s("\u5141\u8BB8"),Cn=n("code",null,"lo",-1),On=s("\uFF08"),Rn={href:"http://en.wikipedia.org/wiki/Localhost",target:"_blank",rel:"noopener noreferrer"},_n=s("\u73AF\u56DE"),En=s("\uFF09\u63A5\u53E3\u4E0A\u7684\u6240\u6709\u4F20\u5165\u6D41\u91CF\u3002"),Sn=l("<li>\u5141\u8BB8 TCP \u7AEF\u53E3 22 \u4E0A\u7684\u6240\u6709\u4F20\u5165\u6D41\u91CF\uFF0C\u8FD9\u662F<code>ssh</code>\u3002</li><li>\u5C06\u9ED8\u8BA4<code>INPUT</code>\u7B56\u7565\u66F4\u6539\u4E3A<code>DROP</code>\uFF0C\u7981\u6B62\u6240\u6709\u4F20\u5165\u8FDE\u63A5\uFF0C\u9664\u4E86 TCP \u7AEF\u53E3 22\u3002\u5982\u679C\u5728\u6B64\u4E22\u5931<code>vm1</code>\u7684\u8FDE\u63A5\uFF0C\u5219\u8868\u793A\u4F60\u505A\u9519\u4E86\uFF0C\u5728 VirtualBox \u4E2D\u91CD\u65B0\u542F\u52A8\u5E76\u91CD\u8BD5\u3002</li><li>\u5217\u51FA\u5F53\u524D\u7684\u8FC7\u6EE4\u5668\u89C4\u5219\u3002\u6CE8\u610F\uFF1A\u4F60\u53EF\u4EE5\u6309\u53F7\u7801\u5220\u9664\u89C4\u5219\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A<code>sudo iptables -t filter -D INPUT 2</code>\u3002\u8BF7\u6CE8\u610F\u7B56\u7565\u4E0E\u89C4\u5219\u5B8C\u5168\u4E0D\u4E00\u6837\u3002</li><li>\u5C1D\u8BD5<code>ping</code>\u4F60\u7684\u9ED8\u8BA4\u7F51\u5173\uFF0C\u5931\u8D25\u4E86\u3002\u4E3A\u4EC0\u4E48\u662F\u8FD9\u6837\uFF0C\u5373\u4F7F\u5141\u8BB8\u4F20\u51FA\u8FDE\u63A5\uFF08<code>Chain OUTPUT (policy ACCEPT)</code>\uFF09\uFF1F\u4F20\u51FA\u7684\u6570\u636E\u5305\u88AB\u53D1\u9001\u5230\u7F51\u5173\uFF0C\u4F46\u662F\u7F51\u5173\u7684\u56DE\u590D\u4E0D\u80FD\u8FDB\u5165\u3002</li><li>\u6DFB\u52A0\u4E00\u6761\u89C4\u5219\uFF0C\u544A\u8BC9<code>iptables</code>\u5141\u8BB8\u5C5E\u4E8E\u5DF2\u5EFA\u7ACB\u8FDE\u63A5\u7684\u6240\u6709\u6570\u636E\u5305\uFF0C\u4F8B\u5982\u6765\u81EA<code>vm1</code>\u7684\u6240\u6709\u8FDE\u63A5\u3002</li><li>\u5217\u51FA\u5F53\u524D\u7684\u8FC7\u6EE4\u5668\u89C4\u5219\u3002\u4F60\u53EF\u4EE5\u770B\u5230\u6211\u4EEC\u7684\u65B0\u89C4\u5219\u3002</li><li><code>ping</code> <code>vm1</code>\u7684\u9ED8\u8BA4\u7F51\u5173\uFF0C\u8FD9\u6B21\u6210\u529F\u4E86\u3002</li><li>\u52A0\u8F7D Linux \u5185\u6838\u6A21\u5757\uFF0C\u5B83\u5141\u8BB8\u4F7F\u7528\u5305\u8FC7\u6EE4\u65E5\u5FD7\u529F\u80FD\u3002</li><li>\u6DFB\u52A0\u89C4\u5219\uFF0C\u6765\u8BB0\u5F55\u6240\u6709\u53D1\u5F80<code>vm1</code>\u4EFB\u4F55\u63A5\u53E3\u7684 UDP \u7AEF\u53E3 1024 \u7684\u4F20\u5165\u6570\u636E\u5305\u3002</li><li>\u6DFB\u52A0\u89C4\u5219\uFF0C\u6765\u8BB0\u5F55\u6240\u6709\u6765\u81EA<code>vm1</code>\u4EFB\u4F55\u63A5\u53E3\u7684 UDP \u7AEF\u53E3 1024 \u7684\u4F20\u51FA\u6570\u636E\u5305\u3002</li><li>\u5217\u51FA<code>raw</code>\u8868\u89C4\u5219\u3002</li><li>\u5728\u540E\u53F0\u542F\u52A8<code>tail</code>\uFF0C\u5C06\u6253\u5370\u5199\u5165<code>/var/log/kern.log</code>\u7684\u6240\u6709\u65B0\u884C\u3002<code>cut</code>\u4F1A\u5728\u5F00\u5934\u5220\u9664\u4E0D\u5FC5\u8981\u7684\u65E5\u5FD7\u6761\u76EE\u524D\u7F00\u3002\u8BF7\u6CE8\u610F\u540E\u53F0\u8FDB\u7A0B\u5982\u4F55\u5199\u5165\u7EC8\u7AEF\u3002</li><li>\u4EE5\u670D\u52A1\u5668\u6A21\u5F0F\u542F\u52A8<code>nc</code>\uFF0C\u5728<code>vm1</code>\u7684\u6240\u6709\u63A5\u53E3\u4E0A\u76D1\u542C UDP \u7AEF\u53E3 1024 \u3002</li><li>\u4EE5\u5BA2\u6237\u7AEF\u6A21\u5F0F\u542F\u52A8<code>nc</code>\uFF0C\u5C06\u5B57\u7B26\u4E32<code>Hello there!</code>\u53D1\u9001\u5230\u6211\u4EEC\u7684\u670D\u52A1\u5668\u6A21\u5F0F<code>nc</code>\u3002<code>tail</code>\u6253\u5370\u51FA<code>kern.log</code>\u4E2D\u7684\u6240\u6709\u65B0\u884C\uFF0C\u4F60\u53EF\u4EE5\u770B\u5230\u5728 Linux \u5185\u6838\u5C01\u5305\u8FC7\u6EE4\u5668\u4E2D\uFF0C\u6211\u4EEC\u7684\u5355\u4E2A UDP \u6570\u636E\u5305\u4ECE\u4E00\u4E2A\u8868\u5230\u4E86\u53E6\u4E00\u4E2A\u8868\u3002\u6CA1\u6709\u56DE\u590D\uFF0C\u6240\u4EE5\u53EA\u6709\u4E00\u4E2A\u6570\u636E\u5305\u88AB\u53D1\u9001\u548C\u5904\u7406\u3002</li><li>\u6740\u6B7B\u5BA2\u6237\u7AEF\u6A21\u5F0F<code>nc</code>\u3002</li><li>\u5C06\u670D\u52A1\u5668\u6A21\u5F0F<code>nc</code>\u5E26\u5230\u524D\u53F0\u3002</li><li>\u6740\u6B7B\u670D\u52A1\u5668\u6A21\u5F0F<code>nc</code>\u3002</li><li>\u5C06<code>sudo tail -n0 -f /var/log/kern.log | cut -c52-300 &amp;</code>\u5E26\u5230\u524D\u53F0\u3002</li><li>\u6740\u6B7B\u5B83\u3002</li>",19),In=n("h2",{id:"\u9644\u52A0\u9898",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9644\u52A0\u9898","aria-hidden":"true"},"#"),s(" \u9644\u52A0\u9898")],-1),hn=s("\u8FD9\u4E2A\u7EC3\u4E60\u672C\u8EAB\u5DF2\u7ECF\u5F88\u5927\u4E86\u3002\u53EA\u9700\u8981\u6253\u5370\u51FA\u65E5\u5FD7\uFF0C\u5E76\u4F7F\u7528\u94C5\u7B14\u6D4F\u89C8\u5B83\uFF0C\u76F4\u5230\u7406\u89E3\u4E86\u6BCF\u4E00\u884C\u7684\u6BCF\u4E2A\u5B57\u6BB5\u90FD\u53D1\u751F\u4E86\u4EC0\u4E48\u3002\u5982\u679C\u4F60\u5361\u4F4F\u4E86\uFF0C\u53BB\u95EE\u522B\u4EBA\uFF1A"),Nn={href:"http://nixsrv.com/llthw/ex26/log",target:"_blank",rel:"noopener noreferrer"},Un=s("http://nixsrv.com/llthw/ex26/log"),xn=s("\u3002");function Dn(An,gn){const e=t("ExternalLinkIcon");return p(),i(b,null,[o,n("blockquote",null,[n("p",null,[d,n("a",T,[u,a(e)])])]),n("blockquote",null,[n("p",null,[m,n("a",P,[C,a(e)])])]),n("blockquote",null,[n("p",null,[O,n("a",R,[_,a(e)])])]),n("blockquote",null,[n("p",null,[E,n("a",S,[I,a(e)])])]),n("p",null,[h,n("a",N,[U,a(e)]),x]),D,A,n("ul",null,[n("li",null,[n("a",g,[f,a(e)]),L,v,G]),n("li",null,[n("a",W,[y,a(e)]),w]),n("li",null,[n("a",K,[F,a(e)]),k,M,Q]),n("li",null,[n("a",B,[$,a(e)]),q])]),H,n("ul",null,[Y,n("li",null,[j,n("a",J,[X,a(e)]),Z])]),n("p",null,[V,n("a",z,[nn,a(e)]),sn,en,an]),ln,n("p",null,[rn,tn,pn,bn,cn,n("a",on,[dn,a(e)]),Tn]),un,n("ol",null,[mn,n("li",null,[Pn,Cn,On,n("a",Rn,[_n,a(e)]),En]),Sn]),In,n("p",null,[hn,n("a",Nn,[Un,a(e)]),xn])],64)}var Ln=r(c,[["render",Dn]]);export{Ln as default};
