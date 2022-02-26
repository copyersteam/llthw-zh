import{_ as l,r as u,o as p,c as b,a as s,b as r,F as i,d as n,e as a}from"./app.91d0dc40.js";var c="/llthw-zh/assets/8-1.fa733d08.png";const o={},t=s("h1",{id:"\u7EC3\u4E60-8-\u66F4\u591A\u7684\u91CD\u5B9A\u5411\u548C\u8FC7\u6EE4-head-tail-awk-grep-sed",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u7EC3\u4E60-8-\u66F4\u591A\u7684\u91CD\u5B9A\u5411\u548C\u8FC7\u6EE4-head-tail-awk-grep-sed","aria-hidden":"true"},"#"),n(" \u7EC3\u4E60 8\uFF1A\u66F4\u591A\u7684\u91CD\u5B9A\u5411\u548C\u8FC7\u6EE4\uFF1A"),s("code",null,"head"),n("\uFF0C"),s("code",null,"tail"),n("\uFF0C"),s("code",null,"awk"),n("\uFF0C"),s("code",null,"grep"),n("\uFF0C"),s("code",null,"sed")],-1),m=n("\u539F\u6587\uFF1A"),d={href:"https://archive.fo/JH46V",target:"_blank",rel:"noopener noreferrer"},h=n("Exercise 8. Bash: more on redirection and filtering: head, tail, awk, grep, sed"),x=n("\u8BD1\u8005\uFF1A"),_={href:"https://github.com/wizardforcel",target:"_blank",rel:"noopener noreferrer"},w=n("\u98DE\u9F99"),f=n("\u534F\u8BAE\uFF1A"),g={href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank",rel:"noopener noreferrer"},J=n("CC BY-NC-SA 4.0"),v=n("\u81EA\u8C6A\u5730\u91C7\u7528"),k={href:"https://translate.google.cn/",target:"_blank",rel:"noopener noreferrer"},$=n("\u8C37\u6B4C\u7FFB\u8BD1"),y=a('<p>\u73B0\u5728\u4F60\u8BD5\u8FC7\u4E86 Linux\uFF0C\u6211\u4F1A\u4ECB\u7ECD\u4E00\u4E0B Unix \u7684\u65B9\u5F0F\u3002\u6CE8\u610F\u770B\u3002</p><blockquote><p>\u8FD9\u5C31\u662F Unix \u7684\u54F2\u5B66\uFF1A\u5199\u4E00\u4E9B\u7A0B\u5E8F\uFF0C\u53EA\u505A\u4E00\u4EF6\u4E8B\uFF0C\u5E76\u4E14\u628A\u5B83\u505A\u597D\u3002\u7F16\u5199\u7A0B\u5E8F\uFF0C\u4F7F\u5176\u4E00\u8D77\u5DE5\u4F5C\u3002\u7F16\u5199\u7A0B\u5E8F\u6765\u5904\u7406\u6587\u672C\u6D41\uFF0C\u56E0\u4E3A\u8FD9\u662F\u4E00\u4E2A\u901A\u7528\u63A5\u53E3\u3002</p></blockquote><p>\u5B9E\u9645\u4E0A\u8FD9\u610F\u5473\u7740\u4E3A\u4E86\u719F\u7EC3\u4F7F\u7528 Linux\uFF0C\u4F60\u9700\u8981\u77E5\u9053\u5982\u4F55\u4ECE\u4E00\u4E2A\u7A0B\u5E8F\u4E2D\u83B7\u53D6\u8F93\u51FA\uFF0C\u5E76\u5C06\u5176\u63D0\u4F9B\u7ED9\u53E6\u4E00\u4E2A\u7A0B\u5E8F\uFF0C\u901A\u5E38\u4F1A\u5728\u6B64\u8FC7\u7A0B\u4E2D\u4FEE\u6539\u5B83\u3002\u901A\u5E38\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528\u7BA1\u9053\uFF0C\u5C06\u591A\u4E2A\u7A0B\u5E8F\u5408\u5E76\u5728\u4E00\u8D77\uFF0C\u5B83\u5141\u8BB8\u5C06\u4E00\u4E2A\u7A0B\u5E8F\u7684\u8F93\u51FA\u8FDE\u63A5\u5230\u53E6\u4E00\u4E2A\u7A0B\u5E8F\u3002\u50CF\u8FD9\u6837\uFF1A</p><p><img src="'+c+`" alt=""></p><p>\u8FD9\u91CC\u53D1\u751F\u7684\u4E8B\u60C5\u771F\u7684\u5F88\u7B80\u5355\u3002\u51E0\u4E4E\u6BCF\u4E2A Linux \u7A0B\u5E8F\u5728\u542F\u52A8\u65F6\u6253\u5F00\u8FD9\u4E09\u4E2A\u6587\u4EF6\uFF1A</p><p><code>stdin</code> - \u6807\u51C6\u8F93\u5165\u3002\u8FD9\u662F\u7A0B\u5E8F\u8BFB\u53D6\u4E1C\u897F\u7684\u5730\u65B9\u3002 <code>stdout</code> - \u6807\u51C6\u8F93\u51FA\u3002\u8FD9\u662F\u7A0B\u5E8F\u5199\u51FA\u4E1C\u897F\u7684\u5730\u65B9\u3002 <code>stderr</code> - \u6807\u51C6\u9519\u8BEF\u3002\u8FD9\u662F\u7A0B\u5E8F\u62A5\u9519\u7684\u5730\u65B9\u3002</p><p>\u8FD9\u5C31\u662F\u5B83\u7684\u8BFB\u53D6\u65B9\u5F0F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u542F\u52A8\u7A0B\u5E8F 1 
    \u5F00\u59CB\u4ECE\u952E\u76D8\u8BFB\u53D6\u6570\u636E
    \u5F00\u59CB\u5411\u663E\u793A\u5668\u5199\u51FA\u9519\u8BEF
    \u542F\u52A8\u7A0B\u5E8F 2 
        \u5F00\u59CB\u4ECE\u7A0B\u5E8F 1 \u8BFB\u53D6\u8F93\u5165
        \u5F00\u59CB\u5411\u663E\u793A\u5668\u5199\u51FA\u9519\u8BEF
        \u542F\u52A8\u7A0B\u5E8F 3 
            \u5F00\u59CB\u4ECE\u7A0B\u5E8F 2 \u8BFB\u53D6\u8F93\u5165
            \u5F00\u59CB\u5411\u663E\u793A\u5668\u5199\u51FA\u9519\u8BEF
            \u5F00\u59CB\u5411\u663E\u793A\u5668\u5199\u51FA\u6570\u636E
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,8),q=n("\u8FD8\u6709\u53E6\u4E00\u79CD\u65B9\u5F0F\u6765\u63CF\u7ED8\u53D1\u751F\u7684\u4E8B\u60C5\uFF0C\u5982\u679C\u4F60\u559C\u6B22 South Park \u98CE\u683C\u7684\u5E7D\u9ED8\uFF0C\u4F46\u8981\u5C0F\u5FC3\uFF1A\u770B\u5230\u7684\u662F\u4E0D\u4F1A\u662F\u4E0D\u53EF\u89C1\u7684\uFF01"),I={href:"http://osxdaily.com/wp-content/uploads/2011/04/south-park-human-centipad.jpg",target:"_blank",rel:"noopener noreferrer"},B=n("\u8B66\u544A\uFF01\u4F60\u65E0\u6CD5\u5FFD\u7565\u5B83"),C=n("\u3002"),L=a(`<p>\u8BA9\u6211\u4EEC\u8003\u8651\u4EE5\u4E0B\u7BA1\u9053\uFF0C\u5B83\u63A5\u53D7<code>ls -al</code>\u7684\u8F93\u51FA\uFF0C\u4EC5\u6253\u5370\u6587\u4EF6\u540D\u548C\u6587\u4EF6\u4FEE\u6539\u65F6\u95F4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ls -al | tr -s &#39; &#39; | cut -d &#39; &#39; -f 8,9
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8FD9\u662F\u6240\u53D1\u751F\u4E8B\u60C5\u7684\u6982\u8FF0\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u542F\u52A8 ls -al
    \u83B7\u53D6\u5F53\u524D\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6\u5217\u8868
    \u5411\u663E\u793A\u5668\u5199\u51FA\u9519\u8BEF
    \u5411\u7BA1\u9053\u5199\u51FA\u8F93\u51FA
    \u542F\u52A8 tr -s &#39; &#39;
        \u901A\u8FC7\u7BA1\u9053\u4ECE ls -al \u8BFB\u53D6\u8F93\u5165
        \u4E24\u4E2A\u5B57\u6BB5\u4E4B\u95F4\u53EA\u4FDD\u7559\u4E00\u4E2A\u7A7A\u683C
        \u5411\u663E\u793A\u5668\u5199\u51FA\u9519\u8BEF
        \u5411\u7BA1\u9053\u5199\u51FA\u8F93\u51FA
        \u542F\u52A8 cut -d &#39; &#39; -f 8,9
            \u901A\u8FC7\u7BA1\u9053\u4ECE tr -s &#39; &#39; \u8BFB\u53D6\u8F93\u5165
            \u53EA\u4FDD\u7559\u5B57\u6BB5 8 \u548C 9\uFF0C\u6254\u6389\u5176\u5B83\u4E1C\u897F
            \u5411\u663E\u793A\u5668\u5199\u51FA\u9519\u8BEF
            \u5411\u663E\u793A\u5668\u5199\u51FA\u8F93\u51FA
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u66F4\u8BE6\u7EC6\u5730\u8BF4\uFF0C\u8FD9\u662F\u6BCF\u4E00\u6B65\u53D1\u751F\u7684\u4E8B\u60C5\uFF1A</p><p>\u7B2C\u4E00\u6B65\uFF1A<code>ls -al</code>\uFF0C\u6211\u4EEC\u83B7\u53D6\u4E86\u76EE\u5F55\u5217\u8868\uFF0C\u6BCF\u4E00\u5217\u90FD\u53EB\u505A\u5B57\u6BB5\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:~$ ls -al
total 52
drwxr-xr-x 2 user1 user1 4096 Jun 18 14:16 .
drwxr-xr-x 3 root  root  4096 Jun  6 21:49 ..
-rw------- 1 user1 user1 4865 Jun 15 19:34 .bash_history
-rw-r--r-- 1 user1 user1  220 Jun  6 21:48 .bash_logout
-rw-r--r-- 1 user1 user1 3184 Jun 14 12:24 .bashrc
-rw-r--r-- 1 user1 user1   64 Jun 18 14:16 hello.txt
-rw------- 1 user1 user1   89 Jun 18 16:26 .lesshst
-rw-r--r-- 1 user1 user1  634 Jun 15 20:03 ls.out
-rw-r--r-- 1 user1 user1  697 Jun  7 12:25 .profile
-rw-r--r-- 1 user1 user1  741 Jun  7 12:19 .profile.bak
-rw-r--r-- 1 user1 user1  741 Jun  7 13:12 .profile.bak1
-rw------- 1 user1 user1  666 Jun 18 14:16 .viminfo
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u7B2C\u4E8C\u6B65\uFF1A<code>ls -al | tr -s &#39; &#39;</code>\uFF0C\u6211\u4EEC\u5728\u4E24\u4E2A\u5B57\u6BB5\u4E4B\u95F4\u53EA\u4FDD\u7559\uFF0C\u56E0\u4E3A<code>cut</code>\u4E0D\u80FD\u5C06\u591A\u4E2A\u7A7A\u683C\u7406\u89E3\u4E3A\u4E00\u79CD\u65B9\u5F0F\uFF0C\u6765\u5206\u79BB\u591A\u4E2A\u5B57\u6BB5\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:~$ ls -al | tr -s &#39; &#39;
total 52
drwxr-xr-x 2 user1 user1 4096 Jun 18 14:16 .
drwxr-xr-x 3 root root 4096 Jun 6 21:49 ..
-rw------- 1 user1 user1 4865 Jun 15 19:34 .bash_history
-rw-r--r-- 1 user1 user1 220 Jun 6 21:48 .bash_logout
-rw-r--r-- 1 user1 user1 3184 Jun 14 12:24 .bashrc
-rw-r--r-- 1 user1 user1 64 Jun 18 14:16 hello.txt
-rw------- 1 user1 user1 89 Jun 18 16:26 .lesshst
-rw-r--r-- 1 user1 user1 634 Jun 15 20:03 ls.out
-rw-r--r-- 1 user1 user1 697 Jun 7 12:25 .profile
-rw-r--r-- 1 user1 user1 741 Jun 7 12:19 .profile.bak
-rw-r--r-- 1 user1 user1 741 Jun 7 13:12 .profile.bak1
-rw------- 1 user1 user1 666 Jun 18 14:16 .viminfo
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u7B2C\u4E09\u6B65\uFF1A\u6211\u4EEC\u53EA\u4FDD\u7559\u5B57\u6BB5 8 \u548C 9\uFF0C\u5B83\u4EEC\u662F\u6211\u4EEC\u60F3\u8981\u7684\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:~$ ls -al | tr -s &#39; &#39; | cut -d &#39; &#39; -f 8,9
 
14:16 .
21:49 ..
19:34 .bash_history
21:48 .bash_logout
12:24 .bashrc
14:16 hello.txt
16:26 .lesshst
20:03 ls.out
12:25 .profile
12:19 .profile.bak
13:12 .profile.bak1
14:16 .viminfo
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u73B0\u5728\u4F60\u5B66\u5230\u4E86\uFF0C\u5982\u4F55\u4ECE\u4E00\u4E2A\u7A0B\u5E8F\u83B7\u53D6\u8F93\u5165\uFF0C\u5E76\u5C06\u5176\u4F20\u7ED9\u53E6\u4E00\u4E2A\u7A0B\u5E8F\uFF0C\u5E76\u4E14\u5982\u4F55\u8F6C\u6362\u5B83\u3002</p><h2 id="\u8FD9\u6837\u505A" tabindex="-1"><a class="header-anchor" href="#\u8FD9\u6837\u505A" aria-hidden="true">#</a> \u8FD9\u6837\u505A</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> 1: ls -al | head -n 5
 2: ls -al | tail -n 5
 3: ls -al | awk &#39;{print $8, $9}&#39;
 4: ls -al | awk &#39;{print $9, $8}&#39;
 5: ls -al | awk &#39;{printf &quot;%-20.20s %s\\n&quot;,$9, $8}&#39;
 6: ls -al | grep bash
 7: ls -al &gt; ls.out
 8: cat ls.out
 9: cat ls.out | sed  &#39;s/bash/I replace this!!!/g&#39;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u4F60\u4F1A\u770B\u5230\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4F60\u4F1A\u770B\u5230\u4EC0\u4E48" aria-hidden="true">#</a> \u4F60\u4F1A\u770B\u5230\u4EC0\u4E48</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:~$ ls -al | head -n 5
total 52
drwxr-xr-x 2 user1 user1 4096 Jun 18 14:16 .
drwxr-xr-x 3 root  root  4096 Jun  6 21:49 ..
-rw------- 1 user1 user1 4865 Jun 15 19:34 .bash_history
-rw-r--r-- 1 user1 user1  220 Jun  6 21:48 .bash_logout
user1@vm1:~$ ls -al | tail -n 5
-rw-r--r-- 1 user1 user1  636 Jun 18 17:52 ls.out
-rw-r--r-- 1 user1 user1  697 Jun  7 12:25 .profile
-rw-r--r-- 1 user1 user1  741 Jun  7 12:19 .profile.bak
-rw-r--r-- 1 user1 user1  741 Jun  7 13:12 .profile.bak1
-rw------- 1 user1 user1  666 Jun 18 14:16 .viminfo
user1@vm1:~$ ls -al | awk &#39;{print $8, $9}&#39;
 
14:16 .
21:49 ..
19:34 .bash_history
21:48 .bash_logout
12:24 .bashrc
14:16 hello.txt
16:26 .lesshst
17:52 ls.out
12:25 .profile
12:19 .profile.bak
13:12 .profile.bak1
14:16 .viminfo
user1@vm1:~$ ls -al | awk &#39;{print $9, $8}&#39;
 
. 14:16
.. 21:49
.bash_history 19:34
.bash_logout 21:48
.bashrc 12:24
hello.txt 14:16
.lesshst 16:26
ls.out 17:52
.profile 12:25
.profile.bak 12:19
.profile.bak1 13:12
.viminfo 14:16
 
user1@vm1:~$ ls -al | awk &#39;{printf &quot;%-20.20s %s\\n&quot;,$9, $8}&#39;
 
.                    14:16
..                   21:49
.bash_history        19:34
.bash_logout         21:48
.bashrc              12:24
hello.txt            14:16
.lesshst             16:26
ls.out               17:52
.profile             12:25
.profile.bak         12:19
.profile.bak1        13:12
.viminfo             14:16
user1@vm1:~$ ls -al | grep bash
-rw------- 1 user1 user1 4865 Jun 15 19:34 .bash_history
-rw-r--r-- 1 user1 user1  220 Jun  6 21:48 .bash_logout
-rw-r--r-- 1 user1 user1 3184 Jun 14 12:24 .bashrc
user1@vm1:~$ ls -al &gt; ls.out
user1@vm1:~$ cat ls.out
total 48
drwxr-xr-x 2 user1 user1 4096 Jun 18 14:16 .
drwxr-xr-x 3 root  root  4096 Jun  6 21:49 ..
-rw------- 1 user1 user1 4865 Jun 15 19:34 .bash_history
-rw-r--r-- 1 user1 user1  220 Jun  6 21:48 .bash_logout
-rw-r--r-- 1 user1 user1 3184 Jun 14 12:24 .bashrc
-rw-r--r-- 1 user1 user1   64 Jun 18 14:16 hello.txt
-rw------- 1 user1 user1   89 Jun 18 16:26 .lesshst
-rw-r--r-- 1 user1 user1    0 Jun 18 17:53 ls.out
-rw-r--r-- 1 user1 user1  697 Jun  7 12:25 .profile
-rw-r--r-- 1 user1 user1  741 Jun  7 12:19 .profile.bak
-rw-r--r-- 1 user1 user1  741 Jun  7 13:12 .profile.bak1
-rw------- 1 user1 user1  666 Jun 18 14:16 .viminfo
user1@vm1:~$ cat ls.out | sed  &#39;s/bash/I replace this!!!/g&#39;
total 48
drwxr-xr-x 2 user1 user1 4096 Jun 18 14:16 .
drwxr-xr-x 3 root  root  4096 Jun  6 21:49 ..
-rw------- 1 user1 user1 4865 Jun 15 19:34 .I replace this!!!_history
-rw-r--r-- 1 user1 user1  220 Jun  6 21:48 .I replace this!!!_logout
-rw-r--r-- 1 user1 user1 3184 Jun 14 12:24 .I replace this!!!rc
-rw-r--r-- 1 user1 user1   64 Jun 18 14:16 hello.txt
-rw------- 1 user1 user1   89 Jun 18 16:26 .lesshst
-rw-r--r-- 1 user1 user1    0 Jun 18 17:53 ls.out
-rw-r--r-- 1 user1 user1  697 Jun  7 12:25 .profile
-rw-r--r-- 1 user1 user1  741 Jun  7 12:19 .profile.bak
-rw-r--r-- 1 user1 user1  741 Jun  7 13:12 .profile.bak1
-rw------- 1 user1 user1  666 Jun 18 14:16 .viminfo
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br></div></div><h2 id="\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#\u89E3\u91CA" aria-hidden="true">#</a> \u89E3\u91CA</h2><ul><li>\u53EA\u6253\u5370\u76EE\u5F55\u5217\u8868\u4E2D\u7684\u524D 5 \u4E2A\u6761\u76EE\u3002</li><li>\u53EA\u6253\u5370\u76EE\u5F55\u5217\u8868\u4E2D\u7684\u540E 5 \u4E2A\u6761\u76EE\u3002</li><li>\u53EA\u6253\u5370\u4FEE\u6539\u65F6\u95F4\u548C\u6587\u4EF6\u540D\u3002\u6CE8\u610F\u6211\u5982\u4F55\u4F7F\u7528<code>awk</code>\uFF0C\u8FD9\u6BD4<code>cut</code>\u66F4\u806A\u660E\u3002\u8FD9\u91CC\u7684\u533A\u522B\u5C31\u662F\uFF0C<code>cut</code>\u53EA\u80FD\u5C06\u5355\u4E2A\u7B26\u53F7\uFF08\u6211\u4EEC\u8FD9\u91CC\u662F\u7A7A\u683C\uFF09\u7406\u89E3\u4E3A\u4E00\u79CD\u65B9\u5F0F\uFF0C\u6765\u5206\u79BB\u5B57\u6BB5\uFF08\u5B57\u6BB5\u5206\u9694\u7B26\uFF09\uFF0C<code>awk</code>\u5C06\u4EFB\u610F\u6570\u91CF\u7684\u7A7A\u683C\u548C TAB \u770B\u505A\u6587\u4EF6\u5206\u9694\u7B26\uFF0C\u6240\u4EE5\u6CA1\u6709\u5FC5\u8981\u4F7F\u7528<code>tr</code>\u6765\u6D88\u9664\u4E0D\u5FC5\u8981\u7684\u7A7A\u683C\u3002</li><li>\u6309\u6B64\u987A\u5E8F\u6253\u5370\u6587\u4EF6\u540D\u548C\u4FEE\u6539\u65F6\u95F4\u3002\u8FD9\u53C8\u662F<code>cat</code>\u4E0D\u80FD\u505A\u7684\u4E8B\u60C5\u3002</li><li>\u5DE5\u6574\u5730\u6253\u5370\u6587\u4EF6\u540D\u548C\u4FEE\u6539\u65F6\u95F4\u3002\u6CE8\u610F\u73B0\u5728\u8F93\u51FA\u5982\u4F55\u53D8\u5F97\u66F4\u6E05\u6670\u3002</li><li>\u4EC5\u6253\u5370\u76EE\u5F55\u5217\u8868\u4E2D\u5305\u542B<code>bash</code>\u7684\u884C\u3002</li><li>\u5C06\u76EE\u5F55\u5217\u8868\u7684\u8F93\u51FA\u5199\u5165\u6587\u4EF6<code>ls.out</code>\u3002</li><li>\u6253\u5370\u51FA<code>ls.out</code>\u3002<code>cat</code>\u662F\u6700\u7B80\u5355\u7684\u53EF\u7528\u7A0B\u5E8F\uFF0C\u5141\u8BB8\u4F60\u6253\u5370\u51FA\u4E00\u4E2A\u6587\u4EF6\uFF0C\u6CA1\u6709\u66F4\u591A\u4E86\u3002\u5C3D\u7BA1\u5982\u6B64\u7B80\u5355\uFF0C\u4F46\u5728\u6784\u5EFA\u590D\u6742\u7BA1\u9053\u65F6\u975E\u5E38\u6709\u7528\u3002</li><li>\u6253\u5370\u51FA<code>ls.out</code>\uFF0C\u5C06\u6240\u6709\u7684<code>bash</code>\u6761\u76EE\u66FF\u6362\u4E3A<code>I replace this!!!</code>\u3002<code>sed</code>\u662F\u4E00\u4E2A\u5F3A\u5927\u7684\u6D41\u7F16\u8F91\u5668\uFF0C\u5B83\u975E\u5E38\u975E\u5E38\u975E\u5E38\u6709\u7528\u3002</li></ul><h2 id="\u9644\u52A0\u9898" tabindex="-1"><a class="header-anchor" href="#\u9644\u52A0\u9898" aria-hidden="true">#</a> \u9644\u52A0\u9898</h2>`,19),N=a("<li>\u6253\u5F00<code>head</code>\uFF0C<code>tail</code>\uFF0C<code>awk</code>\uFF0C <code>grep</code>\u548C<code>sed</code>\u7684\u624B\u518C\u9875\u3002\u4E0D\u8981\u5BB3\u6015\uFF0C\u53EA\u8981\u8BB0\u4F4F\u624B\u518C\u9875\u9762\u603B\u662F\u5728\u90A3\u91CC\u3002\u6709\u4E86\u4E00\u4E9B\u5B9E\u8DF5\uFF0C\u4F60\u5C06\u80FD\u591F\u5B9E\u9645\u4E86\u89E3\u4ED6\u4EEC\u3002</li><li>\u67E5\u627E<code>grep</code>\u9009\u9879\uFF0C\u80FD\u591F\u6253\u5370\u5B83\u627E\u5230\u7684\u90A3\u884C\u4E4B\u524D\uFF0C\u6216\u4E4B\u540E\u7684\u4E00\u884C\u3002</li><li>\u4F7F\u7528 Google \u641C\u7D22<code>awk printf</code>\u547D\u4EE4\uFF0C\u5C1D\u8BD5\u4E86\u89E3\u5B83\u5982\u4F55\u5DE5\u4F5C\u3002</li>",3),V=n("\u9605\u8BFB "),E={href:"https://archive.fo/9Zcyu",target:"_blank",rel:"noopener noreferrer"},U=n("The Useless Use of Cat Award"),A=n("\u3002\u5C1D\u8BD5\u90A3\u91CC\u7684\u4E00\u4E9B\u4F8B\u5B50\u3002");function S(T,z){const e=u("ExternalLinkIcon");return p(),b(i,null,[t,s("blockquote",null,[s("p",null,[m,s("a",d,[h,r(e)])])]),s("blockquote",null,[s("p",null,[x,s("a",_,[w,r(e)])])]),s("blockquote",null,[s("p",null,[f,s("a",g,[J,r(e)])])]),s("blockquote",null,[s("p",null,[v,s("a",k,[$,r(e)])])]),y,s("p",null,[q,s("a",I,[B,r(e)]),C]),L,s("ul",null,[N,s("li",null,[V,s("a",E,[U,r(e)]),A])])],64)}var j=l(o,[["render",S]]);export{j as default};
