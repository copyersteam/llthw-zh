import{_ as a,r as l,o,c as t,a as n,b as e,F as i,d as s,e as c}from"./app.91d0dc40.js";const p={},b=n("h1",{id:"\u7EC3\u4E60-15-\u7CFB\u7EDF\u542F\u52A8-\u8FD0\u884C\u7EA7\u522B-etc-init-d-rcconf-update-rc-d",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7EC3\u4E60-15-\u7CFB\u7EDF\u542F\u52A8-\u8FD0\u884C\u7EA7\u522B-etc-init-d-rcconf-update-rc-d","aria-hidden":"true"},"#"),s(" \u7EC3\u4E60 15\uFF1A\u7CFB\u7EDF\u542F\u52A8\uFF1A\u8FD0\u884C\u7EA7\u522B\uFF0C"),n("code",null,"/etc/init.d"),s("\uFF0C"),n("code",null,"rcconf"),s("\uFF0C"),n("code",null,"update-rc.d")],-1),u=s("\u539F\u6587\uFF1A"),d={href:"https://archive.fo/kQr60",target:"_blank",rel:"noopener noreferrer"},m=s("Exercise 15. System boot: runlevels, /etc/init.d, rcconf, update-rc.d"),x=s("\u8BD1\u8005\uFF1A"),g={href:"https://github.com/wizardforcel",target:"_blank",rel:"noopener noreferrer"},w=s("\u98DE\u9F99"),h=s("\u534F\u8BAE\uFF1A"),f={href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank",rel:"noopener noreferrer"},S=s("CC BY-NC-SA 4.0"),v=s("\u81EA\u8C6A\u5730\u91C7\u7528"),_={href:"https://translate.google.cn/",target:"_blank",rel:"noopener noreferrer"},J=s("\u8C37\u6B4C\u7FFB\u8BD1"),y=c(`<p>\u9996\u5148\u6211\u4F1A\u7ED9\u51FA\u4E00\u4E2A\u5178\u578B\u7684\u7CFB\u7EDF\u542F\u52A8\u8FC7\u7A0B\u7684\u6982\u8FF0\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4F60
    \u6309\u7535\u6E90\u5F00\u5173\uFF08\u6216\u542F\u52A8\u865A\u62DF\u673A\uFF09
    \u73B0\u5728\u8BA1\u7B97\u673A\u83B7\u5F97\u63A7\u5236\u6743
    \u63A7\u5236\u6743\u4F20\u7ED9\u4E86 BIOS
BIOS
    \u6267\u884C\u786C\u4EF6\u7279\u5B9A\u7684\u4EFB\u52A1
    \u6267\u884C\u5F00\u673A\u81EA\u68C0\uFF08POST\uFF09\uFF0C\u6D4B\u8BD5\u4F60\u7684\u786C\u4EF6
    \u68C0\u6D4B\u5B89\u88C5\u7684\u786C\u4EF6\uFF0C\u5982\u786C\u76D8\uFF0C\u5185\u5B58\u7C7B\u578B\u548C\u6570\u91CF\uFF0C...
    \u901A\u8FC7\u5C06\u521D\u59CB\u503C\u5199\u5165\u5176\u5185\u5B58\u6765\u521D\u59CB\u5316\u786C\u4EF6
    \u627E\u5230\u4E00\u4E2A\u542F\u52A8\u8BBE\u5907\uFF0C\u901A\u5E38\u662F\u4E00\u4E2A\u786C\u76D8
    \u8BFB\u53D6\u5E76\u6267\u884C\u4F4D\u4E8E\u6B64\u78C1\u76D8\u5F00\u5934\u7684 MBR\uFF08\u4E3B\u5F15\u5BFC\u8BB0\u5F55\uFF09
    \u63A7\u5236\u6743\u73B0\u5728\u4F20\u7ED9\u4E86 MBR
MBR
    MBR \u5BFB\u627E\u5E76\u6267\u884C GRUB\uFF08\u591A\u91CD\u64CD\u4F5C\u7CFB\u7EDF\u542F\u52A8\u7BA1\u7406\u5668\uFF09
    \u63A7\u5236\u6743\u73B0\u5728\u4F20\u7ED9\u4E86 GRUB
GRUB
    \u67E5\u627E\u53EF\u7528\u7684\u6587\u4EF6\u7CFB\u7EDF
    \u67E5\u627E\u5E76\u8BFB\u53D6\u5176\u914D\u7F6E\u6587\u4EF6\uFF0C\u6765\u4E86\u89E3\uFF1A
        \u7CFB\u7EDF\u4F4D\u4E8E\u54EA\u91CC
        \u542F\u52A8\u4EC0\u4E48\u7CFB\u7EDF
        \u6267\u884C\u4EC0\u4E48\u5176\u4ED6\u7684\u64CD\u4F5C
    \u6267\u884C Linux \u5185\u6838\uFF0CLinux \u64CD\u4F5C\u7CFB\u7EDF\u7684\u4E3B\u8981\u90E8\u5206
    \u63A7\u5236\u6743\u73B0\u5728\u4F20\u7ED9\u4E86 Linux \u5185\u6838
Linux \u5185\u6838
    \u67E5\u627E\u5E76\u52A0\u8F7D initrd\uFF0C\u8FD9\u662F\u521D\u59CB\u7684 ram \u78C1\u76D8
        initrd \u5305\u542B\u5FC5\u8981\u9A71\u52A8\u7A0B\u5E8F\uFF0C\u5141\u8BB8\u771F\u5B9E\u6587\u4EF6\u7CFB\u7EDF\u7684\u8BBF\u95EE\u548C\u6302\u8F7D
    \u6302\u8F7D\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u5B83\u5728 GRUB \u914D\u7F6E\u6587\u4EF6\u4E2D\u6307\u5B9A\u3002
    \u6267\u884C\`/sbin/init\`\uFF0C\u4E00\u4E2A\u542F\u52A8\u6240\u6709\u5176\u4ED6\u7A0B\u5E8F\u7684\u7279\u6B8A\u7A0B\u5E8F
    \u63A7\u5236\u6743\u73B0\u5728\u4F20\u7ED9\u4E86 init
init
    \u67E5\u770B\`etc/inittab\`\u6765\u786E\u5B9A\u6240\u9700\u7684\u8FD0\u884C\u7EA7\u522B
    \u52A0\u8F7D\u9002\u5408\u6B64\u8FD0\u884C\u7EA7\u522B\u7684\u6240\u6709\u7A0B\u5E8F
        \u52A0\u8F7D\u6765\u81EA\`/etc/rc.d/rc2.d/\`\u7684\u6240\u6709\u7A0B\u5E8F\uFF0C\u56E0\u4E3A 2 \u662F\u9ED8\u8BA4\u7684 Debian \u8FD0\u884C\u7EA7\u522B
        \u542F\u52A8 SSH \u548C TTY\uFF0C\u4EE5\u4FBF\u4F60\u53EF\u4EE5\u8FDE\u63A5\u5230\u4F60\u7684\u8BA1\u7B97\u673A
    \u542F\u52A8\u73B0\u5728\u5B8C\u6210\u4E86
\u4F60
    \u4F7F\u7528 SSH \u8FDE\u63A5\u5230\u4F60\u7684\u8BA1\u7B97\u673A
    SSH \u5B88\u62A4\u8FDB\u7A0B\u4E3A\u4F60\u6267\u884C bash shell
    \u4F60\u73B0\u5728\u53EF\u4EE5\u8F93\u5165\u4E1C\u897F
    \u4F60\u518D\u6B21\u83B7\u5F97\u63A7\u5236\u6743
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p>\u73B0\u5728\u6211\u4EEC\u53EA\u5BF9\u201Cinit\u201D\u548C\u201C\u8FD0\u884C\u7EA7\u522B\u201D\u9636\u6BB5\u611F\u5174\u8DA3\uFF0C\u6240\u4EE5\u6211\u5C06\u603B\u7ED3\u4E00\u4E0B\uFF0C\u7CFB\u7EDF\u5982\u4F55\u542F\u52A8\u5E76\u81EA\u52A8\u542F\u52A8\u4E00\u4E9B\u7A0B\u5E8F\u3002\u9996\u5148\uFF0C\u6709\u4E00\u4E9B\u672F\u8BED\u200B\u200B\uFF1A</p><ul><li>\u5B88\u62A4\u8FDB\u7A0B - \u4E00\u76F4\u8FD0\u884C\u5728\u540E\u53F0\u7684\u7A0B\u5E8F\u3002\u8FD9\u610F\u5473\u7740\u5B83\u4E0D\u5728\u4E4E\u4F60\u662F\u5426\u767B\u5F55\u7CFB\u7EDF\uFF0C\u901A\u5E38\u4F60\u4E0D\u9700\u8981\u624B\u52A8\u542F\u52A8\u5B83\uFF0C\u56E0\u4E3A\u5B83\u5728\u8BA1\u7B97\u673A\u542F\u52A8\u65F6\u81EA\u52A8\u542F\u52A8\u3002</li><li>\u8FD0\u884C\u7EA7\u522B - \u7CFB\u7EDF\u8FD0\u884C\u6A21\u5F0F\u3002\u57FA\u672C\u4E0A\uFF0C\u8FD9\u53EA\u662F\u4E00\u4E2A\u6570\u5B57\uFF0C\u63D0\u4F9B\u7ED9<code>init</code>\u7A0B\u5E8F\uFF0C\u5B83\u77E5\u9053\u54EA\u4E9B\u5B88\u62A4\u7A0B\u5E8F\u4E0E\u6BCF\u4E2A\u6570\u5B57\u76F8\u5173\u8054\uFF0C\u5E76\u6839\u636E\u9700\u8981\u542F\u52A8\u5E76\u505C\u6B62\u8FD9\u4E9B\u5B88\u62A4\u7A0B\u5E8F\u3002</li></ul><p>\u5728 Debian \u4E2D\u6709\u4EE5\u4E0B\u8FD0\u884C\u7EA7\u522B\uFF1A</p><table><thead><tr><th>ID</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>S</td><td>\u7CFB\u7EDF\u901A\u7535\u540E\u4F1A\u6267\u884C\u5B83</td></tr><tr><td>0</td><td>\u505C\u6B62\uFF0C\u8FD9\u5B9A\u4E49\u4E86\u5F53\u7CFB\u7EDF\u5173\u95ED\u65F6\u6267\u884C\u54EA\u4E9B\u64CD\u4F5C\u3002</td></tr><tr><td>1</td><td>\u5355\u7528\u6237\u6A21\u5F0F\uFF0C\u8FD9\u662F\u4E00\u79CD\u7279\u6B8A\u7684\u6545\u969C\u6392\u9664\u6A21\u5F0F\u3002\u5728\u8FD9\u79CD\u6A21\u5F0F\u4E0B\uFF0C\u5927\u591A\u6570\u5B88\u62A4\u8FDB\u7A0B\u4E0D\u4F1A\u81EA\u52A8\u542F\u52A8\u3002</td></tr><tr><td>2~5</td><td>\u5B8C\u5168\u591A\u7528\u6237\uFF0C\u914D\u7F6E\u7684\u5B88\u62A4\u7A0B\u5E8F\u5728\u6B64\u6A21\u5F0F\u4E0B\u542F\u52A8\u3002</td></tr><tr><td>6</td><td>\u91CD\u542F\uFF0C\u7C7B\u4F3C\u505C\u6B62\uFF0C\u4F46\u4E0D\u662F\u5173\u95ED\u7CFB\u7EDF\u800C\u662F\u91CD\u65B0\u542F\u52A8\u3002</td></tr></tbody></table><p>\u4F46\u662F<code>init</code>\u600E\u4E48\u77E5\u9053\u7684\uFF1F\u597D\u5427\uFF0C\u8FD9\u662F\u7528\u4E8E\u5B83\u7684\u7279\u6B8A\u76EE\u5F55\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:/etc$ find /etc -type d -name &#39;rc*&#39; 2&gt;/dev/null | sort
/etc/rc0.d
/etc/rc1.d
/etc/rc2.d
/etc/rc3.d
/etc/rc4.d
/etc/rc5.d
/etc/rc6.d
/etc/rcS.d
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u4F60\u53EF\u80FD\u80FD\u731C\u5230\uFF0C\u6BCF\u4E2A\u6570\u5B57\u548C<code>S</code>\u5BF9\u5E94\u8868\u4E2D\u7684\u8FD0\u884C\u7EA7\u522B\u3002\u8BA9\u6211\u4EEC\u5217\u51FA\u5176\u4E2D\u4E00\u4E2A\u76EE\u5F55\uFF0C\u5B83\u5728\u6B63\u5E38\u542F\u52A8\u4E2D\u542F\u52A8\u6240\u6709\u6240\u9700\u7684\u5B88\u62A4\u8FDB\u7A0B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:/etc$ ls -al /etc/rc2.d | awk &#39;{printf &quot;%-15.15s %-3.3s %s\\n&quot;,$9,$10,$11}&#39;
.
..
README
S14portmap      -&gt;  ../init.d/portmap
S15nfs-common   -&gt;  ../init.d/nfs-common
S17rsyslog      -&gt;  ../init.d/rsyslog
S17sudo         -&gt;  ../init.d/sudo
S18acpid        -&gt;  ../init.d/acpid
S18atd          -&gt;  ../init.d/atd
S18cron         -&gt;  ../init.d/cron
S18exim4        -&gt;  ../init.d/exim4
S18ssh          -&gt;  ../init.d/ssh
S20bootlogs     -&gt;  ../init.d/bootlogs
S21rc.local     -&gt;  ../init.d/rc.local
S21rmnologin    -&gt;  ../init.d/rmnologin
S21stop-bootlog -&gt;  ../init.d/stop-bootlogd
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u5982\u4F60\u6240\u89C1\uFF0C\u6B64\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6\u53EA\u662F\u5B9E\u9645\u542F\u52A8\u811A\u672C\u7684\u7B26\u53F7\u94FE\u63A5\u3002\u6211\u4EEC\u6765\u770B\u770B\u5176\u4E2D\u4E00\u4E2A\u94FE\u63A5\uFF1A<code>S18ssh\u2192../init.d/ssh</code>\u3002\u8FD9\u662F\u5173\u4E8E\u8FD9\u4E2A\u6587\u4EF6\u7684\u4E8B\u60C5\uFF1A</p><ul><li>\u5B83\u662F\u4E00\u4E2A<code>./init.d/ssh</code>\u6587\u4EF6\u7684\u94FE\u63A5</li><li>\u5B83\u4EE5<code>S</code>\u5F00\u59CB\uFF0C\u610F\u5473\u7740\u201C\u542F\u52A8\u201D\u3002Debian \u542F\u52A8\u7CFB\u7EDF\u4E2D\u4F7F\u7528\u7684\u6BCF\u4E2A\u811A\u672C\u81F3\u5C11\u6709 2 \u4E2A\u53C2\u6570\uFF0C\u201C\u542F\u52A8\u201D\u548C\u201C\u505C\u6B62\u201D\u3002\u73B0\u5728\u6211\u4EEC\u53EF\u4EE5\u8BF4\uFF0C\u5F53\u6211\u4EEC\u7684\u7CFB\u7EDF\u5207\u6362\u5230\u8FD0\u884C\u7EA7\u522B 2 \u65F6\uFF0C\u8BE5\u811A\u672C\u5C06\u4F7F\u7528\u52A8\u4F5C\u201C\u542F\u52A8\u201D\u6765\u6267\u884C \u3002</li><li>\u5B83\u6709\u4E00\u4E2A\u6570\u5B57 18\u3002<code>rc</code>\u76EE\u5F55\u4E2D\u7684\u811A\u672C\u4EE5\u5B57\u5178\u5E8F\u6267\u884C\uFF0C\u6240\u4EE5\u73B0\u5728\u6211\u4EEC\u660E\u767D\uFF0C\u5728\u542F\u52A8<code>ssh</code>\u4E4B\u524D \uFF0C\u7CFB\u7EDF\u542F\u52A8<code>portmap</code>\uFF0C<code>nfs-common</code>\uFF0C<code>rsyslog</code>\u548C<code>sudo</code>\u3002<code>rsyslog</code>\u662F\u4E00\u4E2A\u7CFB\u7EDF\u65E5\u5FD7\u5B88\u62A4\u7A0B\u5E8F\uFF0C\u7279\u522B\u662F<code>ssh</code>\u60F3\u8981\u8BB0\u5F55\u8C01\u5728\u4EC0\u4E48\u65F6\u5019\u8BBF\u95EE\u7CFB\u7EDF\uFF0C\u6240\u4EE5\u5728\u542F\u52A8\u4E4B\u524D\u9700\u8981\u8FD0\u884C<code>rsyslog</code>\u3002</li></ul><p>\u73B0\u5728\uFF0C\u4F60\u5C06\u5B66\u4E60\u5982\u4F55\u5217\u51FA\u542F\u7528\u7684\u670D\u52A1\uFF08\u5B88\u62A4\u7A0B\u5E8F\uFF09\uFF0C\u4EE5\u53CA\u542F\u7528\u548C\u7981\u7528\u670D\u52A1\uFF08\u5B88\u62A4\u7A0B\u5E8F\uFF09\u3002</p><h2 id="\u8FD9\u6837\u505A" tabindex="-1"><a class="header-anchor" href="#\u8FD9\u6837\u505A" aria-hidden="true">#</a> \u8FD9\u6837\u505A</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> 1: sudo aptitude install rcconf
 2: ls -al /etc/rc2.d
 3: sudo rcconf --list
 4: sudo update-rc.d exim4 disable
 5: ls -al /etc/rc2.d
 6: sudo rcconf --list
 7: sudo update-rc.d exim4 enable
 8: ls -al /etc/rc2.d
 9: sudo rcconf --list
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u4F60\u4F1A\u770B\u5230\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4F60\u4F1A\u770B\u5230\u4EC0\u4E48" aria-hidden="true">#</a> \u4F60\u4F1A\u770B\u5230\u4EC0\u4E48</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:/var/log$ sudo aptitude install rcconf
The following NEW packages will be installed:
  rcconf
0 packages upgraded, 1 newly installed, 0 to remove and 0 not upgraded.
Need to get 0 B/23.9 kB of archives. After unpacking 135 kB will be used.
Selecting previously deselected package rcconf.
(Reading database ... 24239 files and directories currently installed.)
Unpacking rcconf (from .../archives/rcconf_2.5_all.deb) ...
Processing triggers for man-db ...
Setting up rcconf (2.5) ...
 
user1@vm1:/etc$ ls -al /etc/rc2.d
total 12
drwxr-xr-x  2 root root 4096 Jun 27 11:42 .
drwxr-xr-x 68 root root 4096 Jun 25 18:43 ..
-rw-r--r--  1 root root  677 Mar 27 05:50 README
lrwxrwxrwx  1 root root   17 Jun  4 11:53 S14portmap -&gt; ../init.d/portmap
lrwxrwxrwx  1 root root   20 Jun  4 11:53 S15nfs-common -&gt; ../init.d/nfs-common
lrwxrwxrwx  1 root root   17 Jun  4 11:53 S17rsyslog -&gt; ../init.d/rsyslog
lrwxrwxrwx  1 root root   14 Jun 15 19:02 S17sudo -&gt; ../init.d/sudo
lrwxrwxrwx  1 root root   15 Jun  4 11:53 S18acpid -&gt; ../init.d/acpid
lrwxrwxrwx  1 root root   13 Jun  4 11:53 S18atd -&gt; ../init.d/atd
lrwxrwxrwx  1 root root   14 Jun  4 11:53 S18cron -&gt; ../init.d/cron
lrwxrwxrwx  1 root root   15 Jun 27 11:42 S18exim4 -&gt; ../init.d/exim4
lrwxrwxrwx  1 root root   13 Jun  4 11:53 S18ssh -&gt; ../init.d/ssh
lrwxrwxrwx  1 root root   18 Jun  4 11:53 S20bootlogs -&gt; ../init.d/bootlogs
lrwxrwxrwx  1 root root   18 Jun  4 11:53 S21rc.local -&gt; ../init.d/rc.local
lrwxrwxrwx  1 root root   19 Jun  4 11:53 S21rmnologin -&gt; ../init.d/rmnologin
lrwxrwxrwx  1 root root   23 Jun  4 11:53 S21stop-bootlogd -&gt; ../init.d/stop-bootlogd
user1@vm1:/etc$ sudo rcconf --list
rsyslog on
ssh on
bootlogs on
portmap on
sudo on
nfs-common on
udev on
console-setup on
kbd on
exim4 on
keyboard-setup on
acpid on
cron on
atd on
procps on
module-init-tools on
user1@vm1:/etc$ sudo update-rc.d exim4 disable
update-rc.d: using dependency based boot sequencing
insserv: warning: current start runlevel(s) (empty) of script \`exim4&#39; overwrites defaults (2 3 4 5).
insserv: warning: current stop runlevel(s) (0 1 2 3 4 5 6) of script \`exim4&#39; overwrites defaults (0 1 6).
user1@vm1:/etc$ ls -al /etc/rc2.d
total 12
drwxr-xr-x  2 root root 4096 Jun 27 11:43 .
drwxr-xr-x 68 root root 4096 Jun 25 18:43 ..
lrwxrwxrwx  1 root root   15 Jun 27 11:43 K01exim4 -&gt; ../init.d/exim4
-rw-r--r--  1 root root  677 Mar 27 05:50 README
lrwxrwxrwx  1 root root   17 Jun  4 11:53 S14portmap -&gt; ../init.d/portmap
lrwxrwxrwx  1 root root   20 Jun  4 11:53 S15nfs-common -&gt; ../init.d/nfs-common
lrwxrwxrwx  1 root root   17 Jun  4 11:53 S17rsyslog -&gt; ../init.d/rsyslog
lrwxrwxrwx  1 root root   14 Jun 15 19:02 S17sudo -&gt; ../init.d/sudo
lrwxrwxrwx  1 root root   15 Jun  4 11:53 S18acpid -&gt; ../init.d/acpid
lrwxrwxrwx  1 root root   13 Jun  4 11:53 S18atd -&gt; ../init.d/atd
lrwxrwxrwx  1 root root   14 Jun  4 11:53 S18cron -&gt; ../init.d/cron
lrwxrwxrwx  1 root root   13 Jun  4 11:53 S18ssh -&gt; ../init.d/ssh
lrwxrwxrwx  1 root root   18 Jun  4 11:53 S20bootlogs -&gt; ../init.d/bootlogs
lrwxrwxrwx  1 root root   18 Jun  4 11:53 S21rc.local -&gt; ../init.d/rc.local
lrwxrwxrwx  1 root root   19 Jun  4 11:53 S21rmnologin -&gt; ../init.d/rmnologin
lrwxrwxrwx  1 root root   23 Jun  4 11:53 S21stop-bootlogd -&gt; ../init.d/stop-bootlogd
user1@vm1:/etc$ sudo rcconf --list
rsyslog on
ssh on
bootlogs on
portmap on
sudo on
nfs-common on
udev on
console-setup on
kbd on
keyboard-setup on
acpid on
cron on
atd on
procps on
module-init-tools on
exim4 off
user1@vm1:/etc$ sudo update-rc.d exim4 enable
update-rc.d: using dependency based boot sequencing
user1@vm1:/etc$ ls -al /etc/rc2.d
total 12
drwxr-xr-x  2 root root 4096 Jun 27 11:43 .
drwxr-xr-x 68 root root 4096 Jun 25 18:43 ..
-rw-r--r--  1 root root  677 Mar 27 05:50 README
lrwxrwxrwx  1 root root   17 Jun  4 11:53 S14portmap -&gt; ../init.d/portmap
lrwxrwxrwx  1 root root   20 Jun  4 11:53 S15nfs-common -&gt; ../init.d/nfs-common
lrwxrwxrwx  1 root root   17 Jun  4 11:53 S17rsyslog -&gt; ../init.d/rsyslog
lrwxrwxrwx  1 root root   14 Jun 15 19:02 S17sudo -&gt; ../init.d/sudo
lrwxrwxrwx  1 root root   15 Jun  4 11:53 S18acpid -&gt; ../init.d/acpid
lrwxrwxrwx  1 root root   13 Jun  4 11:53 S18atd -&gt; ../init.d/atd
lrwxrwxrwx  1 root root   14 Jun  4 11:53 S18cron -&gt; ../init.d/cron
lrwxrwxrwx  1 root root   15 Jun 27 11:43 S18exim4 -&gt; ../init.d/exim4
lrwxrwxrwx  1 root root   13 Jun  4 11:53 S18ssh -&gt; ../init.d/ssh
lrwxrwxrwx  1 root root   18 Jun  4 11:53 S20bootlogs -&gt; ../init.d/bootlogs
lrwxrwxrwx  1 root root   18 Jun  4 11:53 S21rc.local -&gt; ../init.d/rc.local
lrwxrwxrwx  1 root root   19 Jun  4 11:53 S21rmnologin -&gt; ../init.d/rmnologin
lrwxrwxrwx  1 root root   23 Jun  4 11:53 S21stop-bootlogd -&gt; ../init.d/stop-bootlogd
user1@vm1:/etc$ sudo rcconf --list
rsyslog on
ssh on
bootlogs on
portmap on
sudo on
nfs-common on
udev on
console-setup on
kbd on
exim4 on
keyboard-setup on
acpid on
cron on
atd on
procps on
module-init-tools on
user1@vm1:/etc$
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br></div></div><h2 id="\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#\u89E3\u91CA" aria-hidden="true">#</a> \u89E3\u91CA</h2><ol><li>\u5B89\u88C5<code>rcconf</code>\u5305\uFF0C\u8BA9\u4F60\u8F7B\u677E\u7BA1\u7406\u8FD0\u884C\u7EA7\u522B\u3002</li><li>\u6253\u5370\u5305\u542B\u8FD0\u884C\u7EA7\u522B 2 \u7684\u542F\u52A8\u811A\u672C\u7684\u76EE\u5F55\u3002\u73B0\u5728\u542F\u7528\u4E86\u90AE\u4EF6\u670D\u52A1\u5668<code>exim4</code>\u3002</li><li>\u4EC5\u4EC5\u6253\u5370\u51FA\u76F8\u540C\u8FD0\u884C\u7EA7\u522B\u7684\u670D\u52A1\u3002\u8BF7\u6CE8\u610F\uFF0C\u7531\u4E8E\u5B83\u4EEC\u88AB\u89C6\u4E3A\u7CFB\u7EDF\u670D\u52A1\uFF0C\u56E0\u6B64\u5B58\u5728\u591A\u4E2A\u672A\u663E\u793A\u7684\u670D\u52A1\u3002<code>rcconf \u2013list \u2013expert</code>\u4F1A\u628A\u5B83\u4EEC\u5168\u90E8\u5217\u51FA\uFF0C\u4EE5\u53CA\u66F4\u591A\u7684\u9A7B\u7559\u5728\u4E0D\u540C\u7684\u8FD0\u884C\u7EA7\u522B\u4E0A\u7684\u670D\u52A1\u3002</li><li>\u7981\u7528\u90AE\u4EF6\u670D\u52A1\u5668<code>exim4</code>\u7684\u81EA\u52A8\u542F\u52A8\u3002</li><li>\u6253\u5370\u51FA\u5305\u62EC\u8FD0\u884C\u7EA7\u522B 2 \u7684\u542F\u52A8\u811A\u672C\u7684\u76EE\u5F55\u3002<code>exim4</code>\u542F\u52A8\u811A\u672C\u73B0\u5728\u4ECE<code>S18exim4</code>\u91CD\u547D\u540D\u4E3A<code>K01exim4</code>\u3002\u8FD9\u610F\u5473\u7740<code>exim4</code>\u8FDB\u5165\u6B64\u7EA7\u522B\u65F6\u5DF2\u505C\u6B62\uFF08\u88AB\u6740\u6B7B\uFF09\u3002\u5982\u679C<code>exim4</code>\u5F00\u59CB\u6CA1\u6709\u8FD0\u884C\uFF0C\u5C31\u6CA1\u6709\u4EFB\u4F55\u53CD\u5E94\u3002</li><li>\u6253\u5370\u8FD0\u884C\u7EA7\u522B 2 \u7684\u670D\u52A1\u3002\u670D\u52A1<code>exim4</code>\u73B0\u5728\u5DF2\u5173\u95ED\u3002</li><li>\u5F00\u542F<code>exim4</code>\u7684\u81EA\u52A8\u542F\u52A8\u3002</li><li>\u518D\u6B21\u6253\u5370\u5305\u542B\u8FD0\u884C\u7EA7\u522B 2 \u7684\u542F\u52A8\u811A\u672C\u7684\u76EE\u5F55\uFF0C<code>exim4</code>\u518D\u6B21\u542F\u52A8\u3002</li><li>\u6253\u5370\u8FD0\u884C\u7EA7\u522B 2 \u7684\u670D\u52A1\u3002<code>exim4</code>\u7684\u72B6\u6001\u53D8\u66F4\u4E3A\u5DF2\u542F\u52A8\uFF0C\u548C\u9884\u671F\u4E00\u6837\u3002</li></ol><h2 id="\u9644\u52A0\u9898" tabindex="-1"><a class="header-anchor" href="#\u9644\u52A0\u9898" aria-hidden="true">#</a> \u9644\u52A0\u9898</h2>`,20),k=s("\u8BF7\u9605\u8BFB Debian \u542F\u52A8\u8FC7\u7A0B\uFF1A"),B={href:"http://www.debian.org/doc/manuals/debian-reference/ch03.en.html",target:"_blank",rel:"noopener noreferrer"},$=s("http://www.debian.org/doc/manuals/debian-reference/ch03.en.html"),E=n("li",null,[s("\u5C1D\u8BD5\u8FD9\u6837\u505A\uFF1A"),n("code",null,"aptitude install sysv-rc-conf"),s("\uFF0C"),n("code",null,"sysv-rc-conf -list"),s("\u3002\u9605\u8BFB"),n("code",null,"man sysv-rc-conf"),s("\u3002")],-1);function R(M,D){const r=l("ExternalLinkIcon");return o(),t(i,null,[b,n("blockquote",null,[n("p",null,[u,n("a",d,[m,e(r)])])]),n("blockquote",null,[n("p",null,[x,n("a",g,[w,e(r)])])]),n("blockquote",null,[n("p",null,[h,n("a",f,[S,e(r)])])]),n("blockquote",null,[n("p",null,[v,n("a",_,[J,e(r)])])]),y,n("ul",null,[n("li",null,[k,n("a",B,[$,e(r)])]),E])],64)}var N=a(p,[["render",R]]);export{N as default};
