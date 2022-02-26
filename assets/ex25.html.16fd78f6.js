import{_ as r,r as t,o as l,c as i,a as e,b as a,F as c,d as n,e as p}from"./app.91d0dc40.js";const o={},b=e("h1",{id:"\u7EC3\u4E60-25-\u7F51\u7EDC-\u914D\u7F6E\u6587\u4EF6-etc-network-interfaces",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u7EC3\u4E60-25-\u7F51\u7EDC-\u914D\u7F6E\u6587\u4EF6-etc-network-interfaces","aria-hidden":"true"},"#"),n(" \u7EC3\u4E60 25\uFF1A\u7F51\u7EDC\uFF1A\u914D\u7F6E\u6587\u4EF6\uFF0C"),e("code",null,"/etc/network/interfaces")],-1),d=n("\u539F\u6587\uFF1A"),f={href:"https://archive.fo/ckUKJ",target:"_blank",rel:"noopener noreferrer"},u=n("Exercise 25. Networking: configuration files, /etc/network/interfaces"),m=n("\u8BD1\u8005\uFF1A"),h={href:"https://github.com/wizardforcel",target:"_blank",rel:"noopener noreferrer"},_=n("\u98DE\u9F99"),v=n("\u534F\u8BAE\uFF1A"),k={href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank",rel:"noopener noreferrer"},g=n("CC BY-NC-SA 4.0"),P=n("\u81EA\u8C6A\u5730\u91C7\u7528"),x={href:"https://translate.google.cn/",target:"_blank",rel:"noopener noreferrer"},U=n("\u8C37\u6B4C\u7FFB\u8BD1"),w=p(`<p>\u4ECE\u547D\u4EE4\u884C\u914D\u7F6E\u7F51\u7EDC\u63A5\u53E3\u662F\u5F88\u597D\u7684\uFF0C\u4F46\u73B0\u5728\u662F\u65F6\u5019\u5B66\u4E60\u5982\u4F55\u8BA9<code>vm1</code>\u81EA\u52A8\u914D\u7F6E\u7F51\u7EDC\u63A5\u53E3\u3002\u4E3A\u6B64\uFF0C\u4F60\u5C06\u4E86\u89E3<code>/etc/network/interfaces</code>\u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:~$ cat /etc/network/interfaces
# This file describes the network interfaces available on your system
# and how to activate them. For more information, see interfaces(5).
 
# The loopback network interface
#(1) (2)
auto lo
#(3)   (4)(5)  (6)
iface lo inet loopback
 
# The primary network interface
#(7)           (8)
allow-hotplug eth0
#(9)   (10) (11) (12)
iface eth0 inet dhcp
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u50CF\u5F80\u5E38\u4E00\u6837\uFF0C\u5B57\u6BB5\u53CA\u5176\u63CF\u8FF0\uFF1A</p><table><thead><tr><th>\u5B57\u6BB5</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>\uFF081\uFF09</td><td>\u81EA\u52A8\u914D\u7F6E\u754C\u9762\u3002</td></tr><tr><td>\uFF082\uFF09</td><td>\u63A5\u53E3\u540D\u79F0\u3002</td></tr><tr><td>\uFF083\uFF09</td><td>\u63A5\u53E3\u914D\u7F6E\u7684\u5F00\u59CB</td></tr><tr><td>\uFF084\uFF09</td><td>\u8981\u914D\u7F6E\u7684\u63A5\u53E3\u540D\u79F0</td></tr><tr><td>\uFF085\uFF09</td><td>\u6B64\u63A5\u53E3\u4F7F\u7528 TCP/IP \u7F51\u7EDC\uFF0CIPv4\u3002</td></tr><tr><td>\uFF086\uFF09</td><td>\u5B83\u662F\u56DE\u9001\u63A5\u53E3\u3002\u9ED8\u8BA4\u56DE\u9001\u5730\u5740\u5C06\u81EA\u52A8\u5206\u914D\u7ED9\u5B83\u3002</td></tr><tr><td>\uFF087\uFF09</td><td>\u5728\u53EF\u7528\u65F6\u81EA\u52A8\u914D\u7F6E\u63A5\u53E3\uFF08\u8BF7\u5728\u8FD9\u91CC\u8003\u8651 usb-modem\uFF09\u3002</td></tr><tr><td>\uFF088\uFF09</td><td>\u63A5\u53E3\u540D\u79F0\u3002</td></tr><tr><td>\uFF089\uFF09</td><td>\u63A5\u53E3\u914D\u7F6E\u7684\u5F00\u59CB</td></tr><tr><td>\uFF0810\uFF09</td><td>\u8981\u914D\u7F6E\u7684\u63A5\u53E3\u540D\u79F0</td></tr><tr><td>\uFF0811\uFF09</td><td>\u6B64\u63A5\u53E3\u4F7F\u7528 TCP/IP \u7F51\u7EDC\uFF0CIPv4\u3002</td></tr><tr><td>\uFF0812\uFF09</td><td>\u6B64\u63A5\u53E3\u901A\u8FC7 DHCP \u81EA\u52A8\u83B7\u53D6\u5176\u53C2\u6570\u3002</td></tr></tbody></table><p>\u5176\u4ED6\u5305\u542B\u7F51\u7EDC\u914D\u7F6E\u7684\u91CD\u8981\u6587\u4EF6\uFF0C\u4F46\u6211\u4EEC\u5728\u8FD9\u91CC\u4E0D\u4F1A\u78B0\u5230\u4ED6\u4EEC\uFF1A</p><ul><li><code>/etc/hosts</code> - \u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u4F7F\u7528\u7684\u8BA1\u7B97\u673A\u6587\u4EF6\uFF0C\u7528\u4E8E\u5C06\u4E3B\u673A\u540D\u6620\u5C04\u5230 IP \u5730\u5740\u3002<code>hosts</code>\u6587\u4EF6\u662F\u4E00\u4E2A\u7EAF\u6587\u672C\u6587\u4EF6\uFF0C\u901A\u5E38\u6309\u7167\u60EF\u4F8B\u547D\u540D\u4E3A<code>hosts</code>\u3002</li><li><code>/etc/hostname</code> - \u5206\u914D\u7ED9\u8FDE\u63A5\u5230\u8BA1\u7B97\u673A\u7F51\u7EDC\u7684\u8BBE\u5907\u7684\u6807\u7B7E\uFF0C\u5E76\u7528\u4E8E\u8BC6\u522B\u5404\u79CD\u5F62\u5F0F\u7684\u7535\u5B50\u901A\u4FE1\u8BBE\u5907\u3002</li><li><code>/etc/resolv.conf</code> - \u5404\u79CD\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u7684\u8BA1\u7B97\u673A\u6587\u4EF6\uFF0C\u7528\u4E8E\u914D\u7F6E\u57DF\u540D\u7CFB\u7EDF\uFF08 DNS\uFF09\u89E3\u6790\u5668\u5E93\u3002\u8BE5\u6587\u4EF6\u662F\u7EAF\u6587\u672C\u6587\u4EF6\uFF0C\u901A\u5E38\u7531\u7F51\u7EDC\u7BA1\u7406\u5458\u6216\u7BA1\u7406\u7CFB\u7EDF\u914D\u7F6E\u4EFB\u52A1\u7684\u5E94\u7528\u521B\u5EFA\u3002<code>resolvconf</code>\u7A0B\u5E8F\u662F linux \u673A\u5668\u4E0A\u7684\u8FD9\u6837\u7684\u7A0B\u5E8F\uFF0C\u5B83\u7BA1\u7406<code>resolv.conf</code>\u6587\u4EF6\u3002</li></ul><p>\u8BA9\u6211\u4EEC\u56DE\u5FC6\u4E4B\u524D\u7EC3\u4E60\u7684<code>tap0</code>\u3002\u5982\u679C\u4F60\u91CD\u65B0\u542F\u52A8<code>vm1</code>\uFF0C \u5B83\u5C31\u4F1A\u6D88\u5931\u3002\u5F53\u7136\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u91CD\u65B0\u8F93\u5165\u76F8\u5173\u547D\u4EE4\u6765\u542F\u7528\u5B83\uFF0C\u4F46\u662F\u8BA9\u6211\u4EEC\u60F3\u8C61\u4E00\u4E0B\uFF0C\u4F60\u9700\u8981\u5728\u91CD\u65B0\u542F\u52A8\u540E\u81EA\u52A8\u4F7F\u7528\u8BE5\u547D\u4EE4\u3002</p><p>\u73B0\u5728\uFF0C\u4F60\u5C06\u5B66\u4E60\u5982\u4F55\u4F7F\u7528<code>/etc/network/interfaces</code>\u6587\u4EF6\u6765\u914D\u7F6E\u63A5\u53E3\u3002</p><h2 id="\u8FD9\u6837\u505A" tabindex="-1"><a class="header-anchor" href="#\u8FD9\u6837\u505A" aria-hidden="true">#</a> \u8FD9\u6837\u505A</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1: ip a s
2: sudo vim /etc/network/interfaces
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u73B0\u5728\u5C06\u8FD9\u4E9B\u4E1C\u897F\u6DFB\u52A0\u5230\u914D\u7F6E\u6587\u4EF6\u672B\u5C3E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> 3: auto tap0
 4: iface tap0 inet static
 5:         address 10.1.1.2
 6:         netmask 255.255.255.0
 7:         tunctl_user uml-net
 8:
 9: allow-hotplug tap1
10: iface tap1 inet static
11:         address 10.1.1.3
12:         netmask 255.255.255.0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u73B0\u5728\u952E\u5165<code>:wq&lt;ENTER&gt;</code>\u5E76\u7EE7\u7EED\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>13: sudo /etc/init.d/networking start
14: ip a s
15: sudo tunctl -t tap1 -u uml-net
16: ip a s
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u4F60\u4F1A\u770B\u5230\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4F60\u4F1A\u770B\u5230\u4EC0\u4E48" aria-hidden="true">#</a> \u4F60\u4F1A\u770B\u5230\u4EC0\u4E48</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:~$ ip a s
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
user1@vm1:~$ sudo vim /etc/network/interfaces
# and how to activate them. For more information, see interfaces(5).
 
# The loopback network interface
auto lo
iface lo inet loopback
 
# The primary network interface
allow-hotplug eth0
iface eth0 inet dhcp
 
auto tap0
iface tap0 inet static
        address 10.2.2.2
        netmask 255.255.255.0
        tunctl_user uml-net
 
allow-hotplug tap1
iface tap1 inet static
        address 10.3.3.3
        netmask 255.255.255.0
~
&quot;/etc/network/interfaces&quot; 21L, 457C written               21,1-8        Bot
user1@vm1:~$ sudo /etc/init.d/networking start
Configuring network interfaces...Set &#39;tap0&#39; persistent and owned by uid 104 done.
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
3: tap0: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc pfifo_fast state UNKNOWN qlen 500
    link/ether 46:63:30:70:b5:21 brd ff:ff:ff:ff:ff:ff
    inet 10.2.2.2/24 brd 10.2.2.255 scope global tap0
    inet6 fe80::4463:30ff:fe70:b521/64 scope link
       valid_lft forever preferred_lft forever
user1@vm1:~$ sudo tunctl -t tap1 -u uml-net
Set &#39;tap1&#39; persistent and owned by uid 104
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
3: tap0: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc pfifo_fast state UNKNOWN qlen 500
    link/ether 46:63:30:70:b5:21 brd ff:ff:ff:ff:ff:ff
    inet 10.2.2.2/24 brd 10.2.2.255 scope global tap0
    inet6 fe80::4463:30ff:fe70:b521/64 scope link
       valid_lft forever preferred_lft forever
4: tap1: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc pfifo_fast state UNKNOWN qlen 500
    link/ether 8a:ed:90:33:93:55 brd ff:ff:ff:ff:ff:ff
    inet 10.3.3.3/24 brd 10.3.3.255 scope global tap1
    inet6 fe80::88ed:90ff:fe33:9355/64 scope link
       valid_lft forever preferred_lft forever
user1@vm1:~$
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br></div></div><h2 id="\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#\u89E3\u91CA" aria-hidden="true">#</a> \u89E3\u91CA</h2><ol><li>\u6253\u5370\u5F53\u524D\u63A5\u53E3\u914D\u7F6E\u3002</li><li>\u7F16\u8F91<code>/etc/network/interfaces</code>\u3002</li><li>\u81EA\u52A8\u914D\u7F6E<code>tap0</code>\u3002</li><li>\u4E3A<code>tap0</code>\u8BBE\u7F6E\u4EE5\u4E0B IPv4 \u9759\u6001\u53C2\u6570\u3002</li><li>\u5C06 IP \u5730\u5740<code>10.2.2.2</code>\u6DFB\u52A0\u7ED9<code>tap0</code>\u3002</li><li>\u4E3A\u6B64 IP \u5730\u5740\u6307\u5B9A\u7F51\u7EDC\u63A9\u7801\u3001\u53C2\u6570\u201C\u5E7F\u64AD\u201D\u548C\u201C\u7F51\u7EDC\u201D\u81EA\u52A8 \u4ECE\u8FD9\u4E2A\u7F51\u7EDC\u63A9\u7801\u5BFC\u51FA\u3002</li><li>\u6307\u5B9A\u62E5\u6709<code>tap0</code>\u63A5\u53E3\u7684\u7528\u6237\u3002</li><li>\u7531\u4E8E\u53EF\u8BFB\u6027\u7684\u7A7A\u884C\u3002</li><li>\u5728<code>tap1</code>\u63A5\u53E3\u51FA\u73B0\u5728\u7CFB\u7EDF\u4E2D\u65F6\uFF0C\u6DFB\u52A0\u4EE5\u4E0B\u53C2\u6570\u3002</li><li>\u4E3A<code>tap1</code>\u8BBE\u7F6E\u4EE5\u4E0B IPv4 \u9759\u6001\u53C2\u6570\u3002</li><li>\u5C06 IP \u5730\u5740<code>10.3.3.3</code>\u6DFB\u52A0\u7ED9tap1\u3002</li><li>\u4E3A\u6B64 IP \u5730\u5740\u6307\u5B9A\u7F51\u7EDC\u63A9\u7801\u3002</li><li>\u5E94\u7528\u7F51\u7EDC\u914D\u7F6E\u66F4\u6539\u3002</li><li>\u6253\u5370\u5F53\u524D\u63A5\u53E3\u914D\u7F6E\u3002\u4F60\u53EF\u4EE5\u770B\u5230<code>tap0</code>\u88AB\u6DFB\u52A0\u5230\u63A5\u53E3\u5217\u8868\u4E2D\u3002</li><li>\u6DFB\u52A0<code>tap1</code>\u4F2A\u63A5\u53E3\u3002</li><li>\u6253\u5370\u5F53\u524D\u63A5\u53E3\u914D\u7F6E\u3002\u4F60\u53EF\u4EE5\u770B\u5230\`/etc/network/interfaces\u4E2D\u6307\u5B9A\u7684\u53C2\u6570\u81EA\u52A8\u5E94\u7528\u4E8E\u5B83\u3002</li></ol><h2 id="\u9644\u52A0\u9898" tabindex="-1"><a class="header-anchor" href="#\u9644\u52A0\u9898" aria-hidden="true">#</a> \u9644\u52A0\u9898</h2><ul><li>\u8BF4\u660E\u5982\u4F55\u5BFC\u51FA\u201C\u7F51\u7EDC\u201D\u548C\u201C\u5E7F\u64AD\u201D\u53C2\u6570\u3002</li><li>\u5C1D\u8BD5\u8FD9\u4E2A\uFF1A<code>ping kitty</code>\u3002\u9884\u671F\u4F1A\u5931\u8D25\u3002\u73B0\u5728\u6DFB\u52A0\u4E00\u4E2A\u6761\u76EE\u5230<code>/etc/hosts</code>\uFF0C\u4EE5\u4FBF\u4F60\u80FD\u591F\u6210\u529F\u6267\u884C<code>ping</code>\u3002</li></ul>`,20);function O(T,N){const s=t("ExternalLinkIcon");return l(),i(c,null,[b,e("blockquote",null,[e("p",null,[d,e("a",f,[u,a(s)])])]),e("blockquote",null,[e("p",null,[m,e("a",h,[_,a(s)])])]),e("blockquote",null,[e("p",null,[v,e("a",k,[g,a(s)])])]),e("blockquote",null,[e("p",null,[P,e("a",x,[U,a(s)])])]),w],64)}var C=r(o,[["render",O]]);export{C as default};
