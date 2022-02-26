import{_ as r,r as l,o as p,c as i,a as s,b as a,F as b,d as n,e as t}from"./app.91d0dc40.js";const c={},o=s("h1",{id:"\u7EC3\u4E60-16-\u5904\u7406\u8FDB\u7A0B-ps-kill",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u7EC3\u4E60-16-\u5904\u7406\u8FDB\u7A0B-ps-kill","aria-hidden":"true"},"#"),n(" \u7EC3\u4E60 16\uFF1A\u5904\u7406\u8FDB\u7A0B\uFF0C"),s("code",null,"ps"),n("\uFF0C"),s("code",null,"kill")],-1),d=n("\u539F\u6587\uFF1A"),u={href:"https://archive.fo/CSqm9",target:"_blank",rel:"noopener noreferrer"},m=n("Exercise 16. Processes: working with proccesses, ps, kill"),h=n("\u8BD1\u8005\uFF1A"),_={href:"https://github.com/wizardforcel",target:"_blank",rel:"noopener noreferrer"},S=n("\u98DE\u9F99"),y=n("\u534F\u8BAE\uFF1A"),g={href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank",rel:"noopener noreferrer"},T=n("CC BY-NC-SA 4.0"),x=n("\u81EA\u8C6A\u5730\u91C7\u7528"),f={href:"https://translate.google.cn/",target:"_blank",rel:"noopener noreferrer"},v=n("\u8C37\u6B4C\u7FFB\u8BD1"),E=t(`<p>\u6700\u7B80\u5355\u7684\u7A0B\u5E8F\u662F\u786C\u76D8\u4E0A\u7684\u6587\u4EF6\uFF0C\u5B83\u5305\u542B\u4E2D\u592E\u5904\u7406\u5668\u6267\u884C\u7684\u6307\u4EE4\u3002\u5F53\u4F60\u542F\u52A8\u5B83\u7684\u65F6\u5019\uFF0C\u5B83\u88AB\u590D\u5236\u5230\u5185\u5B58\uFF0C\u63A7\u5236\u6743\u4F20\u9012\u7ED9\u5B83\u3002\u88AB\u6267\u884C\u7684\u7A0B\u5E8F\u79F0\u4E3A\u8FDB\u7A0B\u3002\u5728\u4F8B\u5982 Linux \u7684\u591A\u4EFB\u52A1\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u542F\u52A8\u7A0B\u5E8F\u7684\u8BB8\u591A\u5B9E\u4F8B\uFF0C\u56E0\u6B64\u53EF\u4EE5\u4ECE\u4E00\u4E2A\u7A0B\u5E8F\u542F\u52A8\u8BB8\u591A\u8FDB\u7A0B\uFF0C\u6240\u6709\u7A0B\u5E8F\u5C06\u540C\u65F6\u8FD0\u884C\uFF08\u6267\u884C\uFF09\u3002</p><p>\u8FD9\u662F\u6267\u884C<code>ls</code>\u65F6\u53D1\u751F\u7684\u4E8B\u60C5\u7684\u6982\u8FF0\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4F60
   \u628A ls \u548C\u5B83\u7684\u53C2\u6570\u8F93\u5165\u5230\u4F60\u7684\u7EC8\u7AEF\u6A21\u62DF\u5668\uFF0C\u7136\u540E\u6309 &lt;ENTER&gt; 
   \u63A7\u5236\u6743\u73B0\u5728\u4F20\u9012\u7ED9 Bash 
Bash 
   \u5728\u4F60\u7684\u786C\u76D8\u4E0A\u67E5\u627E ls 
   \u5C06\u81EA\u8EAB\u6D3E\u751F\u5230 Bash \u514B\u9686\u4F53\uFF0C\u4E5F\u5C31\u662F\u5C06\u81EA\u5DF1\u514B\u9686\u5230\u5185\u5B58\u4E2D\u7684\u65B0\u4F4D\u7F6E
   \u6210\u4E3A Bash \u514B\u9686\u4F53\u7684\u7236\u8FDB\u7A0B
   \u63A7\u5236\u6743\u4F20\u7ED9\u4E86\u4F20\u9012\u7ED9 Bash \u514B\u9686\u4F53
Bash \u514B\u9686\u4F53
   \u6210\u4E3A Bash \u7684\u5B50\u8FDB\u7A0B
   \u4FDD\u5B58 Bash \u7236\u8FDB\u7A0B\u7684\u73AF\u5883
   \u77E5\u9053\u5B83\u662F\u4E00\u4E2A\u514B\u9686\u4F53\u5E76\u4E14\u505A\u51FA\u76F8\u5E94\u7684\u53CD\u5E94
       \u4F7F\u7528 ls \u8986\u76D6\u81EA\u8EAB
       \u63A7\u5236\u6743\u73B0\u5728\u4F20\u9012\u7ED9 ls 
ls 
   \u4E3A\u4F60\u6253\u5370\u4E00\u4E2A\u76EE\u5F55\u5217\u8868\u6216\u8FD4\u56DE\u9519\u8BEF
   \u8FD4\u56DE\u9000\u51FA\u4EE3\u7801
   \u63A7\u5236\u6743\u73B0\u5728\u4F20\u9012\u7ED9 Bash 
Bash 
   \u5C06 ls \u9000\u51FA\u4EE3\u7801\u8D4B\u7ED9 ? \u53D8\u91CF
   \u7B49\u5F85\u4F60\u7684\u8F93\u5165
\u4F60
   \u53EF\u4EE5\u518D\u6B21\u8F93\u5165\u5185\u5BB9
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u4E00\u4E9B\u8FDB\u7A0B\u4E0D\u50CF<code>ls</code>\u90A3\u6837\u4EA4\u4E92\uFF0C\u53EA\u662F\u5728\u540E\u53F0\u9759\u9759\u5730\u5DE5\u4F5C\uFF0C\u5C31\u50CF<code>ssh</code>\u4E00\u6837\u3002\u8FDB\u7A0B\u6709\u8BB8\u591A\u53EF\u80FD\u7684\u72B6\u6001\uFF0C\u5E76\u4E14\u6709\u8BB8\u591A\u64CD\u4F5C\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u4FE1\u53F7\u673A\u5236\u5BF9\u5B83\u4EEC\u6267\u884C\u3002</p><p>\u9996\u5148\u8BA9\u6211\u4EEC\u8C08\u8BBA\u72B6\u6001\u3002\u5982\u679C\u4F60\u952E\u5165<code>ps ax -forest</code>\uFF0C\u5B83\u5C06\u6253\u5370\u51FA\u6240\u6709\u8FDB\u7A0B\uFF0C\u4F60\u4F1A\u5F97\u5230\u8FD9\u6837\u7684\u4E1C\u897F\uFF08\u8DF3\u8FC7\u4E00\u4E9B\u4E0E\u786C\u4EF6\u6709\u5173\u7684\u8FDB\u7A0B\uFF09\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:/etc$ ps --forest ax
  PID TTY      STAT   TIME COMMAND
    1 ?        Ss     0:16 init [2]
  297 ?        S&lt;s    0:00 udevd --daemon
  392 ?        S&lt;     0:00  \\_ udevd --daemon
  399 ?        S&lt;     0:00  \\_ udevd --daemon
  691 ?        Ss     0:00 /sbin/portmap
  703 ?        Ss     0:00 /sbin/rpc.statd
  862 ?        Sl     0:00 /usr/sbin/rsyslogd -c4
  886 ?        Ss     0:00 /usr/sbin/atd
  971 ?        Ss     0:00 /usr/sbin/acpid
  978 ?        Ss     0:01 /usr/sbin/cron
 1177 ?        Ss     0:00 /usr/sbin/sshd
 6671 ?        Ss     0:00  \\_ sshd: user1 [priv]
 6675 ?        S      0:00      \\_ sshd: user1@pts/0
 6676 pts/0    Ss     0:00          \\_ -bash
 7932 pts/0    R+     0:00              \\_ ps --forest ax
 1191 ?        Ss     0:00 /usr/sbin/exim4 -bd -q30m
 1210 tty2     Ss+    0:00 /sbin/getty 38400 tty2
 1211 tty3     Ss+    0:00 /sbin/getty 38400 tty3
 1212 tty4     Ss+    0:00 /sbin/getty 38400 tty4
 1213 tty5     Ss+    0:00 /sbin/getty 38400 tty5
 1214 tty6     Ss+    0:00 /sbin/getty 38400 tty6
 6216 tty1     Ss+    0:00 /sbin/getty 38400 tty1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u8BA9\u6211\u4EEC\u6D4F\u89C8\u8FD9\u4E2A\u5217\u8868\uFF1A</p><p><code>PID</code> - \u8FDB\u7A0B ID\u3002\u6BCF\u4E2A\u8FDB\u7A0B\u90FD\u6709\u4E0E\u4E4B\u76F8\u5173\u8054\u7684\u552F\u4E00\u7F16\u53F7\uFF0C\u7528\u4E8E\u552F\u4E00\u6807\u8BC6\u5B83\u3002\u8FD9\u610F\u5473\u7740\u6CA1\u6709\u4E24\u4E2A\u8FDB\u7A0B\u53EF\u4EE5\u62E5\u6709\u76F8\u540C\u7684 PID\u3002 <code>TTY</code> - \u4E0E\u8FDB\u7A0B\u76F8\u5173\u8054\u7684\u7535\u4F20\u6A21\u62DF\u5668\uFF0C\u5141\u8BB8\u8FDB\u7A0B\u4E0E\u4F60\u4EA4\u6362\u4FE1\u606F\u3002 <code>STAT</code> - \u5F53\u524D\u8FDB\u7A0B\u72B6\u6001\u3002\u8FD9\u5C06\u5728\u4E0B\u9762\u8BE6\u7EC6\u63CF\u8FF0\u3002 <code>TIME</code> - \u8FD9\u662F\u5728 CPU \u4E0A\u6267\u884C\u6B64\u8FDB\u7A0B\u7684\u65F6\u95F4\uFF08\u4EE5\u5206\u949F\u4E3A\u5355\u4F4D\uFF09\u3002 <code>COMMAND</code> - \u8FD9\u662F\u5E26\u6709\u53C2\u6570\u7684\u7A0B\u5E8F\u540D\u79F0\u3002\u8BF7\u6CE8\u610F<code>/usr/sbin/sshd</code>\u662F<code>sshd: user1</code>\u7684\u7236\u8FDB\u7A0B\uFF0C\u800C<code>sshd: user1</code>\u53C8\u662F<code>sshd: user1@pts/0</code>\u7684\u7236\u8FDB\u7A0B\uFF0C\u800C<code>sshd: user1@pts/0</code>\u53C8\u662F<code>bash</code>\u7684\u7236\u8FDB\u7A0B\uFF0C\u800C<code>bash</code>\u53C8\u662F<code>ps \u2013forest ax</code>\u7684\u7236\u8FDB\u7A0B\u3002\u4F60\u9700\u8981\u66F4\u6DF1\u5165\u4E00\u4E9B\uFF01</p><p>\u73B0\u5728\u8BA9\u6211\u4EEC\u8BA8\u8BBA\u53EF\u80FD\u7684\u8FDB\u7A0B\u72B6\u6001\u3002\u4F60\u53EF\u4EE5\u53C2\u8003<code>man ps</code>\u7684 PROCESS STATE CODES\u3002</p><table><thead><tr><th>\u72B6\u6001</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>D</td><td>\u4E0D\u4E2D\u65AD\u7761\u7720\uFF08\u901A\u5E38\u4E3A IO\uFF09\u3002\u8FDB\u7A0B\u7E41\u5FD9\u6216\u6302\u8D77\uFF0C\u4E0D\u54CD\u5E94\u4FE1\u53F7\uFF0C\u4F8B\u5982\u786C\u76D8\u5DF2\u7ECF\u5D29\u6E83\uFF0C\u8BFB\u64CD\u4F5C\u65E0\u6CD5\u5B8C\u6210\u3002</td></tr><tr><td>R</td><td>\u8FD0\u884C\u6216\u53EF\u8FD0\u884C\uFF08\u5728\u8FD0\u884C\u961F\u5217\u4E2D\uFF09\u3002\u8FDB\u7A0B\u6B63\u5728\u6267\u884C\u4E2D\u3002</td></tr><tr><td>S</td><td>\u4E2D\u65AD\u7761\u7720\uFF08\u7B49\u5F85\u4E8B\u4EF6\u5B8C\u6210\uFF09\u3002\u4F8B\u5982\uFF0C\u7EC8\u7AEF\u8FDB\u7A0B\u548C Bash \u901A\u5E38\u5904\u4E8E\u6B64\u72B6\u6001\uFF0C\u7B49\u5F85\u4F60\u952E\u5165\u67D0\u4E9B\u5185\u5BB9\u3002</td></tr><tr><td>T</td><td>\u505C\u6B62\uFF0C\u7531\u4EFB\u52A1\u63A7\u5236\u4FE1\u53F7\u6216\u7531\u4E8E\u88AB\u8FFD\u8E2A\u3002</td></tr><tr><td>W</td><td>\u5206\u9875\uFF08\u4ECE 2.6.xx \u5185\u6838\u8D77\u65E0\u6548\uFF0C\u6240\u4EE5\u4E0D\u7528\u62C5\u5FC3\uFF09\u3002</td></tr><tr><td>X</td><td>\u6B7B\u4EA1\uFF08\u4E0D\u5E94\u8BE5\u770B\u5230\uFF09\u3002</td></tr><tr><td>Z</td><td>\u5DF2\u505C\u6B62\uFF08\u201C\u50F5\u5C38\u201D\uFF09\u8FDB\u7A0B\uFF0C\u5DF2\u7EC8\u6B62\uFF0C\u4F46\u672A\u88AB\u7236\u9879\u6536\u56DE\u3002\u8FD9\u79CD\u60C5\u51B5\u53D1\u751F\u5728\u9519\u8BEF\u7EC8\u6B62\u7684\u8FDB\u7A0B\u4E0A\u3002</td></tr><tr><td>&lt;</td><td>\u9AD8\u4F18\u5148\u7EA7\uFF08\u5BF9\u5176\u4ED6\u7528\u6237\u4E0D\u597D\uFF09</td></tr><tr><td>N</td><td>\u4F4E\u4F18\u5148\u7EA7\uFF08\u5BF9\u5176\u4ED6\u7528\u6237\u5F88\u597D\uFF09</td></tr><tr><td>L</td><td>\u5C06\u9875\u9762\u9501\u5B9A\u5230\u5185\u5B58\u4E2D\uFF08\u7528\u4E8E\u5B9E\u65F6\u548C\u81EA\u5B9A\u4E49 IO\uFF09</td></tr><tr><td>s</td><td>\u662F\u4F1A\u8BDD\u9886\u5BFC\u3002Linux \u4E2D\u7684\u76F8\u5173\u8FDB\u7A0B\u88AB\u89C6\u4E3A\u4E00\u4E2A\u5355\u5143\uFF0C\u5E76\u5177\u6709\u5171\u4EAB\u4F1A\u8BDD ID\uFF08SID\uFF09\u3002\u5982\u679C\u8FDB\u7A0B ID\uFF08PID\uFF09= \u4F1A\u8BDD ID\uFF08SID\uFF09\uFF0C\u5219\u6B64\u8FDB\u7A0B\u5C06\u662F\u4F1A\u8BDD\u9886\u5BFC\u3002</td></tr><tr><td>L</td><td>\u662F\u591A\u7EBF\u7A0B\u7684\uFF08\u4F7F\u7528 CLONE_THREAD\uFF0C\u4F8B\u5982 NPTL pthreads\uFF09</td></tr><tr><td>+</td><td>\u4F4D\u4E8E\u524D\u53F0\u8FDB\u7A0B\u7EC4\u3002\u8FD9\u6837\u7684\u5904\u7406\u5668\u5141\u8BB8\u8F93\u5165\u548C\u8F93\u51FA\u5230\u7535\u4F20\u6A21\u62DF\u5668\uFF0Ctty\u3002</td></tr></tbody></table><p>\u73B0\u5728\u8BA9\u6211\u4EEC\u8BA8\u8BBA\uFF0C\u4E0E\u6240\u6709\u8FD9\u4E9B\u8FDB\u7A0B\u6C9F\u901A\u7684\u65B9\u5F0F\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u53D1\u9001\u4FE1\u53F7\u6765\u5B9E\u73B0\u5B83\u3002\u4FE1\u53F7\u53EF\u80FD\u662F\u4E00\u79CD\u97AD\u7B56\u8FDB\u7A0B\u65B9\u5F0F\uFF0C\u6240\u4EE5\u8FDB\u7A0B\u4F1A\u542C\u4F60\u7684\u8BDD\uFF0C\u5E76\u505A\u51FA\u4F60\u60F3\u8981\u7684\u884C\u4E3A\u3002\u8FD9\u662F\u53EF\u80FD\u7684\u8FDB\u7A0B\u7684\u7F29\u7565\u5217\u8868\uFF0C\u6211\u4ECE<code>man kill</code>\u7684<code>SIGNALS</code>\u90E8\u5206\u83B7\u5F97\uFF1A</p><p>| \u4FE1\u53F7 | \u7F16\u53F7 | \u884C\u4E3A | \u63CF\u8FF0 | | 0 | 0 | N/A | \u9000\u51FA\u4EE3\u7801\u8868\u793A\u662F\u5426\u53EF\u4EE5\u53D1\u9001\u4FE1\u53F7 | | HUP | 1 | \u9000\u51FA | \u63A7\u5236\u7EC8\u7AEF\u6302\u8D77\u6216\u7236\u8FDB\u7A0B\u6B7B\u4EA1 | | INT | 2 | \u9000\u51FA | \u6765\u81EA\u952E\u76D8\u7684\u4E2D\u65AD | | QUIT | 3 | \u5185\u6838 | \u6765\u81EA\u952E\u76D8\u7684\u9000\u51FA | | ILL | 4 | \u5185\u6838 | \u975E\u6CD5\u6307\u4EE4 | | TRAP | 5 | \u5185\u6838 | \u8DDF\u8E2A/\u65AD\u70B9\u6355\u83B7 | | ABRT | 6 | \u5185\u6838 | \u6765\u81EA<code>abort(3)</code>\u7684\u4E2D\u6B62\u4FE1\u53F7 | | FPE | 8 | \u5185\u6838 | \u6D6E\u70B9\u5F02\u5E38 | | KILL | 9 | \u9000\u51FA | \u4E0D\u53EF\u6355\u83B7\uFF0C\u4E0D\u53EF\u5FFD\u89C6\u7684\u6740\u6B7B | | SEGV | 11 | \u5185\u6838 | \u5185\u5B58\u5F15\u7528\u65E0\u6548 | | PIPE | 13 | \u9000\u51FA | \u635F\u574F\u7684\u7BA1\u9053\uFF1A\u5199\u5165\u6CA1\u6709\u8BFB\u8005\u7684\u7BA1\u9053 | | ALRM | 14 | \u9000\u51FA | \u6765\u81EA<code>alarm(2)</code>\u7684\u5B9A\u65F6\u5668\u4FE1\u53F7 | | TERM | 15 | \u9000\u51FA | \u7EC8\u6B62\u8FDB\u7A0B |</p>`,12),k=n("\u540C\u6837\uFF0C\u4E0D\u8981\u56E0\u4E3A\u4E0D\u7406\u89E3\u800C\u5BB3\u6015\uFF0C\u56E0\u4E3A\u73B0\u5728\u4F60\u53EA\u9700\u8981\u4E86\u89E3"),I=s("code",null,"HUP",-1),R=n("\uFF0C"),M=s("code",null,"TERM",-1),N=n("\u548C"),D=s("code",null,"KILL",-1),A=n("\u3002\u751A\u81F3\u6709\u4E00\u9996\u5173\u4E8E"),L=s("code",null,"KILL",-1),$=n("\u4FE1\u53F7\u7684\u6B4C\u66F2 \uFF0C\u547D\u540D\u4E3A"),J={href:"http://www.monzy.com/intro/killdashnine_lyrics.html",target:"_blank",rel:"noopener noreferrer"},P=n("\u300AKill dash nine\u300B"),B=n("\u3002\u53E6\u5916\uFF0C\u6CE8\u610F\u5230"),C=s("code",null,"abort(3)",-1),w=n("\u548C"),O=s("code",null,"alarm(2)",-1),U=n("\u4E86\u4E48\uFF1F\u8FD9\u610F\u5473\u7740\u4F60\u53EF\u4EE5\u901A\u8FC7\u952E\u5165"),q=s("code",null,"man 3 abort",-1),Y=n("\u548C"),V=s("code",null,"man 2 alarm",-1),z=n("\u6765\u9605\u8BFB\u76F8\u5E94\u7684\u624B\u518C\u9875\u3002"),H=t(`<p>\u73B0\u5728\uFF0C\u4F60\u5C06\u5B66\u4E60\u5982\u4F55\u5217\u51FA\u6B63\u5728\u8FD0\u884C\u7684\u8FDB\u7A0B\u5E76\u5411\u5176\u53D1\u9001\u4FE1\u53F7\u3002</p><h2 id="\u8FD9\u6837\u505A" tabindex="-1"><a class="header-anchor" href="#\u8FD9\u6837\u505A" aria-hidden="true">#</a> \u8FD9\u6837\u505A</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> 1: ps x
 2: ps a
 3: ps ax
 4: ps axue --forest
 5: dd if=/dev/zero of=~/test.img bs=1 count=$((1024*1024*1024)) &amp;
 6: kill -s USR1 $!
 7: &lt;ENTER&gt;
 8: kill -s USR1 $!
 9: &lt;ENTER&gt;
10: kill -s TERM $!
11: &lt;ENTER&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u4F60\u4F1A\u770B\u5230\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4F60\u4F1A\u770B\u5230\u4EC0\u4E48" aria-hidden="true">#</a> \u4F60\u4F1A\u770B\u5230\u4EC0\u4E48</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:/etc$ ps x
  PID TTY      STAT   TIME COMMAND
 6675 ?        S      0:00 sshd: user1@pts/0
 6676 pts/0    Ss     0:00 -bash
 8193 pts/0    R+     0:00 ps x
user1@vm1:/etc$ ps a
  PID TTY      STAT   TIME COMMAND
 1210 tty2     Ss+    0:00 /sbin/getty 38400 tty2
 1211 tty3     Ss+    0:00 /sbin/getty 38400 tty3
 1212 tty4     Ss+    0:00 /sbin/getty 38400 tty4
 1213 tty5     Ss+    0:00 /sbin/getty 38400 tty5
 1214 tty6     Ss+    0:00 /sbin/getty 38400 tty6
 6216 tty1     Ss+    0:00 /sbin/getty 38400 tty1
 6676 pts/0    Ss     0:00 -bash
 8194 pts/0    R+     0:00 ps a
user1@vm1:/etc$ ps ax
  PID TTY      STAT   TIME COMMAND
    1 ?        Ss     0:16 init [2]
--- skipped --- skipped --- skipped ---
  691 ?        Ss     0:00 /sbin/portmap
  703 ?        Ss     0:00 /sbin/rpc.statd
  862 ?        Sl     0:00 /usr/sbin/rsyslogd -c4
  886 ?        Ss     0:00 /usr/sbin/atd
  971 ?        Ss     0:00 /usr/sbin/acpid
  978 ?        Ss     0:01 /usr/sbin/cron
 1177 ?        Ss     0:00 /usr/sbin/sshd
 1191 ?        Ss     0:00 /usr/sbin/exim4 -bd -q30m
 1210 tty2     Ss+    0:00 /sbin/getty 38400 tty2
 1211 tty3     Ss+    0:00 /sbin/getty 38400 tty3
 1212 tty4     Ss+    0:00 /sbin/getty 38400 tty4
 1213 tty5     Ss+    0:00 /sbin/getty 38400 tty5
 1214 tty6     Ss+    0:00 /sbin/getty 38400 tty6
 6216 tty1     Ss+    0:00 /sbin/getty 38400 tty1
 6671 ?        Ss     0:00 sshd: user1 [priv]
 6675 ?        S      0:00 sshd: user1@pts/0
 6676 pts/0    Ss     0:00 -bash
 8198 pts/0    R+     0:00 ps ax
user1@vm1:/etc$ ps axue --forest
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
--- skipped --- skipped --- skipped ---
root         1  0.0  0.0   8356   820 ?        Ss   Jun06   0:16 init [2]
root       297  0.0  0.0  16976  1000 ?        S&lt;s  Jun06   0:00 udevd --daemon
root       392  0.0  0.0  16872   840 ?        S&lt;   Jun06   0:00  \\_ udevd --daemon
root       399  0.0  0.0  16872   836 ?        S&lt;   Jun06   0:00  \\_ udevd --daemon
daemon     691  0.0  0.0   8096   532 ?        Ss   Jun06   0:00 /sbin/portmap
statd      703  0.0  0.0  14384   868 ?        Ss   Jun06   0:00 /sbin/rpc.statd
root       862  0.0  0.1  54296  1664 ?        Sl   Jun06   0:00 /usr/sbin/rsyslogd -c4
daemon     886  0.0  0.0  18716   436 ?        Ss   Jun06   0:00 /usr/sbin/atd
root       971  0.0  0.0   3920   644 ?        Ss   Jun06   0:00 /usr/sbin/acpid
root       978  0.0  0.0  22400   880 ?        Ss   Jun06   0:01 /usr/sbin/cron
root      1177  0.0  0.1  49176  1136 ?        Ss   Jun06   0:00 /usr/sbin/sshd
root      6671  0.0  0.3  70496  3284 ?        Ss   Jun26   0:00  \\_ sshd: user1 [priv]
user1     6675  0.0  0.1  70496  1584 ?        S    Jun26   0:00      \\_ sshd: user1@pts/0
user1     6676  0.0  0.6  23644  6536 pts/0    Ss   Jun26   0:00          \\_ -bash LANG=en_US.UTF-8 USER=user1 LOGNAME=user1 HOM
user1     8199  0.0  0.1  16312  1088 pts/0    R+   17:07   0:00              \\_ ps axue --forest TERM=screen-bce SHELL=/bin/bas
101       1191  0.0  0.1  44148  1076 ?        Ss   Jun06   0:00 /usr/sbin/exim4 -bd -q30m
root      1210  0.0  0.0   5932   616 tty2     Ss+  Jun06   0:00 /sbin/getty 38400 tty2
root      1211  0.0  0.0   5932   612 tty3     Ss+  Jun06   0:00 /sbin/getty 38400 tty3
root      1212  0.0  0.0   5932   612 tty4     Ss+  Jun06   0:00 /sbin/getty 38400 tty4
root      1213  0.0  0.0   5932   612 tty5     Ss+  Jun06   0:00 /sbin/getty 38400 tty5
root      1214  0.0  0.0   5932   616 tty6     Ss+  Jun06   0:00 /sbin/getty 38400 tty6
root      6216  0.0  0.0   5932   612 tty1     Ss+  Jun14   0:00 /sbin/getty 38400 tty1
user1@vm1:/etc$ dd if=/dev/zero of=~/test.img bs=1 count=$((1024*1024*1024)) &amp;
[1] 8200
user1@vm1:/etc$ kill -s USR1 $!
user1@vm1:/etc$ 1455424+0 records in
1455424+0 records out
1455424 bytes (1.5 MB) copied, 1.76646 s, 824 kB/s

user1@vm1:/etc$ kill -s USR1 $!
user1@vm1:/etc$ 3263060+0 records in
3263060+0 records out
3263060 bytes (3.3 MB) copied, 3.94237 s, 828 kB/s

user1@vm1:/etc$ kill -s TERM $!
user1@vm1:/etc$
[1]+  Terminated              dd if=/dev/zero of=~/test.img bs=1 count=$((1024*1024*1024))
user1@vm1:/etc$
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br></div></div><h2 id="\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#\u89E3\u91CA" aria-hidden="true">#</a> \u89E3\u91CA</h2><ol><li>\u6253\u5370\u4F60\u62E5\u6709\uFF08\u542F\u52A8\uFF09\u7684\u8FDB\u7A0B\u3002</li><li>\u4EC5\u6253\u5370\u4E0E\u7EC8\u7AEF\uFF08<code>tty</code>\uFF09\u76F8\u5173\u7684\u8FDB\u7A0B\u548C\u4F60\u62E5\u6709\uFF08\u542F\u52A8\uFF09\u7684\u8FDB\u7A0B\u3002</li><li>\u6253\u5370\u6240\u6709\u6B63\u5728\u8FD0\u884C\u7684\u8FDB\u7A0B\u3002</li><li>\u4EE5\u6811\u5F62\u5F0F\u6253\u5370\u6240\u6709\u6B63\u5728\u8FD0\u884C\u7684\u8FDB\u7A0B\uFF0C\u5E76\u5305\u542B\u9644\u52A0\u4FE1\u606F\uFF0C\u4F8B\u5982\u53EF\u7528\u7684\u76F8\u5173\u7528\u6237\u540D\u548C\u73AF\u5883\u3002\u8BF7\u6CE8\u610F\uFF0C\u6B64\u4FE1\u606F\u4EC5\u9002\u7528\u4E8E\u4F60\u62E5\u6709\uFF08\u542F\u52A8\uFF09\u7684\u8FDB\u7A0B\u3002\u4E3A\u4E86\u67E5\u770B\u6240\u6709\u8FDB\u7A0B\u7684\u73AF\u5883\u4FE1\u606F\uFF0C\u8BF7\u8F93\u5165<code>sudo ps axue -forest</code>\u3002</li><li>\u5F00\u59CB\u521B\u5EFA\u4E00\u4E2A\u96F6\u586B\u5145\u6587\u4EF6\uFF08\u586B\u5145\u4E3A\u7A7A\u5B57\u7B26\uFF0C\u73B0\u5728\u4E0D\u8981\u7EA0\u7ED3\uFF09\uFF0C\u5E76\u901A\u8FC7\u5728\u672B\u5C3E\u6307\u5B9A<code>&amp;</code>\u53D1\u9001\u5230\u540E\u53F0\u3002</li><li>\u67E5\u8BE2<code>dd</code>\u7684\u72B6\u6001\u3002</li><li>\u56E0\u4E3A bash \u53EA\u80FD\u6253\u5370\u4E00\u4E9B\u4E1C\u897F\u6765\u56DE\u5E94\u4F60\u7684\u8F93\u5165\uFF0C\u4F60\u9700\u8981\u6309<code>&lt;ENTER&gt;</code>\uFF08\u53D1\u51FA\u7A7A\u6307\u4EE4\uFF09\u3002</li><li>\u518D\u6B21\u67E5\u8BE2<code>dd</code>\u7684\u72B6\u6001\u3002</li><li>\u540C\u6837\uFF0C\u4F60\u9700\u8981\u6309<code>&lt;ENTER&gt;</code>\u6765\u67E5\u770B\u8F93\u51FA\u3002</li><li>\u5411<code>dd</code>\u53D1\u9001\u7EC8\u6B62\u4FE1\u53F7\uFF0C\u6240\u4EE5<code>dd</code>\u9000\u51FA\u4E86\u3002</li><li>\u4E3A\u4E86\u770B\u5230\u5B83\u786E\u5B9E\u53D1\u751F\u4E86\uFF0C\u4F60\u9700\u8981\u518D\u6B21\u6309<code>&lt;ENTER&gt;</code>\u952E \u3002</li></ol><h2 id="\u9644\u52A0\u9898" tabindex="-1"><a class="header-anchor" href="#\u9644\u52A0\u9898" aria-hidden="true">#</a> \u9644\u52A0\u9898</h2>`,8),K=s("li",null,[n("\u9605\u8BFB"),s("code",null,"man ps"),n("\uFF0C"),s("code",null,"man kill"),n("\u3002")],-1),F=n("\u9605\u8BFB"),G={href:"http://www.linux-tutorial.info/modules.php?name=MContent&pageid=84",target:"_blank",rel:"noopener noreferrer"},Z=n("\u8FDB\u7A0B\u7684\u751F\u547D\u5468\u671F"),Q=n("\uFF0C\u5E76\u7814\u7A76\u8FD9\u5F20\u56FE\u7247\uFF1A"),W={href:"http://www.linux-tutorial.info/Linux_Tutorial/The_Operating_System/The_Kernel/Processes/procflowa.gif",target:"_blank",rel:"noopener noreferrer"},X=n("\u8FDB\u7A0B\u7684\u5DE5\u4F5C\u6D41"),j=n("\u3002"),ss=n("\u6253\u5370\u5E76\u586B\u5199"),ns={href:"https://nixsrv.com/llthw/ex16/signals",target:"_blank",rel:"noopener noreferrer"},es=n("\u4FE1\u53F7\u8868"),as=n("\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528 "),ts={href:"http://www.kernel.org/doc/man-pages/online/pages/man7/signal.7.html%23DESCRIPTION",target:"_blank",rel:"noopener noreferrer"},rs=n("kernel.org \u4E2D\u7684\u6587\u6863"),ls=n("\u3002");function ps(is,bs){const e=l("ExternalLinkIcon");return p(),i(b,null,[o,s("blockquote",null,[s("p",null,[d,s("a",u,[m,a(e)])])]),s("blockquote",null,[s("p",null,[h,s("a",_,[S,a(e)])])]),s("blockquote",null,[s("p",null,[y,s("a",g,[T,a(e)])])]),s("blockquote",null,[s("p",null,[x,s("a",f,[v,a(e)])])]),E,s("p",null,[k,I,R,M,N,D,A,L,$,s("a",J,[P,a(e)]),B,C,w,O,U,q,Y,V,z]),H,s("ul",null,[K,s("li",null,[F,s("a",G,[Z,a(e)]),Q,s("a",W,[X,a(e)]),j]),s("li",null,[ss,s("a",ns,[es,a(e)]),as,s("a",ts,[rs,a(e)]),ls])])],64)}var os=r(c,[["render",ps]]);export{os as default};
