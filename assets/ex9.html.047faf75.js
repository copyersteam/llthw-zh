import{_ as l,r,o as i,c as o,a as n,b as a,F as p,d as s,e as c}from"./app.91d0dc40.js";const b={},t=n("h1",{id:"\u7EC3\u4E60-9-bash-\u4EFB\u52A1\u63A7\u5236-jobs-fg",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7EC3\u4E60-9-bash-\u4EFB\u52A1\u63A7\u5236-jobs-fg","aria-hidden":"true"},"#"),s(" \u7EC3\u4E60 9\uFF1ABash\uFF1A\u4EFB\u52A1\u63A7\u5236\uFF0C"),n("code",null,"jobs"),s("\uFF0C"),n("code",null,"fg")],-1),u=s("\u539F\u6587\uFF1A"),d={href:"https://archive.fo/z1oWk",target:"_blank",rel:"noopener noreferrer"},h=s("Exercise 9. Bash: job control, jobs, fg"),m=s("\u8BD1\u8005\uFF1A"),f={href:"https://github.com/wizardforcel",target:"_blank",rel:"noopener noreferrer"},_=s("\u98DE\u9F99"),g=s("\u534F\u8BAE\uFF1A"),S={href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank",rel:"noopener noreferrer"},x=s("CC BY-NC-SA 4.0"),v=s("\u81EA\u8C6A\u5730\u91C7\u7528"),k={href:"https://translate.google.cn/",target:"_blank",rel:"noopener noreferrer"},O=s("\u8C37\u6B4C\u7FFB\u8BD1"),$=s("Linux\u662F\u4E00\u4E2A"),N={href:"http://en.wikipedia.org/wiki/Computer_multitasking",target:"_blank",rel:"noopener noreferrer"},L=s("\u591A\u4EFB\u52A1"),C=s("\u64CD\u4F5C\u7CFB\u7EDF\u3002\u8FD9\u610F\u5473\u7740\u6709\u8BB8\u591A\u7A0B\u5E8F\u540C\u65F6\u8FD0\u884C\u3002\u4ECE\u7528\u6237\u7684\u89D2\u5EA6\u6765\u770B\uFF0C\u8FD9\u610F\u5473\u7740\u4F60\u53EF\u4EE5\u540C\u65F6\u8FD0\u884C\u51E0\u4E2A\u7A0B\u5E8F\uFF0C\u800C\u4E14 bash \u80AF\u5B9A\u6709\u5DE5\u5177\uFF0C\u4E3A\u4F60\u63A7\u5236\u591A\u4E2A\u4EFB\u52A1\u7684\u6267\u884C\u3002\u4E3A\u4E86\u80FD\u591F\u4F7F\u7528\u6B64\u529F\u80FD\uFF0C\u4F60\u9700\u8981\u5B66\u4E60\u4EE5\u4E0B\u547D\u4EE4\uFF1A"),T=c(`<ul><li><code>&lt;CTRL&gt; + z</code> - \u5C06\u5F53\u524D\u8FD0\u884C\u7684\u7A0B\u5E8F\u653E\u5728\u540E\u53F0\u3002</li><li><code>jobs</code> - \u5217\u51FA\u6240\u6709\u540E\u53F0\u7A0B\u5E8F\u3002</li><li><code>fg</code> - \u628A\u7A0B\u5E8F\u5E26\u5230\u524D\u53F0\u3002<code>fg</code>\u63A5\u53D7\u4E00\u4E2A\u6570\u5B57\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5B83\u53EF\u4EE5\u4ECE<code>jobs</code>\u4E2D\u83B7\u53D6\u6570\uFF0C\u6216\u8005\u5982\u679C\u65E0\u53C2\u6570\u8C03\u7528\uFF0C\u5219\u5C06\u6700\u540E\u4E00\u4E2A\u6302\u8D77\u7684\u7A0B\u5E8F\u5E26\u5230\u524D\u53F0\u3002</li><li><code>ctrl + c</code> - \u4E00\u6B21\u6027\u505C\u6B62\u6267\u884C\u5F53\u524D\u8FD0\u884C\u7684\u7A0B\u5E8F\u3002\u867D\u7136\u6211\u4E0D\u4F1A\u5728\u8FD9\u4E2A\u7EC3\u4E60\u4E2D\u4F7F\u7528\u5B83\uFF0C\u4F46\u6211\u5FC5\u987B\u8BF4\uFF0C\u8FD9\u53EF\u80FD\u662F\u975E\u5E38\u6709\u7528\u7684\u3002</li></ul><p>\u73B0\u5728\uFF0C\u4F60\u5C06\u5B66\u4E60\u5982\u4F55\u4F7F\u7528 bash \u5185\u7F6E\u7684\u5DE5\u5177\u6765\u63A7\u5236\u7A0B\u5E8F\u7684\u6267\u884C\u3002</p><h2 id="\u8FD9\u6837\u505A" tabindex="-1"><a class="header-anchor" href="#\u8FD9\u6837\u505A" aria-hidden="true">#</a> \u8FD9\u6837\u505A</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> 1: less -S .profile
 2: &lt;CTRL+z&gt;
 3: less -S .bashrc
 4: &lt;CTRL+z&gt;
 5: less -S .bash_history
 6: &lt;CTRL+z&gt;
 7: jobs
 8: fg
 9: q
10: fg
11: q
12: fg
13: q
14: fg
15: jobs
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="\u4F60\u4F1A\u770B\u5230\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4F60\u4F1A\u770B\u5230\u4EC0\u4E48" aria-hidden="true">#</a> \u4F60\u4F1A\u770B\u5230\u4EC0\u4E48</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:~$ less -S .profile
# exists.
# see /usr/share/doc/bash/examples/startup-files for
# the files are located in the bash-doc package.
 
# the default umask is set in /etc/profile; for setti
# for ssh logins, install and configure the libpam-um
#umask 022
 
# if running bash
if [ -n &quot;$BASH_VERSION&quot; ]; then
    # include .bashrc if it exists
    if [ -f &quot;$HOME/.bashrc&quot; ]; then
        . &quot;$HOME/.bashrc&quot;
 
[1]+  Stopped                 less -S .profile
user1@vm1:~$ less -S .bashrc
# for examples
 
# If not running interactively, don&#39;t do anything
[ -z &quot;$PS1&quot; ] &amp;&amp; return
 
# don&#39;t put duplicate lines in the history. See bash(
# don&#39;t overwrite GNU Midnight Commander&#39;s setting of
HISTCONTROL=$HISTCONTROL\${HISTCONTROL+:}ignoredups
# ... or force ignoredups and ignorespace
HISTCONTROL=ignoreboth
 
# append to the history file, don&#39;t overwrite it
shopt -s histappend
 
[2]+  Stopped                 less -S .bashrc
user1@vm1:~$ less -S .bash_history
echo Hello, $LOGNAME!
echo &#39;echo Hello, $LOGNAME!&#39; &gt;&gt; .profile
cp .profile .profile.bak
tail .profile
ls -altr
history -w
ls -al
cat .profile
echo Hello, $LOGNAME!
echo &#39;echo Hello, $LOGNAME!&#39; &gt;&gt; .profile
cp .profile .profile.bak
tail .profile
ls -altr
 
[3]+  Stopped                 less -S .bash_history
user1@vm1:~$ jobs
[1]   Stopped                 less -S .profile
[2]-  Stopped                 less -S .bashrc
[3]+  Stopped                 less -S .bash_history
user1@vm1:~$ fg
user1@vm1:~$ fg
user1@vm1:~$ fg
user1@vm1:~$ fg
-bash: fg: current: no such job
user1@vm1:~$ jobs
user1@vm1:~$
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div><h2 id="\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#\u89E3\u91CA" aria-hidden="true">#</a> \u89E3\u91CA</h2><ol><li>\u6253\u5F00<code>.profile</code>\u6765\u67E5\u770B\u3002\u6CE8\u610F\u6211\u5982\u4F55\u4F7F\u7528<code>-S</code>\u53C2\u6570\uFF0C\u8BA9<code>less</code>\u5F00\u542F<code>-chop-long-lines</code>\u9009\u9879\u6765\u542F\u52A8\u3002</li><li>\u6302\u8D77<code>less</code>\u3002</li><li>\u6253\u5F00<code>.bashrc</code>\u6765\u67E5\u770B\u3002</li><li>\u6302\u8D77<code>less</code>\u3002</li><li>\u6253\u5F00<code>.bash_history</code>\u6765\u67E5\u770B\u3002</li><li>\u6302\u8D77<code>less</code>\u3002</li><li>\u6253\u5370\u6302\u8D77\u7A0B\u5E8F\u7684\u5217\u8868\u3002</li><li>\u5207\u6362\u5230<code>less</code>\u3002</li><li>\u9000\u51FA\u5B83\u3002</li><li>\u5207\u6362\u5230\u7B2C\u4E8C\u4E2A<code>less</code>\u3002</li><li>\u9000\u51FA\u5B83\u3002</li><li>\u5207\u6362\u5230\u7B2C\u4E00\u4E2A<code>less</code>\u3002</li><li>\u9000\u51FA\u5B83\u3002</li><li>\u5C1D\u8BD5\u5207\u6362\u5230\u6700\u540E\u4E00\u4E2A\u7A0B\u5E8F\u3002\u6CA1\u6709\u4EFB\u4F55\u7A0B\u5E8F\uFF0C\u4F46\u4F60\u8FD9\u6837\u505A\u662F\u4E3A\u4E86\u786E\u4FDD\u786E\u5B9E\u6CA1\u6709\u3002</li><li>\u6253\u5370\u6302\u8D77\u7A0B\u5E8F\u7684\u5217\u8868\u3002\u8FD9\u662F\u4E3A\u4E86\u786E\u4FDD\u6CA1\u6709\u540E\u53F0\u4EFB\u52A1\uFF0C\u901A\u8FC7\u770B\u5230<code>jobs</code>\u6253\u5370\u51FA\u7A7A\u7684\u8F93\u51FA\u3002</li></ol><h2 id="\u9644\u52A0\u9898" tabindex="-1"><a class="header-anchor" href="#\u9644\u52A0\u9898" aria-hidden="true">#</a> \u9644\u52A0\u9898</h2><p>\u6253\u5F00<code>man bash</code>\uFF0C\u641C\u7D22 JOB CONTROL\uFF0C\u8F93\u5165<code>/, JOB CONTROL, &lt;ENTER&gt;</code>\uFF0C\u5E76\u9605\u8BFB\u5B83\u3002</p>`,10);function q(j,E){const e=r("ExternalLinkIcon");return i(),o(p,null,[t,n("blockquote",null,[n("p",null,[u,n("a",d,[h,a(e)])])]),n("blockquote",null,[n("p",null,[m,n("a",f,[_,a(e)])])]),n("blockquote",null,[n("p",null,[g,n("a",S,[x,a(e)])])]),n("blockquote",null,[n("p",null,[v,n("a",k,[O,a(e)])])]),n("p",null,[$,n("a",N,[L,a(e)]),C]),T],64)}var y=l(b,[["render",q]]);export{y as default};
