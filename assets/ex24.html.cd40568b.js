import{_ as t,r as a,o as l,c as d,a as n,b as r,F as o,d as e,e as i}from"./app.91d0dc40.js";const p={},c=n("h1",{id:"\u7EC3\u4E60-24-\u63A5\u53E3\u914D\u7F6E-ifconfig-netstat-iproute2-ss-route",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7EC3\u4E60-24-\u63A5\u53E3\u914D\u7F6E-ifconfig-netstat-iproute2-ss-route","aria-hidden":"true"},"#"),e(" \u7EC3\u4E60 24\uFF1A\u63A5\u53E3\u914D\u7F6E\uFF0C"),n("code",null,"ifconfig"),e("\uFF0C"),n("code",null,"netstat"),e("\uFF0C"),n("code",null,"iproute2"),e("\uFF0C"),n("code",null,"ss"),e("\uFF0C"),n("code",null,"route")],-1),b=e("\u539F\u6587\uFF1A"),u={href:"https://archive.fo/JzBji",target:"_blank",rel:"noopener noreferrer"},m=e("Exercise 24. Networking: interface configuration, ifconfig, netstat, iproute2, ss, route"),f=e("\u8BD1\u8005\uFF1A"),_={href:"https://github.com/wizardforcel",target:"_blank",rel:"noopener noreferrer"},h=e("\u98DE\u9F99"),v=e("\u534F\u8BAE\uFF1A"),g={href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank",rel:"noopener noreferrer"},k=e("CC BY-NC-SA 4.0"),T=e("\u81EA\u8C6A\u5730\u91C7\u7528"),P={href:"https://translate.google.cn/",target:"_blank",rel:"noopener noreferrer"},I=e("\u8C37\u6B4C\u7FFB\u8BD1"),N=n("p",null,"\u8FD9\u4E2A\u7EC3\u4E60\u5BF9\u4E8E\u4F60\u6765\u8BF4\u662F\u4E00\u4E2A\u5F88\u5927\u7684\u4FE1\u606F\u91CF\uFF0C\u5982\u679C\u4F60\u4E0D\u719F\u6089\u7F51\u7EDC\uFF0C\u8FD9\u5C31\u662F\u4E00\u4E2A\u4F24\u5BB3\u3002\u5982\u679C\u4F60\u611F\u5230\u975E\u5E38\u5931\u843D\uFF0C\u8BF7\u7ACB\u5373\u8DF3\u5230\u201C\u8FD9\u6837\u505A\u201D\u7684\u90E8\u5206\uFF0C\u5E76\u5B8C\u6210\u5B83\u3002\u4E3A\u4E86\u6B63\u786E\u7406\u89E3\u8FD9\u90E8\u5206\uFF0C\u4F60\u81F3\u5C11\u5E94\u8BE5\u975E\u5E38\u719F\u6089\u7F51\u7EDC\u7684\u4EE5\u4E0B\u57FA\u672C\u6982\u5FF5\uFF1A",-1),S={href:"http://en.wikipedia.org/wiki/Communications_protocol",target:"_blank",rel:"noopener noreferrer"},A=e("\u901A\u4FE1\u534F\u8BAE"),U=e(" - \u901A\u4FE1\u534F\u8BAE\uFF0C\u5C31\u662F\u6570\u5B57\u6D88\u606F\u683C\u5F0F\u548C\u89C4\u5219\u7684\u7CFB\u7EDF\uFF0C\u7528\u4E8E\u5728\u8BA1\u7B97\u7CFB\u7EDF\u6216\u5728\u7535\u5B50\u901A\u8BAF\u4E2D\u4EA4\u6362\u90A3\u4E9B\u6D88\u606F\u3002"),x={href:"http://en.wikipedia.org/wiki/Ethernet",target:"_blank",rel:"noopener noreferrer"},C=e("\u4EE5\u592A\u7F51"),w=e(" - \u7528\u4E8E\u5C40\u57DF\u7F51\uFF08LAN\uFF09\u7684\u8BA1\u7B97\u673A\u7F51\u7EDC\u6280\u672F\u65CF\u3002"),L={href:"http://en.wikipedia.org/wiki/MAC_address",target:"_blank",rel:"noopener noreferrer"},R=e("MAC \u5730\u5740"),M=e(" - \u5206\u914D\u7ED9\u7269\u7406\u7F51\u6BB5\u4E0A\u901A\u4FE1\u7684\u7F51\u7EDC\u63A5\u53E3\u7684\u552F\u4E00\u6807\u8BC6\u7B26\u3002\u4F8B\u5982\uFF1A"),E=n("code",null," 08:00:27:d4:45:68",-1),O=e("\u3002"),y={href:"http://en.wikipedia.org/wiki/Internet_protocol_suite",target:"_blank",rel:"noopener noreferrer"},q=e("TCP/IP"),B=e(" - \u4E92\u8054\u7F51\u534F\u8BAE\u5957\u4EF6\u662F\u4E00\u7EC4\u901A\u4FE1\u534F\u8BAE\uFF0C\u7528\u4E8E\u4E92\u8054\u7F51\u548C\u7C7B\u4F3C\u7F51\u7EDC\uFF0C\u901A\u5E38\u662F\u5E7F\u57DF\u7F51\u6700\u6D41\u884C\u7684\u534F\u8BAE\u6808\u3002\u5B83\u901A\u5E38\u88AB\u79F0\u4E3A TCP/IP\uFF0C\u7531\u4E8E\u5176\u6700\u91CD\u8981\u7684\u534F\u8BAE\uFF1A\u4F20\u8F93\u63A7\u5236\u534F\u8BAE\uFF08TCP\uFF09\u548C\u4E92\u8054\u7F51\u534F\u8BAE\uFF08IP\uFF09"),D={href:"http://en.wikipedia.org/wiki/Internet_Protocol",target:"_blank",rel:"noopener noreferrer"},G=e("IP"),W=e(" - \u4E92\u8054\u7F51\u534F\u8BAE\uFF08IP\uFF09\u662F\u4E3B\u8981\u901A\u4FE1\u534F\u8BAE\uFF0C\u7528\u4E8E\u8DE8\u4E92\u8054\u7F51\u7EDC\u4E2D\u7EE7\u8F6C\u53D1\u6570\u636E\u62A5\uFF08\u4E5F\u79F0\u4E3A\u7F51\u7EDC\u5C01\u5305\uFF09\u3002"),X={href:"http://en.wikipedia.org/wiki/IP_address",target:"_blank",rel:"noopener noreferrer"},K=e("IP \u5730\u5740"),$=e(" - \u4E92\u8054\u7F51\u534F\u8BAE\u5730\u5740\u3002\u793A\u4F8B\uFF1A"),J=n("code",null,"10.0.2.15",-1),H={href:"http://en.wikipedia.org/wiki/Port_(computer_networking)",target:"_blank",rel:"noopener noreferrer"},F=e("\u7AEF\u53E3"),Q=e(" - \u5E94\u7528\u7279\u5B9A\u6216\u6D41\u7A0B\u7279\u5B9A\u7684\u8F6F\u4EF6\u7ED3\u6784\uFF0C\u5728\u8BA1\u7B97\u673A\u7684\u4E3B\u673A\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u7528\u4F5C\u901A\u4FE1\u7AEF\u70B9\u3002\u793A\u4F8B\uFF1A"),V=n("code",null,"22",-1),Y={href:"http://en.wikipedia.org/wiki/Network_socket",target:"_blank",rel:"noopener noreferrer"},j=e("\u7F51\u7EDC\u5957\u63A5\u5B57"),z=e(" - \u8DE8\u8BA1\u7B97\u673A\u7F51\u7EDC\u7684\uFF0C\u8FDB\u7A0B\u95F4\u901A\u4FE1\u6D41\u7684\u7AEF\u70B9\u3002\u4ECA\u5929\uFF0C\u5927\u591A\u6570\u8BA1\u7B97\u673A\u4E4B\u95F4\u7684\u901A\u4FE1\u57FA\u4E8E\u4E92\u8054\u7F51\u534F\u8BAE\uFF1B\u56E0\u6B64\u5927\u591A\u6570\u7F51\u7EDC\u5957\u63A5\u5B57\u90FD\u662F\u4E92\u8054\u7F51\u5957\u63A5\u5B57\u3002"),Z=n("li",null,[e("\u672C\u5730\u5957\u63A5\u5B57\u5730\u5740 - \u672C\u5730 IP \u5730\u5740\u548C\u7AEF\u53E3\u53F7\uFF0C\u4F8B\u5982\uFF1A"),n("code",null,"10.0.2.15:22"),e("\u3002")],-1),nn=n("li",null,[e("\u8FDC\u7A0B\u5957\u63A5\u5B57\u5730\u5740 - \u8FDC\u7A0B IP \u5730\u5740\u548C\u7AEF\u53E3\u53F7\uFF0C\u4EC5\u9002\u7528\u4E8E\u5DF2\u5EFA\u7ACB\u7684 TCP \u5957\u63A5\u5B57\u3002\u793A\u4F8B\uFF1A"),n("code",null,"10.0.2.2:52173"),e("\u3002")],-1),en={href:"http://en.wikipedia.org/wiki/Network_socket%23Socket_pairs",target:"_blank",rel:"noopener noreferrer"},sn=e("\u5957\u63A5\u5B57\u5BF9"),rn=e(" - \u6C9F\u901A\u672C\u5730\u548C\u8FDC\u7A0B\u5957\u63A5\u5B57\uFF0C\u53EA\u6709 TCP \u534F\u8BAE\u3002\u793A\u4F8B\uFF1A"),tn=n("code",null,"(10.0.2.15:22, 10.0.2.2:52173)",-1),an=e("\u3002"),ln={href:"http://en.wikipedia.org/wiki/Subnetwork",target:"_blank",rel:"noopener noreferrer"},dn=e("\u5B50\u7F51\u63A9\u7801"),on=e(" - \u903B\u8F91\u53EF\u89C1\u7684 IP \u7F51\u7EDC\u7EC6\u5206\u3002\u793A\u4F8B\uFF1A"),pn=n("code",null,"/24",-1),cn=e("\u6216\u53E6\u4E00\u4E2A\u8BB0\u53F7"),bn=n("code",null,"255.255.255.0",-1),un=e("\u3002"),mn={href:"http://en.wikipedia.org/wiki/Routing",target:"_blank",rel:"noopener noreferrer"},fn=e("\u8DEF\u7531"),_n=e(" - \u5728\u7F51\u7EDC\u4E2D\u9009\u62E9\u8DEF\u5F84\uFF0C\u6765\u53D1\u9001\u7F51\u7EDC\u6D41\u91CF\u7684\u8FC7\u7A0B\u3002"),hn={href:"http://en.wikipedia.org/wiki/Default_gateway",target:"_blank",rel:"noopener noreferrer"},vn=e("\u9ED8\u8BA4\u7F51\u5173"),gn=e(" - \u5728\u8BA1\u7B97\u673A\u7F51\u7EDC\u4E2D\uFF0C\u7F51\u5173\u662F\u4E00\u4E2A TCP/IP \u7F51\u7EDC\u4E0A\u7684\u8282\u70B9\uFF08\u8DEF\u7531\u5668\uFF09\uFF0C\u4F5C\u4E3A\u53E6\u4E00\u4E2A\u7F51\u7EDC\u7684\u63A5\u5165\u70B9\u3002\u9ED8\u8BA4\u7F51\u5173\u662F\u8BA1\u7B97\u673A\u7F51\u7EDC\u4E0A\u7684\u8282\u70B9\uFF0C\u5F53 IP \u5730\u5740\u4E0E\u8DEF\u7531\u8868\u4E2D\u7684\u4EFB\u4F55\u5176\u4ED6\u8DEF\u7531\u4E0D\u5339\u914D\u65F6\uFF0C\u7F51\u7EDC\u8F6F\u4EF6\u4F7F\u7528\u5B83\u3002\u793A\u4F8B\uFF1A"),kn=n("code",null,"10.0.2.2",-1),Tn=e("\u3002"),Pn={href:"http://en.wikipedia.org/wiki/Broadcast_address",target:"_blank",rel:"noopener noreferrer"},In=e("\u5E7F\u64AD\u5730\u5740"),Nn=e(" - \u903B\u8F91\u5730\u5740\uFF0C\u5176\u4E2D\u8FDE\u63A5\u5230\u591A\u91CD\u8BBF\u95EE\u7684\u7F51\u7EDC\u7684\u8BBE\u5907\u80FD\u63A5\u6536\u6570\u636E\u62A5\u3002\u53D1\u7ED9\u5E7F\u64AD\u5730\u5740\u7684\u6D88\u606F\uFF0C\u901A\u5E38\u4F1A\u7531\u6240\u6709\u9644\u52A0\u5230\u7F51\u7EDC\u7684\u4E3B\u673A\u63A5\u6536\uFF0C\u800C\u4E0D\u662F\u7279\u5B9A\u4E3B\u673A\u3002\u793A\u4F8B\uFF1A"),Sn=n("code",null,"10.0.2.255",-1),An=e("\u3002"),Un={href:"http://en.wikipedia.org/wiki/Internet_Control_Message_Protocol",target:"_blank",rel:"noopener noreferrer"},xn=e("ICMP"),Cn=e(" - \u4E92\u8054\u7F51\u6D88\u606F\u63A7\u5236\u534F\u8BAE\uFF0C\u793A\u4F8B\u7528\u6CD5\uFF1A"),wn=n("code",null,"ping 10.0.2.2",-1),Ln=e("\u3002"),Rn={href:"http://en.wikipedia.org/wiki/Transmission_Control_Protocol",target:"_blank",rel:"noopener noreferrer"},Mn=e("TCP"),En=e(" - \u4F20\u8F93\u63A7\u5236\u534F\u8BAE\u3002\u5728\u6570\u636E\u4EA4\u6362\u4E4B\u524D\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u56E0\u6B64\u8BBE\u8BA1\u4E0A\u53EF\u9760\u3002\u793A\u4F8B\uFF1ASSH, HTTP\u3002"),On={href:"http://en.wikipedia.org/wiki/User_Datagram_Protocol",target:"_blank",rel:"noopener noreferrer"},yn=e("UDP"),qn=e(" - \u7528\u6237\u6570\u636E\u62A5\u534F\u8BAE\u3002\u4F20\u8F93\u6570\u636E\u800C\u4E0D\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u56E0\u6B64\u8BBE\u8BA1\u4E0A\u4E0D\u53EF\u9760\u3002\u793A\u4F8B\uFF1ADNS\u3002"),Bn=n("p",null,"\u5982\u679C\u4F60\u5BF9\u67D0\u4E9B\u6982\u5FF5\u4E0D\u719F\u6089\uFF0C\u4E0D\u7528\u62C5\u5FC3\u3002",-1),Dn=n("li",null,"\u9605\u8BFB\u76F8\u5E94\u7684\u7EF4\u57FA\u767E\u79D1\u6587\u7AE0\uFF0C\u76F4\u5230\u4F60\u81F3\u5C11\u5145\u5206\u7406\u89E3\uFF08\u4F46\u662F\u6DF1\u5165\u94BB\u7814\u5F53\u7136\u66F4\u597D\uFF09\u3002",-1),Gn=e("\u89C2\u770B "),Wn={href:"http://www.visualland.net.cn/",target:"_blank",rel:"noopener noreferrer"},Xn=e("http://www.visualland.net.cn/"),Kn=e(" \u7684\u89C6\u9891\uFF1A "),$n=n("ul",null,[n("li",null,"\u5C55\u5F00\u7AD9\u70B9\u5DE6\u4FA7\u7684 IP \u5730\u5740\u6811\u8282\u70B9\uFF0C\u5E76\u901A\u8FC7\u5B83\u6765\u4EE5\u4F60\u7684\u65B9\u5F0F\u5B9E\u73B0\u3002"),n("li",null,"\u5C55\u5F00 TCP \u6811\u8282\u70B9\u5E76\u6267\u884C\u76F8\u540C\u64CD\u4F5C\u3002")],-1),Jn=e("\u9605\u8BFB "),Hn={href:"http://www.iptables.org/documentation/HOWTO//networking-concepts-HOWTO-3.html%23ss3.1",target:"_blank",rel:"noopener noreferrer"},Fn=e("Linux \u7F51\u7EDC\u6982\u5FF5\u4ECB\u7ECD"),Qn=e("\u3002\u8FD9\u672C\u6307\u5357\u5F88\u597D\uFF0C\u56E0\u4E3A\u5B83\u751A\u81F3\u627F\u8BA4 \u4E92\u8054\u7F51\u662F\u4E3A\u60C5\u6B32\u800C\u751F\u7684\u3002"),Vn=i(`<p>\u8BA9\u6211\u4EEC\u7EE7\u7EED\u3002\u8FD9\u662F Linux \u7F51\u7EDC\u76F8\u5173\u7684\u547D\u4EE4\u5217\u8868\uFF1A</p><ul><li><code>ifconfig</code> - \u914D\u7F6E\u548C\u67E5\u770B\u7F51\u7EDC\u63A5\u53E3\u7684\u72B6\u6001\u3002</li><li><code>netstat</code> - \u6253\u5370\u7F51\u7EDC\u8FDE\u63A5\uFF0C\u8DEF\u7531\u8868\uFF0C\u63A5\u53E3\u7EDF\u8BA1\u4FE1\u606F\uFF0C\u4F2A\u88C5\u8FDE\u63A5\u548C\u7EC4\u64AD\u6210\u5458\u8D44\u683C\u3002</li><li><code>ip</code> - \u663E\u793A/\u64CD\u505A\u8DEF\u7531\uFF0C\u8BBE\u5907\uFF0C\u7B56\u7565\u548C\u96A7\u9053\u3002</li><li><code>ss</code> - \u8C03\u67E5\u5957\u63A5\u5B57\u7684\u53E6\u4E00\u4E2A\u5B9E\u7528\u7A0B\u5E8F\u3002</li></ul><p>\u73B0\u5728\u8BA9\u6211\u4EEC\u6765\u770B\u770B\u6BCF\u4E2A\u547D\u4EE4\u53EF\u4EE5\u544A\u8BC9\u6211\u4EEC\u4EC0\u4E48\u4FE1\u606F\u3002\u6211\u4EEC\u5C06\u4ECE<code>ifconfig</code>\u5F00\u59CB\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:~$ sudo ifconfig
 
eth0      Link encap:Ethernet  HWaddr 08:00:27:d4:45:68               # (1), (2), (3)
          inet addr:10.0.2.15  Bcast:10.0.2.255  Mask:255.255.255.0   # (4), (5), (6), (7)
          inet6 addr: fe80::a00:27ff:fed4:4568/64 Scope:Link          # (8), (9), (10)
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1          # (11), (12), (13), (14), (15), (16)
          RX packets:35033 errors:0 dropped:0 overruns:0 frame:0      # (17), (18), (19), (20), (21), (22)
          TX packets:28590 errors:0 dropped:0 overruns:0 carrier:0    # (23), (24), (25), (26), (27), (28)
          collisions:0 txqueuelen:1000                                # (29), (30)
          RX bytes:6360747 (6.0 MiB)  TX bytes:21721365 (20.7 MiB)   # (31), (32)
 
lo        Link encap:Local Loopback
          inet addr:127.0.0.1  Mask:255.0.0.0
          inet6 addr: ::1/128 Scope:Host
          UP LOOPBACK RUNNING  MTU:16436  Metric:1
          RX packets:8 errors:0 dropped:0 overruns:0 frame:0
          TX packets:8 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0
          RX bytes:560 (560.0 B)  TX bytes:560 (560.0 B)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230<code>vm1</code>\u4E2D\u6709\u4E24\u4E2A\u7F51\u7EDC\u63A5\u53E3\uFF0C<code>eth0</code>\u548C<code>lo</code>\u3002<code>lo</code>\u662F\u4E00\u4E2A\u56DE\u9001 \u63A5\u53E3\uFF0C\u7528\u4E8E\u8FDE\u63A5\u540C\u4E00\u53F0\u673A\u5668\u4E0A\u7684\u5BA2\u6237\u7AEF-\u670D\u52A1\u5668\u7A0B\u5E8F\u3002</p><p>\u8BA9\u6211\u4EEC\u770B\u770B\u6211\u4EEC\u5728<code>eth0</code>\u4E0A\u6709\u54EA\u4E9B\u4FE1\u606F\uFF0C\u5B83\u662F\u4E00\u4E2A VirtualBox \u7684\u4F2A\u7F51\u7EDC\u63A5\u53E3\uFF1A</p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u63CF\u8FF0</th><th>\u5B57\u6BB5</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>(1) Link</td><td>\u7269\u7406\u9009\u9879</td><td>(17) RX</td><td>\u63A5\u6536\uFF08\u7F29\u5199\uFF09</td></tr><tr><td>(2) encap</td><td>\u5C01\u88C5\u7C7B\u578B</td><td>(18) packets</td><td>\u5C01\u5305\u603B\u6570</td></tr><tr><td>(3) Hwaddr</td><td>MAC \u5730\u5740</td><td>(19) errors</td><td>\u9519\u8BEF\u7684\u6570\u636E\u5305\u603B\u6570</td></tr><tr><td>(4) inet</td><td>\u5730\u5740\u65CF\uFF08IPv4\uFF09</td><td>(20) dropped</td><td>\u4E22\u5F03\u7684\u5C01\u5305\uFF08\u4F4E\u7CFB\u7EDF\u5185\u5B58\uFF1F\uFF09</td></tr><tr><td>(5) addr</td><td>IPv4 \u5730\u5740</td><td>(21) overruns</td><td>\u6BD4\u5904\u7406\u901F\u5EA6\u5FEB\u7684\u5C01\u5305</td></tr><tr><td>(6) Bcast</td><td>\u5E7F\u64AD\u5730\u5740</td><td>(22) frame</td><td>\u63A5\u6536\u7684\u65E0\u6548\u7684\u5E27</td></tr><tr><td>(7) Mask</td><td>\u7F51\u7EDC\u63A9\u7801</td><td>(23) TX</td><td>\u4F20\u8F93\uFF08\u7F29\u5199\uFF09</td></tr><tr><td>(8) inet6</td><td>\u5730\u5740\u65CF\uFF08IPv6\uFF09</td><td>(24) packets</td><td>\u5C01\u5305\u603B\u6570</td></tr><tr><td>(9) addr</td><td>IPv6 \u5730\u5740</td><td>(25) errors</td><td>\u9519\u8BEF\u7684\u6570\u636E\u5305\u603B\u6570</td></tr><tr><td>(10) Scope</td><td>\u5730\u5740\u8303\u56F4\uFF08\u4E3B\u673A\uFF0C\u94FE\u8DEF\uFF0C\u5168\u5C40\uFF09</td><td>(26) dropped</td><td>\u4E22\u5F03\u7684\u5C01\u5305\uFF08\u4F4E\u7CFB\u7EDF\u5185\u5B58\uFF1F\uFF09</td></tr><tr><td>(11) UP</td><td>\u63A5\u53E3\u529F\u80FD\u6B63\u5E38</td><td>(27) overruns</td><td>\u6BD4\u5904\u7406\u901F\u5EA6\u5FEB\u7684\u5C01\u5305\uFF08\u6211\u4E0D\u786E\u5B9A\uFF09</td></tr><tr><td>(12) BROADCAST</td><td>\u5B83\u53EF\u4EE5\u4E00\u6B21\u6027\u5411\u6240\u6709\u4E3B\u673A\u53D1\u9001\u6D41\u91CF</td><td>(28) carrier</td><td>\u94FE\u8DEF\u8F7D\u6CE2\u4E22\u5931</td></tr><tr><td>(13) RUNNING</td><td>\u5B83\u51C6\u5907\u597D\u63A5\u53D7\u6570\u636E\uFF08\u6211\u4E0D\u786E\u5B9A\uFF09</td><td>(29) collisions</td><td>\u53D1\u751F\u4E86\u5305\u88C5\u78B0\u649E</td></tr><tr><td>(14) MULTICAST</td><td>\u5B83\u53EF\u4EE5\u53D1\u9001\u548C\u63A5\u6536\u7EC4\u64AD\u5C01\u5305</td><td>(30) txqueuelen</td><td>\u4F20\u51FA\u6570\u636E\u5305\u7684\u8F6C\u53D1\u961F\u5217\u957F\u5EA6</td></tr><tr><td>(15) MTU</td><td>\u5176\u6700\u5927\u4F20\u8F93\u5355\u4F4D</td><td>(31) RX bytes</td><td>\u6536\u5230\u7684\u5B57\u8282\u603B\u6570</td></tr><tr><td>(16) Metric</td><td>\u8DEF\u7531\u5F00\u9500\uFF08\u5728 Linux \u4E2D\u672A\u4F7F\u7528\uFF09</td><td>(32) TX bytes</td><td>\u53D1\u9001\u7684\u5B57\u8282\u603B\u6570</td></tr></tbody></table><p>\u8FD9\u786E\u5B9E\u5F88\u591A\u3002\u4F46\u662F\u540C\u6837\uFF0C\u73B0\u5728\u7684\u91CD\u8981\u5B57\u6BB5\u662F\uFF1A</p><ul><li>(5) <code>addr</code> - IPv4\u5730\u5740\u3002</li><li>(6) <code>Bcast</code> - \u5E7F\u64AD\u5730\u5740\u3002</li><li>(7) <code>Mask </code> - \u7F51\u7EDC\u63A9\u7801\u3002</li><li>(11) <code>UP</code> - \u63A5\u53E3\u6B63\u5E38\u5DE5\u4F5C\u3002</li><li>(13) <code>RUNNING</code> - \u51C6\u5907\u597D\u63A5\u53D7\u6570\u636E\u3002</li><li>(19) <code>errors</code> \u548C (25) <code>errors</code> - \u5982\u679C\u5728\u8FD9\u91CC\u6709\u4E0D\u4E3A\u96F6\u7684\u4E1C\u897F\uFF0C\u6211\u4EEC\u5C31\u6709\u95EE\u9898\u4E86\u3002</li></ul><p>\u73B0\u5728\u8BA9\u6211\u4EEC\u770B\u770B<code>netstat</code>\u80FD\u7ED9\u6211\u4EEC\u770B\u7684\u4E1C\u897F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:~$ sudo netstat -ap
Active Internet connections (servers and established)
#(1)  (2)    (3)    (4)                     (5)                     (6)         (7)
Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
tcp        0      0 *:sunrpc                *:*                     LISTEN      580/portmap
tcp        0      0 *:ssh                   *:*                     LISTEN      900/sshd
tcp        0      0 localhost:smtp          *:*                     LISTEN      1111/exim4
tcp        0      0 *:36286                 *:*                     LISTEN      610/rpc.statd
tcp        0      0 10.0.2.15:ssh           10.0.2.2:52191          ESTABLISHED 12023/sshd: user1 [
tcp        0      0 10.0.2.15:ssh           10.0.2.2:48663          ESTABLISHED 11792/sshd: user1 [
tcp6       0      0 [::]:ssh                [::]:*                  LISTEN      900/sshd
tcp6       0      0 ip6-localhost:smtp      [::]:*                  LISTEN      1111/exim4
udp        0      0 *:bootpc                *:*                                 843/dhclient
udp        0      0 *:sunrpc                *:*                                 580/portmap
udp        0      0 *:52104                 *:*                                 610/rpc.statd
udp        0      0 *:786                   *:*                                 610/rpc.statd
#(8)  (9)    (10)        (11)       (12)          (13)     (14)                (15)
Active UNIX domain sockets (servers and established)
Proto RefCnt Flags       Type       State         I-Node   PID/Program name    Path
unix  2      [ ACC ]     STREAM     LISTENING     3452     786/acpid           /var/run/acpid.socket
unix  6      [ ]         DGRAM                    3407     751/rsyslogd        /dev/log
unix  2      [ ]         DGRAM                    1940     214/udevd           @/org/kernel/udev/udevd
unix  2      [ ]         DGRAM                    88528    30939/sudo
unix  3      [ ]         STREAM     CONNECTED     68565    12023/sshd: user1 [
unix  3      [ ]         STREAM     CONNECTED     68564    12026/1
unix  2      [ ]         DGRAM                    68563    12023/sshd: user1 [
unix  3      [ ]         STREAM     CONNECTED     66682    11792/sshd: user1 [
unix  3      [ ]         STREAM     CONNECTED     66681    11794/0
unix  2      [ ]         DGRAM                    66680    11792/sshd: user1 [
unix  2      [ ]         DGRAM                    3465     843/dhclient
unix  2      [ ]         DGRAM                    3448     786/acpid
unix  3      [ ]         DGRAM                    1945     214/udevd
unix  3      [ ]         DGRAM                    1944     214/udevd
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>\u6211\u4F7F\u7528\u4E24\u4E2A\u53C2\u6570\u6765\u4FEE\u6539<code>netstat</code>\u8F93\u51FA\u3002<code>-a</code>\u53C2\u6570\u544A\u8BC9<code>netstat</code>\u6765\u663E\u793A\u6240\u6709\u7684\u8FDE\u63A5\uFF0C\u5305\u62EC\u5EFA\u7ACB\u7684\uFF0C\u4F8B\u5982\u4F60\u5F53\u524D\u6B63\u5728\u6253\u5B57\u7684<code>ssh</code>\u4F1A\u8BDD\uFF0C\u4EE5\u53CA\u76D1\u542C\u7684\uFF0C\u4F8B\u5982\u7B49\u5F85\u65B0\u7684\u8FDE\u63A5\u7684<code>sshd</code>\u5B88\u62A4\u8FDB\u7A0B\u3002<code>-p</code>\u544A\u8BC9<code>netstat</code>\u6765\u663E\u793A\u54EA\u4E2A\u7A0B\u5E8F\u62E5\u6709\u6BCF\u4E2A\u8FDE\u63A5\u3002</p><table><thead><tr><th>\u6D3B\u52A8\u4E92\u8054\u7F51\u8FDE\u63A5\uFF08\u670D\u52A1\u5668\u548C\u5DF2\u5EFA\u7ACB\uFF09</th><th></th></tr></thead><tbody><tr><td>\u5B57\u6BB5</td><td>\u63CF\u8FF0</td></tr><tr><td>(1) Proto</td><td>\u5957\u63A5\u5B57\u4F7F\u7528\u7684\u534F\u8BAE\uFF08tcp\uFF0Cudp\uFF0Craw\uFF09</td></tr><tr><td>(2) Recv-Q</td><td>\u8FDE\u63A5\u5230\u6B64\u5957\u63A5\u5B57\u7684\u7528\u6237\u7A0B\u5E8F\u7684\u672A\u590D\u5236\u7684\u5B57\u8282\u6570</td></tr><tr><td>(3) Send-Q</td><td>\u8FDC\u7A0B\u4E3B\u673A\u672A\u786E\u8BA4\u7684\u5B57\u8282\u6570</td></tr><tr><td>(4) Local Address</td><td>\u5957\u63A5\u5B57\u7684\u672C\u7AEF\u7684\u5730\u5740\u548C\u7AEF\u53E3\u53F7\u3002</td></tr><tr><td>(5) Foreign Address</td><td>\u5957\u63A5\u5B57\u8FDC\u7AEF\u7684\u5730\u5740\u548C\u7AEF\u53E3\u53F7\u3002</td></tr><tr><td>(6) State</td><td><code>ESTABLISHED</code>, <code>SYN_SENT</code>, <code>SYN_RECV</code>, <code>FIN_WAIT1</code>, <code>FIN_WAIT2</code>, <code>TIME_WAIT</code>, <code>CLOSE</code>, <code>CLOSE_WAIT</code>, <code>LAST_ACK</code>, <code>LISTEN</code>, <code>CLOSING</code>, <code>UNKNOWN</code></td></tr><tr><td>(7) PID</td><td>\u62E5\u6709\u5957\u63A5\u5B57\u7684\u8FDB\u7A0B\u7684\u8FDB\u7A0B ID\uFF08PID\uFF09\u548C\u8FDB\u7A0B\u540D\u79F0\u7684\u659C\u6760\u5BF9\u3002</td></tr><tr><td>\u6D3B\u52A8 UNIX \u57DF\u5957\u63A5\u5B57\uFF08\u670D\u52A1\u5668\u548C\u5DF2\u5EFA\u7ACB\uFF09</td><td></td></tr><tr><td>\u5B57\u6BB5</td><td>\u63CF\u8FF0</td></tr><tr><td>(8) Proto</td><td>\u5957\u63A5\u5B57\u4F7F\u7528\u7684\u534F\u8BAE\uFF08\u901A\u5E38\u4E3A unix\uFF09\u3002</td></tr><tr><td>(9) RefCnt</td><td>\u5F15\u7528\u8BA1\u6570\uFF08\u5373\u9644\u52A0\u5230\u6B64\u5957\u63A5\u5B57\u7684\u8FDB\u7A0B\uFF09\u3002</td></tr><tr><td>(10) Flags</td><td>\u663E\u793A\u7684\u6807\u5FD7\u662F<code>SO_ACCEPTON</code>\uFF08\u663E\u793A\u4E3A<code>ACC</code>\uFF09\uFF0C<code>SO_WAITDATA</code>\uFF08<code>W</code>\uFF09\u6216<code>SO_NOSPACE</code>\uFF08<code>N</code>\uFF09\u3002</td></tr><tr><td>(11) Type</td><td><code>SOCK_DGRAM</code>, <code>SOCK_STREAM</code>, <code>SOCK_RAW</code>, <code>SOCK_RDM</code>, <code>SOCK_SEQPACKET</code>, <code>SOCK_PACKET</code>, <code>UNKNOWN</code>.</td></tr><tr><td>(12) State</td><td><code>FREE</code>, <code>LISTENING</code>, <code>CONNECTING</code>, <code>CONNECTED</code>, <code>DISCONNECTING</code>, <code>(empty)</code>, <code>UNKNOWN</code>.</td></tr><tr><td>(13) I-Node</td><td>\u5957\u63A5\u5B57\u6587\u4EF6\u7684\u7D22\u5F15\u8282\u70B9\u3002</td></tr><tr><td>(14) PID</td><td>\u6253\u5F00\u5957\u63A5\u5B57\u7684\u8FDB\u7A0B\u7684\u8FDB\u7A0B ID\uFF08PID\uFF09\u548C\u8FDB\u7A0B\u540D\u79F0\u3002</td></tr><tr><td>(15) Path</td><td>\u8FD9\u662F\u8FDE\u63A5\u5230\u5957\u63A5\u5B57\u7684\u5BF9\u5E94\u8FDB\u7A0B\u7684\u8DEF\u5F84\u540D\u3002</td></tr></tbody></table><p>\u5E76\u975E\u6240\u6709\u5B57\u6BB5\u90FD\u662F\u91CD\u8981\u7684\u3002\u901A\u5E38\u4F60\u53EA\u9700\u8981\u67E5\u770B\u6D3B\u52A8\u7684\u4E92\u8054\u7F51\u8FDE\u63A5\uFF08\u670D\u52A1\u5668\u548C\u5DF2\u5EFA\u7ACB\uFF09 \u90E8\u5206\uFF0C\u5E76\u4F7F\u7528\u4EE5\u4E0B\u5B57\u6BB5\uFF1A</p><p>\uFF081\uFF09<code>Proto</code> - \u5957\u63A5\u5B57\u4F7F\u7528\u7684\u534F\u8BAE\uFF08tcp\uFF0Cudp\uFF0Craw\uFF09\u3002 \uFF084\uFF09<code>Local Address</code> - \u5957\u63A5\u5B57\u672C\u7AEF\u7684\u5730\u5740\u548C\u7AEF\u53E3\u53F7\u3002 \uFF085\uFF09<code>Foreign Address</code> - \u5957\u63A5\u5B57\u8FDC\u7AEF\u7684\u5730\u5740\u548C\u7AEF\u53E3\u53F7\uFF0C\u4EC5\u7528\u4E8E\u5957\u63A5\u5B57\u5BF9\u3002 \uFF086\uFF09<code>State</code> - \u73B0\u5728\u4F60\u53EA\u5E94\u8BE5\u77E5\u9053\u4E24\u4E2A\u72B6\u6001\uFF1A<code>LISTEN</code>\u548C<code>ESTABLISHED</code>\u3002\u524D\u8005\u610F\u5473\u7740\u4F60\u53EF\u4EE5\u8FDE\u63A5\u5230\u8FD9\u4E2A\u5957\u63A5\u5B57\uFF0C\u7B2C\u540E\u8005\u7684\u610F\u601D\u662F\u8FD9\u4E2A\u5957\u63A5\u5B57\u5DF2\u7ECF\u8FDE\u63A5\u4E86\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C<code>netstat</code>\u663E\u793A\u4F60\u7684\u5957\u63A5\u5B57\u5BF9\u3002</p><p><code>ip</code>\u662F\u4E00\u4E2A\u7C7B\u4F3C\u4E8E<code>ifconfig</code>\u7684\uFF0C\u5177\u6709\u6269\u5C55\u529F\u80FD\u7684\u7A0B\u5E8F\u3002\u5B83\u6765\u81EA<code>iproute2</code>\u5957\u4EF6\uFF0C\u7528\u4E8E\u5728\u67D0\u4E00\u5929\u66FF\u6362<code>ifconfig</code>\u3002\u793A\u4F8B\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:~$ sudo ip addr show
1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 16436 qdisc noqueue state UNKNOWN
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
#        (1)        (2)      (3) (4)       (5)      (6)              (8)      (9)
2: eth0: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc pfifo_fast state UP qlen 1000
    link/ether 08:00:27:d4:45:68 brd ff:ff:ff:ff:ff:ff      # (9),  (10), (11)
    inet 10.0.2.15/24 brd 10.0.2.255 scope global eth0      # (12), (13), (14)
    inet6 fe80::a00:27ff:fed4:4568/64 scope link            # (15), (16)
       valid_lft forever preferred_lft forever              # (17), (18), (19)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u540C\u6837\uFF0C\u6211\u4EEC\u6765\u770B\u770B\u6211\u4EEC\u5728<code>eth0</code>\u4E0A\u6709\u4EC0\u4E48\u4FE1\u606F\uFF1A</p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>(1) BROADCAST</td><td>\u5B83\u53EF\u4EE5\u4E00\u6B21\u6027\u5411\u6240\u6709\u4E3B\u673A\u53D1\u9001\u6D41\u91CF</td></tr><tr><td>(2) MULTICAST</td><td>\u5B83\u53EF\u4EE5\u53D1\u9001\u548C\u63A5\u6536\u7EC4\u64AD\u6570\u636E\u5305</td></tr><tr><td>(3) UP</td><td>\u5B83\u662F\u751F\u6548\u7684\uFF0C\u903B\u8F91\u72B6\u6001</td></tr><tr><td>(4) LOWER_UP</td><td>\u9A71\u52A8\u5668\u4FE1\u53F7 L1 \u5DF2\u5F00\u542F\uFF08\u81EA Linux 2.6.17 \u8D77\uFF09</td></tr><tr><td>(5) MTU</td><td>\u6700\u5927\u4F20\u8F93\u5355\u4F4D</td></tr><tr><td>(6) qdisc</td><td>\u6392\u961F\u89C4\u5219\uFF0C\u57FA\u672C\u4E0A\u662F\u6D41\u91CF\u8C03\u5EA6\u7B56\u7565</td></tr><tr><td>(8) State</td><td>\u7269\u7406\u72B6\u6001\uFF08\u8F7D\u4F53\u611F\u89C9\uFF1F\uFF09</td></tr><tr><td>(9) qlen</td><td>\u4F20\u51FA\u6570\u636E\u5305\u7684\u8F6C\u53D1\u961F\u5217\u957F\u5EA6</td></tr><tr><td>(10) link</td><td>\u7269\u7406\u9009\u9879</td></tr><tr><td>(11) ether</td><td>\u5C01\u88C5\u7C7B\u578B\uFF0CMAC \u5730\u5740</td></tr><tr><td>(12) brd</td><td>\u6570\u636E\u94FE\u8DEF\u5C42\uFF08\u7269\u7406\uFF09\u5E7F\u64AD\u5730\u5740</td></tr><tr><td>(13) inet</td><td>IPv4 \u5730\u5740\u65CF\u5730\u5740</td></tr><tr><td>(14) brd</td><td>IPv4 \u5E7F\u64AD</td></tr><tr><td>(15) scope</td><td>IPv4\u5730\u5740\u8303\u56F4\uFF08\u4E3B\u673A\uFF0C\u94FE\u8DEF\uFF0C\u5168\u5C40\uFF09</td></tr><tr><td>(16) inet6</td><td>IPv6 \u5730\u5740\u65CF\u5730\u5740</td></tr><tr><td>(17) scope</td><td>IPv6\u5730\u5740\u8303\u56F4\uFF08\u4E3B\u673A\uFF0C\u94FE\u8DEF\uFF0C\u5168\u5C40\uFF09</td></tr><tr><td>(18) valid_lft</td><td>IPv6 \u6E90\u5730\u5740\u9009\u62E9\u7B56\u7565</td></tr><tr><td>(19) preffered_lft</td><td>IPv6 \u6E90\u5730\u5740\u9009\u62E9\u7B56\u7565</td></tr></tbody></table><p>\u4F60\u5DF2\u7ECF\u77E5\u9053\u54EA\u4E9B\u53C2\u6570\u5F88\u91CD\u8981\uFF08\u4E0E<code>ifconfig</code>\u76F8\u540C\uFF09\u3002</p><p><code>ss</code>\u57FA\u672C\u4E0A\u662F\u5177\u6709\u6269\u5C55\u529F\u80FD\u7684\u5F53\u4EE3<code>netstat</code>\u3002\u8FD9\u662F\u5B83\u7684\u793A\u4F8B\u8F93\u51FA\uFF0C\u5176\u89E3\u91CA\u4E3A\u7559\u4F5C\u7EC3\u4E60\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:~$ sudo ss -ap | cut -c1-200
State      Recv-Q Send-Q    Local Address:Port      Peer Address:Port
LISTEN     0      128                   *:sunrpc               *:*        users:((&quot;portmap&quot;,580,5))
LISTEN     0      128                  :::ssh                 :::*        users:((&quot;sshd&quot;,900,4))
LISTEN     0      128                   *:ssh                  *:*        users:((&quot;sshd&quot;,900,3))
LISTEN     0      20                  ::1:smtp                :::*        users:((&quot;exim4&quot;,1111,4))
LISTEN     0      20            127.0.0.1:smtp                 *:*        users:((&quot;exim4&quot;,1111,3))
LISTEN     0      128                   *:36286                *:*        users:((&quot;rpc.statd&quot;,610,7))
ESTAB      0      0             10.0.2.15:ssh           10.0.2.2:52191    users:((&quot;sshd&quot;,12023,3),(&quot;sshd&quot;,12026,3))
ESTAB      0      0             10.0.2.15:ssh           10.0.2.2:48663    users:((&quot;sshd&quot;,11792,3),(&quot;sshd&quot;,11794,3))
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u8FD9\u7528\u4E8E\u5904\u7406\u63A5\u53E3\uFF0C\u8FDE\u63A5\u548C\u63A5\u53E3\u5730\u5740\u3002\u4F46\u662F\u7F51\u7EDC\u8DEF\u7531\u5462\uFF1F\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u51E0\u4E2A\u547D\u4EE4\u83B7\u53D6\u5B83\u4EEC\u7684\u4FE1\u606F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:~$ sudo route -n
Kernel IP routing table
# (1)           (2)             (3)             (4)   (5)    (6)    (7) (8)
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
10.0.2.0        *               255.255.255.0   U     0      0        0 eth0
default         10.0.2.2        0.0.0.0         UG    0      0        0 eth0
user1@vm1:~$ sudo netstat -nr
Kernel IP routing table #                                           (9)
Destination     Gateway         Genmask         Flags   MSS Window  irtt Iface
10.0.2.0        0.0.0.0         255.255.255.0   U         0 0          0 eth0
0.0.0.0         10.0.2.2        0.0.0.0         UG        0 0          0 eth0
user1@vm1:~$ sudo ip route show
# (10)      (11)      (12)          (13)        (14)
10.0.2.0/24 dev eth0  proto kernel  scope link  src 10.0.2.15
#(15)                (16)
default via 10.0.2.2 dev eth0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u8BA9\u6211\u4EEC\u518D\u4E00\u6B21\u770B\u770B\u5B57\u6BB5\uFF1A</p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>(1) Destination</td><td>\u76EE\u6807\u7F51\u7EDC\u6216\u76EE\u6807\u4E3B\u673A\u3002</td></tr><tr><td>(2) Gateway</td><td>\u7F51\u5173\u5730\u5740\u6216<code>*</code>\uFF0C\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E\u7684\u8BDD\u3002</td></tr><tr><td>(3) Genmask</td><td>\u76EE\u6807\u7F51\u7EDC\u7684\u63A9\u7801\uFF1B<code>255.255.255.255</code>\u4E3A\u4E3B\u673A\u76EE\u6807\uFF0C<code>0.0.0.0</code>\u4E3A\u9ED8\u8BA4\u8DEF\u7531\u3002</td></tr><tr><td>(4) Flags</td><td>Up, Host, Gateway, Reinstate, Dynamically installed, Modified, Addrconf, Cache entry, ! reject.</td></tr><tr><td>(5) Metric</td><td>\u76EE\u6807\u7684\u201C\u8DDD\u79BB\u201D\uFF08\u901A\u5E38\u4EE5\u8DF3\u6570\u8BA1\u7B97\uFF09\u3002\u6700\u8FD1\u7684\u5185\u6838\u4E0D\u4F7F\u7528\u5B83\uFF0C\u4F46\u8DEF\u7531\u5B88\u62A4\u8FDB\u7A0B\u53EF\u80FD\u9700\u8981\u5B83\u3002</td></tr><tr><td>(6) Ref</td><td>\u8FD9\u4E2A\u8DEF\u7531\u7684\u5F15\u7528\u6B21\u6570\uFF08\u5728 Linux \u5185\u6838\u4E2D\u672A\u4F7F\u7528\uFF09\u3002</td></tr><tr><td>(7) Use</td><td>\u8DEF\u7531\u67E5\u8BE2\u6B21\u6570\u3002</td></tr><tr><td>(8) Iface</td><td>\u7528\u4E8E\u8FD9\u4E2A\u8DEF\u7531\u7684\uFF0C\u53D1\u9001\u5C01\u5305\u7684\u63A5\u53E3</td></tr><tr><td>(9) irtt</td><td>\u521D\u59CB RTT\uFF08\u5F80\u8FD4\u65F6\u95F4\uFF09\u3002\u5185\u6838\u4F7F\u7528\u5B83\u6765\u731C\u6D4B\u6700\u4F73\u7684 TCP \u534F\u8BAE\u53C2\u6570\uFF0C\u800C\u65E0\u9700\u7B49\u5F85\uFF08\u53EF\u80FD\u5F88\u6162\uFF09\u7684\u7B54\u6848\u3002</td></tr><tr><td>(10) Net/Mask</td><td>\u76EE\u6807\u7F51\u7EDC\u6216\u76EE\u6807\u4E3B\u673A\u3002</td></tr><tr><td>(11) dev</td><td>\u7528\u4E8E\u8FD9\u4E2A\u8DEF\u7531\u7684\uFF0C\u53D1\u9001\u5C01\u5305\u7684\u63A5\u53E3</td></tr><tr><td>(12) proto</td><td><code>man ip /RTPROTO</code>: redirect, kernel, boot, static, ra</td></tr><tr><td>(13) scope</td><td><code>man ip /SCOPE_WALUE</code>: global, site, link, host</td></tr><tr><td>(14) src</td><td>\u53D1\u9001\u5230\u8DEF\u7531\u524D\u7F00\u8986\u76D6\u7684\u76EE\u6807\u65F6\uFF0C\u4F18\u5148\u9009\u62E9\u7684\u6E90\u5730\u5740\u3002</td></tr><tr><td>(15) default</td><td>\u9ED8\u8BA4\u7F51\u5173\u5730\u5740</td></tr><tr><td>(15) dev</td><td>\u7528\u4E8E\u8FD9\u4E2A\u8DEF\u7531\u7684\uFF0C\u53D1\u9001\u5C01\u5305\u7684\u63A5\u53E3</td></tr></tbody></table><p>\u76EE\u524D\u7684\u91CD\u8981\u5B57\u6BB5\uFF1A</p><ul><li>\uFF081\uFF09<code>Destination</code> - \u76EE\u6807\u7F51\u7EDC\u6216\u76EE\u6807\u4E3B\u673A\u3002</li><li>\uFF082\uFF09<code>Gateway</code> - \u7F51\u5173\u5730\u5740\u6216<code>*</code>\uFF0C\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E\u7684\u8BDD\u3002\u9ED8\u8BA4\u503C\u610F\u5473\u7740\uFF0C\u5982\u679C\u6CA1\u6709\u660E\u786E\u6307\u5B9A\u7684\u76EE\u6807\u5730\u5740\u7684\u7F51\u5173\uFF0C\u5219\u5C06\u901A\u8FC7\u8BE5\u7F51\u5173\u53D1\u9001\u6570\u636E\u5305\u3002</li><li>\uFF083\uFF09<code>Genmask</code> - \u76EE\u6807\u7F51\u7EDC\u7684\u7F51\u7EDC\u63A9\u7801\uFF1B<code>255.255.255.255</code>\u4E3A\u4E3B\u673A\u76EE\u6807\uFF0C<code>0.0.0.0</code>\u4E3A\u9ED8\u8BA4\u8DEF\u7531\u3002</li><li>\uFF088\uFF09<code>Iface</code> - \u7528\u4E8E\u8FD9\u4E2A\u8DEF\u7531\u7684\uFF0C\u53D1\u9001\u5C01\u5305\u7684\u63A5\u53E3\u3002</li></ul><p><code>netstat</code>\u548C<code>route</code>\u7684\u54EA\u4E2A\u5B57\u6BB5\u5BF9\u5E94\u4E8E\`ip route show \xB7\u7684\u54EA\u4E2A\u5B57\u6BB5 \uFF0C\u518D\u6B21\u7559\u4F5C\u4E00\u4E2A\u7EC3\u4E60\u3002\u8FD9\u771F\u662F\u592A\u591A\u4E86\uFF01\u6DF1\u5438\u4E00\u53E3\u6C14\uFF0C\u8BA9\u6211\u4EEC\u8F6C\u5230\u5B9E\u8DF5\u3002</p><p>\u73B0\u5728\u4F60\u5C06\u5B66\u4E60\u5982\u4F55\u521B\u5EFA\u4F2A\u63A5\u53E3\uFF0C\u4E3A\u5176\u5206\u914D\u5730\u5740\u5E76\u66F4\u6539\u5176\u72B6\u6001\u3002</p><h2 id="\u8FD9\u6837\u505A" tabindex="-1"><a class="header-anchor" href="#\u8FD9\u6837\u505A" aria-hidden="true">#</a> \u8FD9\u6837\u505A</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> 1: sudo aptitude install uml-utilities
 2: sudo tunctl -t tap0 -u user1
 3: ls -al /sys/devices/virtual/net/tap0
 4: sudo ifconfig tap0 10.1.1.1 netmask 255.255.255.0
 5: sudo ifconfig
 6: sudo route
 7: ping 10.1.1.1 -c 2
 8: sudo ifconfig tap0 down
 9: ping 10.1.1.1 -c 2
10: sudo ifconfig tap0 up
11: sudo ip a a 10.2.2.2/24 brd + dev tap0
12: sudo ifconfig
13: sudo route
14: ip a s
15: ip r s
16: ping 10.2.2.2 -c 2
17: sudo ip link set dev tap0 down
18: ip a s
19: ip r s
20: ping 10.2.2.2 -c 2
21: sudo tunctl -d tap0
22: ip a s
23: ls -al /sys/devices/virtual/net/tap0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="\u4F60\u4F1A\u770B\u5230\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4F60\u4F1A\u770B\u5230\u4EC0\u4E48" aria-hidden="true">#</a> \u4F60\u4F1A\u770B\u5230\u4EC0\u4E48</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:~$ sudo aptitude install uml-utilities
The following NEW packages will be installed:
  libfuse2{a} uml-utilities
0 packages upgraded, 2 newly installed, 0 to remove and 0 not upgraded.
Need to get 0 B/205 kB of archives. After unpacking 737 kB will be used.
Do you want to continue? [Y/n/?]
Selecting previously deselected package libfuse2.
(Reading database ... 39616 files and directories currently installed.)
Unpacking libfuse2 (from .../libfuse2_2.8.4-1.1_amd64.deb) ...
Selecting previously deselected package uml-utilities.
Unpacking uml-utilities (from .../uml-utilities_20070815-1.1_amd64.deb) ...
Processing triggers for man-db ...
Setting up libfuse2 (2.8.4-1.1) ...
Setting up uml-utilities (20070815-1.1) ...
Starting User-mode networking switch: uml_switch.
user1@vm1:~$ sudo tunctl -t tap0 -u user1
Set &#39;tap0&#39; persistent and owned by uid 1000
user1@vm1:~$ ls -al /sys/devices/virtual/net/tap0
total 0
drwxr-xr-x 4 root root    0 Jul 11 05:33 .
drwxr-xr-x 4 root root    0 Jul 11 05:33 ..
-r--r--r-- 1 root root 4096 Jul 11 05:33 address
-r--r--r-- 1 root root 4096 Jul 11 05:33 addr_len
-r--r--r-- 1 root root 4096 Jul 11 05:33 broadcast
-r--r--r-- 1 root root 4096 Jul 11 05:33 carrier
-r--r--r-- 1 root root 4096 Jul 11 05:33 dev_id
-r--r--r-- 1 root root 4096 Jul 11 05:33 dormant
-r--r--r-- 1 root root 4096 Jul 11 05:33 duplex
-r--r--r-- 1 root root 4096 Jul 11 05:33 features
-rw-r--r-- 1 root root 4096 Jul 11 05:33 flags
-r--r--r-- 1 root root 4096 Jul 11 05:33 group
-rw-r--r-- 1 root root 4096 Jul 11 05:33 ifalias
-r--r--r-- 1 root root 4096 Jul 11 05:33 ifindex
-r--r--r-- 1 root root 4096 Jul 11 05:33 iflink
-r--r--r-- 1 root root 4096 Jul 11 05:33 link_mode
-rw-r--r-- 1 root root 4096 Jul 11 05:33 mtu
-r--r--r-- 1 root root 4096 Jul 11 05:33 operstate
-r--r--r-- 1 root root 4096 Jul 11 05:33 owner
drwxr-xr-x 2 root root    0 Jul 11 05:33 power
-r--r--r-- 1 root root 4096 Jul 11 05:33 speed
drwxr-xr-x 2 root root    0 Jul 11 05:33 statistics
lrwxrwxrwx 1 root root    0 Jul 11 05:33 subsystem -&gt; ../../../../class/net
-r--r--r-- 1 root root 4096 Jul 11 05:33 tun_flags
-rw-r--r-- 1 root root 4096 Jul 11 05:33 tx_queue_len
-r--r--r-- 1 root root 4096 Jul 11 05:33 type
-rw-r--r-- 1 root root 4096 Jul 11 05:33 uevent
user1@vm1:~$ sudo ifconfig tap0 10.1.1.1 netmask 255.255.255.0
user1@vm1:~$ sudo ifconfig
eth0      Link encap:Ethernet  HWaddr 08:00:27:d4:45:68
          inet addr:10.0.2.15  Bcast:10.0.2.255  Mask:255.255.255.0
          inet6 addr: fe80::a00:27ff:fed4:4568/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:64040 errors:0 dropped:0 overruns:0 frame:0
          TX packets:44578 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:19663646 (18.7 MiB)  TX bytes:25043918 (23.8 MiB)
 
lo        Link encap:Local Loopback
          inet addr:127.0.0.1  Mask:255.0.0.0
          inet6 addr: ::1/128 Scope:Host
          UP LOOPBACK RUNNING  MTU:16436  Metric:1
          RX packets:76 errors:0 dropped:0 overruns:0 frame:0
          TX packets:76 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0
          RX bytes:6272 (6.1 KiB)  TX bytes:6272 (6.1 KiB)
 
tap0      Link encap:Ethernet  HWaddr ee:d8:2e:f6:bc:f1
          inet addr:10.1.1.1  Bcast:10.1.1.255  Mask:255.255.255.0
          inet6 addr: fe80::ecd8:2eff:fef6:bcf1/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:1 overruns:0 carrier:0
          collisions:0 txqueuelen:500
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
 
user1@vm1:~$ sudo route
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
10.0.2.0        *               255.255.255.0   U     0      0        0 eth0
10.1.1.0        *               255.255.255.0   U     0      0        0 tap0
default         10.0.2.2        0.0.0.0         UG    0      0        0 eth0
user1@vm1:~$ ping 10.1.1.1 -c 2
PING 10.1.1.1 (10.1.1.1) 56(84) bytes of data.
64 bytes from 10.1.1.1: icmp_req=1 ttl=64 time=0.070 ms
64 bytes from 10.1.1.1: icmp_req=2 ttl=64 time=0.027 ms
 
--- 10.1.1.1 ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 1001ms
rtt min/avg/max/mdev = 0.027/0.048/0.070/0.022 ms
user1@vm1:~$ sudo ifconfig tap0 down
user1@vm1:~$ ping 10.1.1.1 -c 2
PING 10.1.1.1 (10.1.1.1) 56(84) bytes of data.
64 bytes from 10.1.1.1: icmp_req=1 ttl=64 time=0.030 ms
64 bytes from 10.1.1.1: icmp_req=2 ttl=64 time=0.024 ms
 
--- 10.1.1.1 ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 999ms
rtt min/avg/max/mdev = 0.024/0.027/0.030/0.003 ms
user1@vm1:~$ sudo ifconfig tap0 up
user1@vm1:~$ sudo ip a a 10.2.2.2/24 brd + dev tap0
user1@vm1:~$ sudo ifconfig
eth0      Link encap:Ethernet  HWaddr 08:00:27:d4:45:68
          inet addr:10.0.2.15  Bcast:10.0.2.255  Mask:255.255.255.0
          inet6 addr: fe80::a00:27ff:fed4:4568/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:64088 errors:0 dropped:0 overruns:0 frame:0
          TX packets:44609 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:19667480 (18.7 MiB)  TX bytes:25049771 (23.8 MiB)
 
lo        Link encap:Local Loopback
          inet addr:127.0.0.1  Mask:255.0.0.0
          inet6 addr: ::1/128 Scope:Host
          UP LOOPBACK RUNNING  MTU:16436  Metric:1
          RX packets:84 errors:0 dropped:0 overruns:0 frame:0
          TX packets:84 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0
          RX bytes:6944 (6.7 KiB)  TX bytes:6944 (6.7 KiB)
 
tap0      Link encap:Ethernet  HWaddr ee:d8:2e:f6:bc:f1
          inet addr:10.1.1.1  Bcast:10.1.1.255  Mask:255.255.255.0
          inet6 addr: fe80::ecd8:2eff:fef6:bcf1/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:9 overruns:0 carrier:0
          collisions:0 txqueuelen:500
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)
user1@vm1:~$ sudo route
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
10.2.2.0        *               255.255.255.0   U     0      0        0 tap0
10.0.2.0        *               255.255.255.0   U     0      0        0 eth0
10.1.1.0        *               255.255.255.0   U     0      0        0 tap0
default         10.0.2.2        0.0.0.0         UG    0      0        0 eth0
user1@vm1:~$ ip a s
1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 16436 qdisc noqueue state UNKNOWN
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: eth0: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc pfifo_fast state UP qlen 1000
    link/ether 08:00:27:d4:45:68 brd ff:ff:ff:ff:ff:ff
    inet 10.0.2.15/24 brd 10.0.2.255 scope global eth0
    inet6 fe80::a00:27ff:fed4:4568/64 scope link
       valid_lft forever preferred_lft forever
12: tap0: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc pfifo_fast state UNKNOWN qlen 500
    link/ether ee:d8:2e:f6:bc:f1 brd ff:ff:ff:ff:ff:ff
    inet 10.1.1.1/24 brd 10.1.1.255 scope global tap0
    inet 10.2.2.2/24 brd 10.2.2.255 scope global tap0
    inet6 fe80::ecd8:2eff:fef6:bcf1/64 scope link
       valid_lft forever preferred_lft forever
user1@vm1:~$ ip r s
10.2.2.0/24 dev tap0  proto kernel  scope link  src 10.2.2.2
10.0.2.0/24 dev eth0  proto kernel  scope link  src 10.0.2.15
10.1.1.0/24 dev tap0  proto kernel  scope link  src 10.1.1.1
default via 10.0.2.2 dev eth0
user1@vm1:~$ ping 10.2.2.2 -c 2
PING 10.2.2.2 (10.2.2.2) 56(84) bytes of data.
64 bytes from 10.2.2.2: icmp_req=1 ttl=64 time=0.081 ms
64 bytes from 10.2.2.2: icmp_req=2 ttl=64 time=0.025 ms
 
--- 10.2.2.2 ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 999ms
rtt min/avg/max/mdev = 0.025/0.053/0.081/0.028 ms
user1@vm1:~$ sudo ip link set dev tap0 down
user1@vm1:~$ ip a s
1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 16436 qdisc noqueue state UNKNOWN
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: eth0: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc pfifo_fast state UP qlen 1000
    link/ether 08:00:27:d4:45:68 brd ff:ff:ff:ff:ff:ff
    inet 10.0.2.15/24 brd 10.0.2.255 scope global eth0
    inet6 fe80::a00:27ff:fed4:4568/64 scope link
       valid_lft forever preferred_lft forever
12: tap0: &lt;BROADCAST,MULTICAST&gt; mtu 1500 qdisc pfifo_fast state DOWN qlen 500
    link/ether ee:d8:2e:f6:bc:f1 brd ff:ff:ff:ff:ff:ff
    inet 10.1.1.1/24 brd 10.1.1.255 scope global tap0
    inet 10.2.2.2/24 brd 10.2.2.255 scope global tap0
user1@vm1:~$ ip r s
10.0.2.0/24 dev eth0  proto kernel  scope link  src 10.0.2.15
default via 10.0.2.2 dev eth0
user1@vm1:~$ ping 10.2.2.2 -c 2
PING 10.2.2.2 (10.2.2.2) 56(84) bytes of data.
64 bytes from 10.2.2.2: icmp_req=1 ttl=64 time=0.037 ms
64 bytes from 10.2.2.2: icmp_req=2 ttl=64 time=0.024 ms
 
--- 10.2.2.2 ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 999ms
rtt min/avg/max/mdev = 0.024/0.030/0.037/0.008 ms
user1@vm1:~$ sudo tunctl -d tap0
Set &#39;tap0&#39; nonpersistent
user1@vm1:~$ ip a s
1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 16436 qdisc noqueue state UNKNOWN
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: eth0: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc pfifo_fast state UP qlen 1000
    link/ether 08:00:27:d4:45:68 brd ff:ff:ff:ff:ff:ff
    inet 10.0.2.15/24 brd 10.0.2.255 scope global eth0
    inet6 fe80::a00:27ff:fed4:4568/64 scope link
       valid_lft forever preferred_lft forever
user1@vm1:~$ ls -al /sys/devices/virtual/net/tap0
ls: cannot access /sys/devices/virtual/net/tap0: No such file or directory
user1@vm1:~$
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br></div></div><h2 id="\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#\u89E3\u91CA" aria-hidden="true">#</a> \u89E3\u91CA</h2><ol><li>\u5B89\u88C5\u4F7F\u7528\u4F2A\uFF08\u865A\u62DF\uFF09\u63A5\u53E3\u7684\u8F6F\u4EF6\u5305\u3002</li><li>\u521B\u5EFA\u4F2A\u63A5\u53E3<code>tap0</code>\u3002</li><li>\u6253\u5370\u4E3A\u6B64\u63A5\u53E3\u521B\u5EFA\u7684\uFF0C\u865A\u62DF\u76EE\u5F55\u7684\u5185\u5BB9\uFF0C\u5176\u4E2D\u5305\u542B\u5176\u8BBE\u7F6E\u548C\u7EDF\u8BA1\u4FE1\u606F\u3002</li><li>\u5C06 IP \u5730\u5740<code>10.1.1.1/24</code>\u6DFB\u52A0\u5230<code>tap0</code>\u3002</li><li>\u6253\u5370\u5F53\u524D\u63A5\u53E3\u72B6\u6001\u3002</li><li>\u6253\u5370\u5F53\u524D\u8DEF\u7531\u8868\u6761\u76EE\u3002\u8BF7\u6CE8\u610F\uFF0CLinux \u81EA\u52A8\u4E3A<code>tap0</code>\u6DFB\u52A0\u65B0\u8DEF\u7531\u3002</li><li>\u901A\u8FC7\u5411\u5176\u53D1\u9001 ICMP \u56DE\u663E\u8BF7\u6C42\u6570\u636E\u5305\u6765\u6D4B\u8BD5<code>tap0</code>\u3002</li><li>\u5C06<code>tap0</code>\u8BBE\u4E3A<code>DOWN</code>\u72B6\u6001\uFF08\u505C\u7528\uFF09\u3002</li><li>\u901A\u8FC7\u518D\u6B21\u53D1\u9001 ICMP \u56DE\u663E\u8BF7\u6C42\u6570\u636E\u5305\u6765\u6D4B\u8BD5<code>tap0</code>\u3002\u4F1A\u6709\u989D\u5916\u7684\u9644\u52A0\u9898\u6765\u89E3\u91CA\u4E3A\u4EC0\u4E48\u8FD9\u4E2A\u4ECD\u7136\u53EF\u4EE5\u5DE5\u4F5C\uFF0C\u5C3D\u7BA1\u5DF2\u7ECF\u505C\u7528\u4E86\u3002</li><li>\u5C06<code>tap0</code>\u8BBE\u4E3A<code>UP</code>\u72B6\u6001\uFF08\u542F\u7528\uFF09\u3002</li><li>\u5411<code>tap0</code>\u6DFB\u52A0\u989D\u5916\u7684IP\u5730\u5740<code>10.2.2.2/24</code>\u3002<code>ip aa</code>\u662F<code>ip addr add</code>\u7684\u7F29\u5199\u7248\u672C\u3002\u8FD9\u4E2A<code>+</code>\u7684\u542B\u4E49\uFF0C\u4F60\u4F1A\u5728\u9644\u52A0\u9898\u4E2D\u81EA\u5DF1\u53D1\u73B0\u5B83\u3002</li><li>\u6253\u5370\u5F53\u524D\u63A5\u53E3\u72B6\u6001\u3002\u6CE8\u610F<code>ifconfig</code>\u65E0\u6CD5\u5217\u51FA\u4F7F\u7528<code>ip</code>\u5DE5\u5177\u6DFB\u52A0\u7684\u65B0 IP \u5730\u5740\u3002\u4E3A\u4EC0\u4E48\uFF1F\u7559\u4F5C\u9644\u52A0\u9898\u3002</li><li>\u6253\u5370\u5F53\u524D\u8DEF\u7531\u8868\u3002\u8BF7\u6CE8\u610F\uFF0CLinux \u81EA\u52A8\u4E3A<code>tap0</code>\u6DFB\u52A0\u4E86\u4E00\u6761\u8DEF\u7531\u3002</li><li>\u4F7F\u7528<code>ip</code>\u5DE5\u5177\u6253\u5370\u5F53\u524D\u63A5\u53E3\u72B6\u6001\u3002\u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u770B\u5230\u65B0\u6DFB\u52A0\u7684\u5730\u5740\u3002</li><li>\u4F7F\u7528<code>ip</code>\u5DE5\u5177\u6253\u5370\u6211\u4EEC\u7684\u8DEF\u7531\u8868\u3002</li><li>\u901A\u8FC7\u5411\u5176\u53D1\u9001 ICMP \u56DE\u663E\u8BF7\u6C42\u62A5\u6587\uFF0C\u6765\u6D4B\u8BD5<code>net tap0</code>\u7684 IP \u5730\u5740\u3002</li><li>\u5C06<code>tap0</code>\u8BBE\u4E3A<code>DOWN</code>\u72B6\u6001\u3002</li><li>\u6253\u5370\u5F53\u524D\u63A5\u53E3\u72B6\u6001\u3002</li><li>\u6253\u5370\u5F53\u524D\u8DEF\u7531\u8868\u6761\u76EE\u3002\u8BF7\u6CE8\u610F\uFF0C<code>tap0</code>\u8DEF\u7531\u5C06\u81EA\u52A8\u5220\u9664\u3002</li><li>\u901A\u8FC7\u5411\u5176\u53D1\u9001 ICMP \u56DE\u663E\u8BF7\u6C42\u62A5\u6587\uFF0C\u6765\u6D4B\u8BD5<code>net tap0</code>\u7684 IP \u5730\u5740\u3002\u8FD9\u4E2A\u6709\u7528\uFF0C\u4E3A\u4EC0\u4E48\uFF1F</li><li>\u5220\u9664\u4F2A\u63A5\u53E3<code>tap0</code>\u3002</li><li>\u6253\u5370\u5F53\u524D\u63A5\u53E3\u72B6\u6001\u3002<code>tap0</code>\u4E0D\u5B58\u5728</li><li>\u544A\u8BC9\u6211\u4EEC\uFF0C<code>tap0</code>\u865A\u62DF\u76EE\u5F55\u73B0\u5728\u4E5F\u6CA1\u6709\u4E86\u3002</li></ol><h2 id="\u9644\u52A0\u9898" tabindex="-1"><a class="header-anchor" href="#\u9644\u52A0\u9898" aria-hidden="true">#</a> \u9644\u52A0\u9898</h2><ul><li>\u719F\u6089<code>man ifconfig</code>\uFF0C<code>man ip</code>\uFF0C<code>man netstat</code>\uFF0C<code>man ss</code>\u3002</li><li>\u5F53<code>tap0</code>\u5904\u4E8E\u5173\u95ED\u72B6\u6001\u65F6\uFF0C\u4E3A\u4EC0\u4E48<code>ping</code>\u6709\u7528\uFF1F</li><li><code>brd +</code>\u7684\u610F\u601D\u662F\u4EC0\u4E48\uFF1F</li><li>\u4E3A\u4EC0\u4E48<code>ifconfig</code>\u65E0\u6CD5\u5217\u51FA\u4F7F\u7528<code>ip</code>\u6DFB\u52A0\u7684\u65B0\u5730\u5740\uFF1F</li></ul>`,38);function Yn(jn,zn){const s=a("ExternalLinkIcon");return l(),d(o,null,[c,n("blockquote",null,[n("p",null,[b,n("a",u,[m,r(s)])])]),n("blockquote",null,[n("p",null,[f,n("a",_,[h,r(s)])])]),n("blockquote",null,[n("p",null,[v,n("a",g,[k,r(s)])])]),n("blockquote",null,[n("p",null,[T,n("a",P,[I,r(s)])])]),N,n("ul",null,[n("li",null,[n("a",S,[A,r(s)]),U]),n("li",null,[n("a",x,[C,r(s)]),w]),n("li",null,[n("a",L,[R,r(s)]),M,E,O]),n("li",null,[n("a",y,[q,r(s)]),B]),n("li",null,[n("a",D,[G,r(s)]),W]),n("li",null,[n("a",X,[K,r(s)]),$,J]),n("li",null,[n("a",H,[F,r(s)]),Q,V]),n("li",null,[n("a",Y,[j,r(s)]),z]),Z,nn,n("li",null,[n("a",en,[sn,r(s)]),rn,tn,an]),n("li",null,[n("a",ln,[dn,r(s)]),on,pn,cn,bn,un]),n("li",null,[n("a",mn,[fn,r(s)]),_n]),n("li",null,[n("a",hn,[vn,r(s)]),gn,kn,Tn]),n("li",null,[n("a",Pn,[In,r(s)]),Nn,Sn,An]),n("li",null,[n("a",Un,[xn,r(s)]),Cn,wn,Ln]),n("li",null,[n("a",Rn,[Mn,r(s)]),En]),n("li",null,[n("a",On,[yn,r(s)]),qn])]),Bn,n("ul",null,[Dn,n("li",null,[Gn,n("a",Wn,[Xn,r(s)]),Kn,$n]),n("li",null,[Jn,n("a",Hn,[Fn,r(s)]),Qn])]),Vn],64)}var ne=t(p,[["render",Yn]]);export{ne as default};
