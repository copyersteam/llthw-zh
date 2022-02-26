import{_ as l,r,o as i,c as o,a as e,b as a,F as c,d as n,e as p}from"./app.91d0dc40.js";const b={},t=e("h1",{id:"\u7EC3\u4E60-3-bash-shell\u3001-profile\u3001-bashrc\u3001-bash-history\u3002",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u7EC3\u4E60-3-bash-shell\u3001-profile\u3001-bashrc\u3001-bash-history\u3002","aria-hidden":"true"},"#"),n(" \u7EC3\u4E60 3\uFF1ABash\uFF1AShell\u3001"),e("code",null,".profile"),n("\u3001"),e("code",null,".bashrc"),n("\u3001"),e("code",null,".bash_history"),n("\u3002")],-1),u=n("\u539F\u6587\uFF1A"),d={href:"https://archive.fo/DKP67",target:"_blank",rel:"noopener noreferrer"},h=n("Exercise 3. Bash: The shell, .profile, .bashrc, .bash_history"),m=n("\u8BD1\u8005\uFF1A"),f={href:"https://github.com/wizardforcel",target:"_blank",rel:"noopener noreferrer"},_=n("\u98DE\u9F99"),x=n("\u534F\u8BAE\uFF1A"),g={href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank",rel:"noopener noreferrer"},v=n("CC BY-NC-SA 4.0"),$=n("\u81EA\u8C6A\u5730\u91C7\u7528"),k={href:"https://translate.google.cn/",target:"_blank",rel:"noopener noreferrer"},A=n("\u8C37\u6B4C\u7FFB\u8BD1"),L=p(`<p>\u5F53\u4F7F\u7528 CLI\uFF08\u547D\u4EE4\u884C\u754C\u9762\uFF09\u6765\u4F7F\u7528 Linux \u65F6\uFF0C\u4F60\u6B63\u5728\u4E0E\u4E00\u4E2A\u540D\u4E3A shell \u7684\u7A0B\u5E8F\u8FDB\u884C\u4EA4\u4E92\u3002\u6240\u6709\u4F60\u8F93\u5165\u7684\u90FD\u4F20\u9012\u7ED9 shell\uFF0C\u5B83\u89E3\u91CA\u4F60\u8F93\u5165\u7684\u5185\u5BB9\uFF0C\u6267\u884C\u53C2\u6570\u6269\u5C55\uFF08\u8FD9\u6709\u70B9\u7C7B\u4F3C\u4E8E\u4EE3\u6570\u4E2D\u7684\u82B1\u62EC\u53F7\u6269\u5C55\uFF09\uFF0C\u5E76\u4E3A\u4F60\u6267\u884C\u7A0B\u5E8F\u3002\u6211\u4EEC\u5C06\u4F7F\u7528\u7684 Shell \u79F0\u4E3A Bash\uFF0C\u5B83\u4EE3\u8868 Bourne Again Shell\uFF0C\u800C Bourne Again Shell \u53C8\u662F\u4E00\u4E2A\u53CC\u5173\u8BED\u3002\u73B0\u5728\u6211\u5C06\u4F7F\u7528\u7EAF\u4E2D\u6587\uFF0C\u5411\u5927\u5BB6\u4ECB\u7ECD\u4E00\u4E0B bash \u7684\u5DE5\u4F5C\u65B9\u5F0F\uFF1A</p><ul><li>\u4F60 <ul><li>\u767B\u5165 Linux \u865A\u62DF\u673A</li><li>\u4F60\u7684\u8EAB\u4EFD\u7531\u7528\u6237\u540D\uFF08<code>user1</code>\uFF09\u548C\u5BC6\u7801\uFF08<code>123qwe</code>\uFF09\u786E\u5B9A\u3002</li><li>Bash \u6267\u884C\u4E86\u3002</li></ul></li><li>Bash <ul><li>\u4ECE\u4F60\u7684\u914D\u7F6E\u4E2D\u8BFB\u53D6\u5E76\u6267\u884C\u9996\u4E2A\u547D\u4EE4\uFF0C\u5B83\u5B9A\u4E49\u4E86\uFF1A <ul><li>\u547D\u4EE4\u63D0\u793A\u7B26\u662F\u4EC0\u4E48\u6837\u5B50</li><li>\u4F7F\u7528 Linux \u65F6\uFF0C\u4F60\u4F1A\u770B\u5230\u4EC0\u4E48\u989C\u8272</li><li>\u4F60\u7684\u7F16\u8F91\u5668\u662F\u4EC0\u4E48</li><li>\u4F60\u7684\u6D4F\u89C8\u5668\u662F\u4EC0\u4E48</li><li>...</li></ul></li><li>\u8BFB\u53D6\u9996\u4E2A\u547D\u4EE4\u540E\uFF0CBash \u8FDB\u5165\u5FAA\u73AF <ul><li>\u6CA1\u6709\u901A\u8FC7\u8F93\u5165<code>exit</code>\u6216\u8005\u6309\u4E0B<code>&lt;CTRL+D&gt;</code>\uFF0C\u6765\u8981\u6C42\u9000\u51FA\u7684\u65F6\u5019\uFF1A <ul><li>\u8BFB\u53D6\u4E00\u884C</li><li>\u89E3\u6790\u8FD9\u4E00\u884C\uFF0C\u6269\u5C55\u82B1\u62EC\u53F7</li><li>\u4F7F\u7528\u6269\u5C55\u53C2\u6570\u6267\u884C\u547D\u4EE4</li></ul></li></ul></li></ul></li></ul><p>\u6211\u91CD\u590D\u4E00\u4E0B\uFF0C\u4F60\u8F93\u5165\u7684\u4EFB\u4F55\u547D\u4EE4\u90FD\u4E0D\u4F1A\u76F4\u63A5\u6267\u884C\uFF0C\u800C\u662F\u9996\u5148\u6269\u5C55\uFF0C\u7136\u540E\u6267\u884C\u3002\u4F8B\u5982\uFF0C\u5F53\u4F60\u8F93\u5165<code>ls *</code>\u65F6\uFF0C\u661F\u53F7<code>*</code>\u5C06\u6269\u5C55\u4E3A\u5F53\u524D\u76EE\u5F55\u4E2D\u6240\u6709\u6587\u4EF6\u7684\u5217\u8868\u3002</p><p>\u73B0\u5728\u4F60\u5C06\u5B66\u4E60\u5982\u4F55\u4FEE\u6539\u4F60\u7684\u914D\u7F6E\uFF0C\u4EE5\u53CA\u5982\u4F55\u7F16\u5199\u548C\u67E5\u770B\u4F60\u7684\u5386\u53F2\u8BB0\u5F55\u3002</p><h2 id="\u8FD9\u6837\u505A" tabindex="-1"><a class="header-anchor" href="#\u8FD9\u6837\u505A" aria-hidden="true">#</a> \u8FD9\u6837\u505A</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> 1: ls -al
 2: cat .profile
 3: echo Hello, $LOGNAME!
 4: cp -v .profile .profile.bak
 5: echo &#39;echo Hello, $LOGNAME!&#39; &gt;&gt; .profile
 6: tail -n 5 .profile
 7: history -w
 8: ls -altr
 9: cat .bash_history
10: exit
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u4F60\u4F1A\u770B\u5230\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4F60\u4F1A\u770B\u5230\u4EC0\u4E48" aria-hidden="true">#</a> \u4F60\u4F1A\u770B\u5230\u4EC0\u4E48</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1&#39;s password:
Linux vm1 2.6.32-5-amd64 #1 SMP Sun May 6 04:00:17 UTC 2012 x86_64
 
The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.
 
Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
Last login: Thu Jun  7 12:03:29 2012 from sis.site
Hello, user1!
user1@vm1:~$ ls -al
total 20
drwxr-xr-x 2 user1 user1 4096 Jun  7 12:18 .
drwxr-xr-x 3 root  root  4096 Jun  6 21:49 ..
-rw-r--r-- 1 user1 user1  220 Jun  6 21:48 .bash_logout
-rw-r--r-- 1 user1 user1 3184 Jun  6 21:48 .bashrc
-rw-r--r-- 1 user1 user1  697 Jun  7 12:04 .profile
user1@vm1:~$ cat .profile
# ~/.profile: executed by the command interpreter for login shells.
# This file is not read by bash(1), if ~/.bash_profile or ~/.bash_login
# exists.
# see /usr/share/doc/bash/examples/startup-files for examples.
# the files are located in the bash-doc package.
 
# the default umask is set in /etc/profile; for setting the umask
# for ssh logins, install and configure the libpam-umask package.
#umask 022
 
# if running bash
if [ -n &quot;$BASH_VERSION&quot; ]; then
    # include .bashrc if it exists
    if [ -f &quot;$HOME/.bashrc&quot; ]; then
        . &quot;$HOME/.bashrc&quot;
    fi
fi
 
# set PATH so it includes user&#39;s private bin if it exists
if [ -d &quot;$HOME/bin&quot; ] ; then
    PATH=&quot;$HOME/bin:$PATH&quot;
fi
echo Hello, $LOGNAME!
user1@vm1:~$ echo Hello, $LOGNAME!
Hello, user1!
user1@vm1:~$ cp -v .profile .profile.bak
\`.profile&#39; -&gt; \`.profile.bak&#39;
user1@vm1:~$ echo &#39;echo Hello, $LOGNAME!&#39; &gt;&gt; .profile
user1@vm1:~$ tail -n 5 .profile
# set PATH so it includes user&#39;s private bin if it exists
if [ -d &quot;$HOME/bin&quot; ] ; then
    PATH=&quot;$HOME/bin:$PATH&quot;
fi
echo Hello, $LOGNAME!
user1@vm1:~$ history -w
user1@vm1:~$ ls -altr
total 28
-rw-r--r-- 1 user1 user1 3184 Jun  6 21:48 .bashrc
-rw-r--r-- 1 user1 user1  220 Jun  6 21:48 .bash_logout
drwxr-xr-x 3 root  root  4096 Jun  6 21:49 ..
-rw-r--r-- 1 user1 user1  741 Jun  7 12:19 .profile.bak
-rw------- 1 user1 user1  308 Jun  7 12:21 .bash_history
-rw-r--r-- 1 user1 user1  697 Jun  7 12:25 .profile
drwxr-xr-x 2 user1 user1 4096 Jun  7 12:25 .
user1@vm1:~$ cat .bash_history
ls -al
cat .profile
echo Hello, $LOGNAME!
cp -v .profile .profile.bak
echo &#39;echo Hello, $LOGNAME!&#39; &gt;&gt; .profile
tail -n 5 .profile
history -w
ls -altr
user1@vm1:~$ exit
logout
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br></div></div><p>\u4E0D\u8981\u5BB3\u6015\uFF0C\u6240\u6709\u547D\u4EE4\u90FD\u4F1A\u89E3\u91CA\u3002\u884C\u53F7\u5BF9\u5E94\u201C\u73B0\u5728\u8F93\u5165\u5B83\u201D\u7684\u90E8\u5206\u3002</p><h2 id="\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#\u89E3\u91CA" aria-hidden="true">#</a> \u89E3\u91CA</h2><ol><li><p>\u6253\u5370\u5F53\u524D\u76EE\u5F55\u4E2D\u7684\u6240\u6709\u6587\u4EF6\uFF0C\u5305\u62EC\u9690\u85CF\u7684\u6587\u4EF6\u3002\u9009\u9879<code>-al</code>\u544A\u8BC9<code>ls</code> \u4EE5<code>long</code>\u683C\u5F0F\u6253\u5370\u6587\u4EF6\u5217\u8868\uFF0C\u5E76\u5305\u62EC\u6240\u6709\u6587\u4EF6\uFF0C\u5305\u62EC\u9690\u85CF\u6587\u4EF6\u3002<code>.profile</code>\u548C<code>.bash_rc</code>\u662F\u9690\u85CF\u6587\u4EF6\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u4EE5\u70B9<code>.</code>\u5F00\u5934\u3002\u4EE5\u70B9\u5F00\u5934\u7684\u6BCF\u4E2A\u6587\u4EF6\u90FD\u662F\u9690\u85CF\u7684\uFF0C\u8FD9\u5F88\u7B80\u5355\u3002\u8FD9\u4E24\u4E2A\u7279\u6B8A\u6587\u4EF6\u662F shell \u811A\u672C\uFF0C\u5B83\u4EEC\u5305\u542B\u767B\u5F55\u65F6\u6267\u884C\u7684\u6307\u4EE4\u3002</p></li><li><p>\u6253\u5370\u51FA\u4F60\u7684<code>.profile</code>\u6587\u4EF6\u3002\u53EA\u662F\u8FD9\u6837\u3002</p></li><li><p>\u544A\u8BC9\u4F60\u7684 shell\uFF0C\u4F60\u8FD9\u91CC\u662F bash\uFF0C\u8F93\u51FA\u4E00\u4E2A\u5B57\u7B26\u4E32<code>Hello, $LOGNAME!</code>\uFF0C\u7528\u73AF\u5883\u53D8\u91CF\`\`$LOGNAME<code>\u66FF\u6362$LOGNAME</code>\uFF0C\u5B83\u5305\u542B\u4F60\u7684\u767B\u5F55\u540D\u3002</p></li><li><p>\u5C06<code>.profile</code>\u6587\u4EF6\u590D\u5236\u5230<code>.profile.bak</code>\u3002\u9009\u9879<code>-v</code>\u8BA9<code>cp</code>\u8BE6\u7EC6\u8F93\u51FA\uFF0C\u8FD9\u610F\u5473\u7740\u5B83\u4F1A\u6253\u5370\u6240\u6709\u7684\u64CD\u4F5C\u3002\u8BB0\u4F4F\u8FD9\u4E2A\u9009\u9879\uFF0C\u5B83\u901A\u5E38\u7528\u4E8E\u8BA9\u547D\u4EE4\u7ED9\u4F60\u63D0\u4F9B\u6BD4\u9ED8\u8BA4\u66F4\u591A\u7684\u4FE1\u606F\u3002</p></li><li><p>\u5728<code>.bash_rc</code>\u914D\u7F6E\u6587\u4EF6\u4E2D\u6DFB\u52A0\u4E00\u884C\u3002\u4ECE\u73B0\u5728\u5F00\u59CB\uFF0C\u6BCF\u6B21\u767B\u5F55\u5230<code>vm1</code>\u65F6\uFF0C \u90FD\u5C06\u6267\u884C\u8BE5\u547D\u4EE4\u3002\u6CE8\u610F\uFF0C<code>&gt;&gt;</code>\u4EE3\u8868\u5411\u6587\u4EF6\u6DFB\u52A0\u4E86\u4E00\u4E9B\u4E1C\u897F\uFF0C\u4F46<code>&gt;</code>\u610F\u5473\u7740\u4F7F\u7528\u4E00\u4E9B\u4E1C\u897F\u6765\u66FF\u6362\u6587\u4EF6\u3002\u5982\u679C\u4F60\u4E0D\u5C0F\u5FC3\u66FF\u6362\u4E86<code>.profile</code>\u800C\u4E0D\u662F\u5411\u5B83\u6DFB\u52A0\uFF0C\u5219\u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cp -v .profile.bak .profile
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4F1A\u5411\u4F60\u8FD4\u56DE\u65E7\u7684<code>.profile</code>\u6587\u4EF6\u3002</p></li><li><p>\u4ECE<code>.profile</code>\u6587\u4EF6\u4E2D\u7CBE\u786E\u6253\u5370\u51FA\u6700\u540E 5 \u884C\u3002</p></li><li><p>\u5C06\u6240\u6709\u547D\u4EE4\u5386\u53F2\u5199\u5165<code>.bash_history</code>\u6587\u4EF6\u3002\u901A\u5E38\u8FD9\u662F\u5728\u4F1A\u8BDD\u7ED3\u675F\u65F6\u5B8C\u6210\u7684\uFF0C\u5F53\u4F60\u901A\u8FC7\u952E\u5165<code>exit</code>\u6216\u6309<code>&lt;CTRL&gt; + D</code>\u5173\u95ED\u5B83\u3002</p></li><li><p>\u6253\u5370\u5F53\u524D\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6\u3002\u9009\u9879<code>-tr</code>\u8868\u793A\u6587\u4EF6\u5217\u8868\u6309\u65F6\u95F4\u53CD\u5411\u6392\u5E8F\u3002\u8FD9\u610F\u5473\u7740\u6700\u8FD1\u521B\u5EFA\u548C\u4FEE\u6539\u7684\u6587\u4EF6\u6700\u540E\u6253\u5370\u3002\u6CE8\u610F\u4F60\u73B0\u5728\u6709\u4E24\u4E2A\u65B0\u7684\u6587\u4EF6\u3002</p></li><li><p>\u6253\u5370\u51FA\u4FDD\u5B58\u547D\u4EE4\u5386\u53F2\u8BB0\u5F55\u7684\u6587\u4EF6\u3002\u6CE8\u610F\u4F60\u6240\u6709\u7684\u8F93\u5165\u90FD\u5728\u8FD9\u91CC\u3002</p></li><li><p>\u5173\u95ED\u4F1A\u8BDD</p></li></ol><h2 id="\u9644\u52A0\u9898" tabindex="-1"><a class="header-anchor" href="#\u9644\u52A0\u9898" aria-hidden="true">#</a> \u9644\u52A0\u9898</h2><ul><li><p>\u5728\u7EBF\u641C\u7D22\u4E3A\u4EC0\u4E48<code>ls -al</code>\u544A\u8BC9\u4F60\u201C\u603B\u5171 20\u201D\uFF0C\u4F46\u662F\u53EA\u6709 5 \u4E2A\u6587\u4EF6\u5B58\u5728\u3002 \u8FD9\u662F\u4EC0\u4E48\u610F\u601D\uFF1F \u8BF7\u6CE8\u610F\uFF0C<code>.</code>\u548C<code>..</code>\u662F\u7279\u6B8A\u6587\u4EF6\u6761\u76EE\uFF0C\u5206\u522B\u5BF9\u5E94\u4E8E\u5F53\u524D\u76EE\u5F55\u548C\u7236\u76EE\u5F55\u7684\u3002</p></li><li><p>\u767B\u5F55<code>vm1</code>\u5E76\u952E\u5165<code>man -K /etc/profile</code>\uFF0C\u73B0\u5728\u4F7F\u7528\u5149\u6807\u952E\u6EDA\u52A8\u5230<code>INVOCATION</code>\u90E8\u5206\u5E76\u9605\u8BFB\u5B83\u3002 \u8981\u9000\u51FA<code>man</code>\uFF0C\u8BF7\u952E\u5165<code>q</code>\u3002 \u952E\u5165<code>man man</code>\u6765\u627E\u51FA<code>man -K</code>\u9009\u9879\u7684\u542B\u4E49\u3002</p></li><li><p>\u5728\u547D\u4EE4\u4E4B\u524D\u952E\u5165<code>uname</code>\u4E0E\u7A7A\u683C\u3002 \u73B0\u5728\uFF0C\u952E\u5165<code>history</code>\u3002 \u770B\u5230\u4E86\u5417\uFF1F\u5982\u679C\u4F60\u5C06\u7A7A\u683C\u653E\u5230\u547D\u4EE4\u524D\u9762\uFF0C\u5219\u4E0D\u4F1A\u5C06\u5176\u4FDD\u5B58\u5728\u5386\u53F2\u8BB0\u5F55\u4E2D\uFF01\u63D0\u793A\uFF1A\u5F53\u4F60\u9700\u8981\u5728\u547D\u4EE4\u884C\u4E0A\u6307\u5B9A\u5BC6\u7801\u65F6\uFF0C\u5F88\u5B9E\u7528\u3002</p></li><li><p>\u627E\u5230 bash \u7684 wiki \u9875\u9762\uFF0C\u5E76\u5C1D\u8BD5\u9605\u8BFB\u5B83\u3002\u4E0D\u7528\u62C5\u5FC3\uFF0C\u5982\u679C\u5B83\u5413\u5230\u4F60\uFF0C\u53EA\u9700\u8981\u7701\u7565\u53EF\u6015\u7684\u90E8\u5206\u3002</p></li></ul>`,13);function H(w,E){const s=r("ExternalLinkIcon");return i(),o(c,null,[t,e("blockquote",null,[e("p",null,[u,e("a",d,[h,a(s)])])]),e("blockquote",null,[e("p",null,[m,e("a",f,[_,a(s)])])]),e("blockquote",null,[e("p",null,[x,e("a",g,[v,a(s)])])]),e("blockquote",null,[e("p",null,[$,e("a",k,[A,a(s)])])]),L],64)}var O=l(b,[["render",H]]);export{O as default};
