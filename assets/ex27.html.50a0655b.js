import{_ as l,r as i,o as b,c as p,a as s,b as a,F as c,d as n,e as r}from"./app.91d0dc40.js";const t={},u=s("h1",{id:"\u7EC3\u4E60-27-\u5B89\u5168-shell-ssh-sshd-scp",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u7EC3\u4E60-27-\u5B89\u5168-shell-ssh-sshd-scp","aria-hidden":"true"},"#"),n(" \u7EC3\u4E60 27\uFF1A\u5B89\u5168 Shell\uFF0C"),s("code",null,"ssh"),n("\uFF0C"),s("code",null,"sshd"),n("\uFF0C"),s("code",null,"scp")],-1),o=n("\u539F\u6587\uFF1A"),m={href:"https://archive.fo/vzDDW",target:"_blank",rel:"noopener noreferrer"},d=n("Exercise 27. Networking: secure shell, ssh, sshd, scp"),h=n("\u8BD1\u8005\uFF1A"),_={href:"https://github.com/wizardforcel",target:"_blank",rel:"noopener noreferrer"},g=n("\u98DE\u9F99"),S=n("\u534F\u8BAE\uFF1A"),f={href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank",rel:"noopener noreferrer"},k=n("CC BY-NC-SA 4.0"),y=n("\u81EA\u8C6A\u5730\u91C7\u7528"),v={href:"https://translate.google.cn/",target:"_blank",rel:"noopener noreferrer"},x=n("\u8C37\u6B4C\u7FFB\u8BD1"),H=n("\u4F60\u53EF\u80FD\u5DF2\u7ECF\u77E5\u9053\uFF0C"),w={href:"https://en.wikipedia.org/wiki/Secure_Shell",target:"_blank",rel:"noopener noreferrer"},E=n("SSH"),T=n(" \u662F\u4E00\u79CD\u7F51\u7EDC\u534F\u8BAE\uFF0C\u5141\u8BB8\u4F60\u901A\u8FC7\u7F51\u7EDC\u767B\u5F55\u5230"),N=s("code",null,"vm1",-1),D=n("\u3002\u8BA9\u6211\u4EEC\u8BE6\u7EC6\u7814\u7A76\u4E00\u4E0B\u3002"),A=s("blockquote",null,[s("p",null,"\u5B89\u5168 Shell\uFF08SSH\uFF09\u662F\u4E00\u79CD\u7F51\u7EDC\u534F\u8BAE\uFF0C\u7528\u4E8E\u5B89\u5168\u6570\u636E\u901A\u4FE1\uFF0C\u8FDC\u7A0B Shell \u670D\u52A1\u6216\u547D\u4EE4\u6267\u884C\uFF0C\u4EE5\u53CA\u5176\u5B83\u4E24\u4E2A\u8054\u7F51\u8BA1\u7B97\u673A\u4E4B\u95F4\u7684\u7F51\u7EDC\u670D\u52A1\uFF0C\u5B83\u4EEC\u901A\u8FC7\u4E0D\u5B89\u5168\u7F51\u7EDC\u4E0A\u7684\u5B89\u5168\u901A\u9053\u8FDE\u63A5\uFF1A\u670D\u52A1\u5668\u548C\u5BA2\u6237\u7AEF\uFF08\u8FD0\u884C SSH \u670D\u52A1\u5668\u548C SSH \u5BA2\u6237\u7AEF\u7A0B\u5E8F\uFF09\u3002\u534F\u8BAE\u89C4\u8303\u533A\u5206\u4E86\u4E24\u4E2A\u4E3B\u8981\u7248\u672C\uFF0C\u88AB\u79F0\u4E3A SSH-1 \u548C SSH-2\u3002")],-1),L=s("blockquote",null,[s("p",null,"\u534F\u8BAE\u6700\u8457\u540D\u7684\u5E94\u7528\u662F\uFF0C\u8BBF\u95EE\u7C7B Unix \u64CD\u4F5C\u7CFB\u7EDF\u4E0A\u7684 shell \u5E10\u6237\u3002\u5B83\u4E3A\u66FF\u4EE3 Telnet \u548C\u5176\u4ED6\u4E0D\u5B89\u5168\u7684\u8FDC\u7A0B shell \u534F\u8BAE\u800C\u8BBE\u8BA1\uFF0C\u5982 Berkeley rsh \u548C rexec \u534F\u8BAE\uFF0C\u5B83\u4EEC\u4EE5\u660E\u6587\u5F62\u5F0F\u53D1\u9001\u4FE1\u606F\uFF0C\u7279\u522B\u662F\u5BC6\u7801\uFF0C\u4F7F\u5F97\u5B83\u4EEC\u6613\u4E8E\u4F7F\u7528\u5C01\u5305\u5206\u6790\u6765\u62E6\u622A\u548C\u66B4\u9732\u3002SSH \u4F7F\u7528\u7684\u52A0\u5BC6 \u65E8\u5728\u901A\u8FC7\u4E0D\u5B89\u5168\u7684\u7F51\u7EDC\uFF08\u5982\u4E92\u8054\u7F51\uFF09\u63D0\u4F9B\u6570\u636E\u7684\u673A\u5BC6\u6027\u548C\u5B8C\u6574\u6027\u3002")],-1),M=s("p",null,"\u91CD\u8981\u7684 SSH \u7A0B\u5E8F\uFF0C\u6982\u5FF5\u548C\u914D\u7F6E\u6587\u4EF6\uFF1A",-1),G={href:"https://en.wikipedia.org/wiki/OpenSSH",target:"_blank",rel:"noopener noreferrer"},O=n("OpenSSH"),$=n(" - \u5F00\u6E90\u7684 ssh \u7A0B\u5E8F\u5B9E\u73B0\u3002"),R=s("li",null,[s("code",null,"ssh"),n(" - \u5141\u8BB8\u4F60\u8FDE\u63A5\u5230 SSH \u670D\u52A1\u5668\u7684\u5BA2\u6237\u7AEF\u7A0B\u5E8F\u3002Putty \u5C31\u662F\u8FD9\u6837\u7684\u5BA2\u6237\u7AEF\u7A0B\u5E8F\u3002")],-1),C=s("li",null,[s("code",null,"sshd"),n(" - \u670D\u52A1\u5668\u7A0B\u5E8F\uFF0C\u5141\u8BB8\u4F60\u4F7F\u7528"),s("code",null,"ssh"),n("\u8FDE\u63A5\u5230\u5B83\u3002")],-1),P=s("li",null,[s("code",null,"/etc/ssh/ssh_config"),n(" - \u9ED8\u8BA4\u7684\u5BA2\u6237\u7AEF\u7A0B\u5E8F\u914D\u7F6E\u6587\u4EF6\u3002")],-1),q=s("li",null,[s("code",null,"/etc/ssh/sshd_config"),n(" - \u9ED8\u8BA4\u670D\u52A1\u5668\u7A0B\u5E8F\u914D\u7F6E\u6587\u4EF6\u3002")],-1),I={href:"https://en.wikipedia.org/wiki/Public-key_cryptography",target:"_blank",rel:"noopener noreferrer"},U=n("\u516C\u94A5\u5BC6\u7801\u7CFB\u7EDF"),Y=n(" - \u4E00\u79CD\u9700\u8981\u4E24\u4E2A\u5355\u72EC\u5BC6\u94A5\u7684\u52A0\u5BC6\u7CFB\u7EDF\uFF0C\u5176\u4E2D\u4E00\u4E2A\u5BC6\u94A5\u662F\u79C1\u94A5\uFF0C\u5176\u4E2D\u4E00\u4E2A\u5BC6\u94A5\u662F\u516C\u94A5\u3002\u867D\u7136\u4E0D\u540C\uFF0C\u5BC6\u94A5\u5BF9\u7684\u4E24\u4E2A\u90E8\u5206\u5728\u6570\u5B66\u4E0A\u662F\u76F8\u5173\u7684\u3002\u4E00\u65E6\u5BC6\u94A5\u9501\u5B9A\u6216\u52A0\u5BC6\u4E86\u660E\u6587\uFF0C\u53E6\u4E00\u4E2A\u5BC6\u94A5\u89E3\u9501\u6216\u89E3\u5BC6\u5BC6\u6587\u3002\u4E24\u4E2A\u5BC6\u94A5\u90FD\u4E0D\u80FD\u6267\u884C\u8FD9\u4E24\u4E2A\u529F\u80FD\u3002\u5176\u4E2D\u4E00\u4E2A\u5BC6\u94A5\u662F\u516C\u5F00\u53D1\u5E03\u7684\uFF0C\u53E6\u4E00\u4E2A\u5BC6\u94A5\u662F\u4FDD\u5BC6\u7684\u3002"),K=r("<li>SSH \u5BC6\u94A5 - SSH \u4F7F\u7528\u516C\u94A5\u5BC6\u7801\u7CFB\u7EDF\u6765\u8BA4\u8BC1\u8FDC\u7A0B\u8BA1\u7B97\u673A\uFF0C\u5E76\u5141\u8BB8\u5B83\u5BF9\u7528\u6237\u8FDB\u884C\u8BA4\u8BC1\uFF08\u5982\u6709\u5FC5\u8981\uFF09\u3002\u4EFB\u4F55\u4EBA\u90FD\u53EF\u4EE5\u751F\u6210\u4E00\u5BF9\u5339\u914D\u7684\u4E0D\u540C\u5BC6\u94A5\uFF08\u516C\u94A5\u548C\u79C1\u94A5\uFF09\u3002\u516C\u94A5\u653E\u7F6E\u5728\u6240\u6709\u8BA1\u7B97\u673A\u4E0A\uFF0C\u5B83\u4EEC\u5141\u8BB8\u8BBF\u95EE\u5339\u914D\u7684\u79C1\u94A5\u7684\u6240\u6709\u8005\uFF08\u6240\u6709\u8005\u4F7F\u79C1\u94A5\u4FDD\u5BC6\uFF09\u3002\u867D\u7136\u8BA4\u8BC1\u57FA\u4E8E\u79C1\u94A5\uFF0C\u4F46\u8BA4\u8BC1\u671F\u95F4\u5BC6\u94A5\u672C\u8EAB\u4E0D\u4F1A\u901A\u8FC7\u7F51\u7EDC\u4F20\u8F93\u3002</li><li><code>/etc/ssh/moduli</code> - \u8D28\u6570\u53CA\u5176\u751F\u6210\u5668\uFF0C\u7531<code>sshd(8)</code>\u7528\u4E8E Diffie-Hellman Group Exchange \u5BC6\u94A5\u4EA4\u6362\u65B9\u6CD5\u4E2D\u3002</li><li><code>/etc/ssh/ssh_host_dsa_key</code>, <code>/etc/ssh/ssh_host_rsa_key</code> - \u4E3B\u673A RSA \u548C DSA \u79C1\u94A5\u3002</li><li><code>/etc/ssh/ssh_host_dsa_key.pub</code>, <code>/etc/ssh/ssh_host_rsa_key.pub</code> - \u4E3B\u673A RSA \u548C DSA \u516C\u94A5\u3002</li>",4),z=r(`<p>SSH \u534F\u8BAE\u975E\u5E38\u91CD\u8981\uFF0C\u56E0\u6B64\u88AB\u5E7F\u6CDB\u4F7F\u7528\uFF0C\u5E76\u4E14\u5177\u6709\u5982\u6B64\u591A\u7684\u529F\u80FD\uFF0C\u4F60\u5FC5\u987B\u4E86\u89E3\u5B83\u7684\u4E00\u4E9B\u5DE5\u4F5C\u539F\u7406\u3002\u8FD9\u662F\u5B83\u7684\u4E00\u4E9B\u7528\u9014\uFF1A</p><ul><li><code>scp</code> - \u901A\u8FC7 SSH \u4F20\u8F93\u6587\u4EF6\u3002</li><li><code>sftp</code> - \u7C7B\u4F3C ftp \u7684\u534F\u8BAE\uFF0C\u7528\u4E8E\u7BA1\u7406\u8FDC\u7A0B\u6587\u4EF6\u3002</li><li><code>sshfs</code> - SSH \u4E0A\u7684\u8FDC\u7A0B\u6587\u4EF6\u7CFB\u7EDF\u3002</li><li>SSH \u96A7\u9053 - \u4E00\u79CD\u901A\u8FC7\u5B89\u5168\u8FDE\u63A5\uFF0C\u4F20\u8F93\u51E0\u4E4E\u4EFB\u4F55\u6570\u636E\u7684\u65B9\u6CD5\u3002\u8FD9\u662F\u975E\u5E38\u91CD\u8981\u7684\uFF0C\u56E0\u4E3A\u5B83\u53EF\u4EE5\u7528\u4E8E\u6784\u5EFA\u53D7\u4FDD\u62A4\u7CFB\u7EDF\u7684\u57FA\u7840\uFF0C\u4EE5\u53CA\u8BB8\u591A\u5176\u4ED6\u7528\u9014\u3002</li></ul><p>\u4E3A\u4E86\u4E86\u89E3\u8FD9\u4E2A\u534F\u8BAE\uFF0C\u8BA9\u6211\u4EEC\u770B\u770B\uFF0C\u5728 SSH \u4F1A\u8BDD\u4E2D\u4F1A\u53D1\u751F\u4E86\u4EC0\u4E48\u3002\u4E3A\u6B64\uFF0C\u6211\u4EEC\u5C06\u5F00\u59CB\u7814\u7A76<code>vm1</code>\u5230<code>vm1</code>\u7684\u8FDE\u63A5\u7684\u5E26\u6CE8\u89E3\u7684\u8F93\u51FA\uFF08\u662F\u7684\uFF0C\u8FD9\u662F\u53EF\u4EE5\u505A\u5230\u7684\uFF0C\u4E5F\u662F\u5B8C\u5168\u6709\u6548\u7684\uFF09\u3002\u6982\u8FF0\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4F60
    \u8F93\u5165 SSH VM1 
    \u63A7\u5236\u6743\u73B0\u5728\u4F20\u9012\u7ED9 SSH \u5BA2\u6237\u7AEF
SSH \u5BA2\u6237\u7AEF
    \u8FDB\u5165\u660E\u6587\u9636\u6BB5
        \u8BFB\u53D6\u914D\u7F6E
        \u4E0E SSH \u670D\u52A1\u5668\u8FDB\u884C\u534F\u8BAE\u534F\u5546
    \u8FDB\u5165 SSH \u4F20\u8F93\u9636\u6BB5
        \u4E0E SSH \u670D\u52A1\u5668\u8FDB\u884C\u534F\u5546
            \u6570\u636E\u52A0\u5BC6\u5BC6\u7801 
            \u6570\u636E\u5B8C\u6574\u6027\u7B97\u6CD5
            \u6570\u636E\u538B\u7F29\u7B97\u6CD5
            \u4F7F\u7528 Diffie-Hellman \u7B97\u6CD5\u542F\u52A8\u5BC6\u94A5\u4EA4\u6362
            \u6240\u5F97\u5171\u4EAB\u5BC6\u94A5\u7528\u4E8E\u5EFA\u7ACB\u5B89\u5168\u8FDE\u63A5
    \u8FDB\u5165 SSH-userauth \u9636\u6BB5
    \u8981\u6C42\u4F60\u8F93\u5165\u5BC6\u7801
    \u63A7\u5236\u6743\u73B0\u5728\u4F20\u9012\u7ED9\u4F60
\u4F60
    \u8F93\u5165\u5BC6\u7801
    \u63A7\u5236\u6743\u73B0\u5728\u4F20\u9012\u7ED9 SSH \u5BA2\u6237\u7AEF
SSH \u5BA2\u6237\u7AEF
    \u5728 SSH \u670D\u52A1\u5668\u5BF9\u4F60\u8FDB\u884C\u8BA4\u8BC1
    \u8FDB\u5165 SSH \u8FDE\u63A5\u9636\u6BB5
    \u4E3A\u4F60\u5206\u914D\u4F2A\u7EC8\u7AEF
    \u4E3A\u4F60\u542F\u52A8 shell
    \u63A7\u5236\u6743\u73B0\u5728\u4F20\u9012\u7ED9\u4F60
\u4F60
    \u5728 vm1 \u4E0A\u505A\u4E00\u4E9B\uFF08\u6CA1\uFF09\u6709\u7528\u7684\u4E8B\u60C5 
    \u5173\u95ED shell
    \u63A7\u5236\u5168\u73B0\u5728\u4F20\u9012\u7ED9 SSH \u5BA2\u6237\u7AEF
SSH \u5BA2\u6237\u7AEF
    \u5173\u95ED\u4F2A\u7EC8\u7AEF
    \u5173\u95ED\u8FDE\u63A5
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>\u73B0\u5728\u9605\u8BFB\u8FD9\u4E2A\uFF1A</p>`,5),X={href:"https://www.linuxjournal.com/article/9566",target:"_blank",rel:"noopener noreferrer"},B=n("SSH \u534F\u8BAE\u63ED\u79D8"),J={href:"http://www.cs.ust.hk/faculty/cding/COMP581/SLIDES/slide24.pdf",target:"_blank",rel:"noopener noreferrer"},V=n("http://www.cs.ust.hk/faculty/cding/COMP581/SLIDES/slide24.pdf"),j=r(`<p>\u5E76\u7814\u7A76 SSH \u4F1A\u8BDD\u7684\u771F\u5B9E\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:~$ ssh -vv vm1
 
Protocol version selection, plaintext
-------------------------------------
 
OpenSSH_5.5p1 Debian-6+squeeze2, OpenSSL 0.9.8o 01 Jun 2010
# Speaks for itself, I will mark such entries with -- below
debug1: Reading configuration data /etc/ssh/ssh_config
# Applying default options for all hosts. Additional options for each host may be
# specified in the configuration file
debug1: Applying options for *
debug2: ssh_connect: needpriv 0
debug1: Connecting to vm1 [127.0.1.1] port 22.
debug1: Connection established.
debug1: identity file /home/user1/.ssh/id_rsa type -1      # no such files
debug1: identity file /home/user1/.ssh/id_rsa-cert type -1
debug1: identity file /home/user1/.ssh/id_dsa type -1
debug1: identity file /home/user1/.ssh/id_dsa-cert type -1
debug1: Remote protocol version 2.0, remote software version OpenSSH_5.5p1 Debian-6+squeeze2
debug1: match: OpenSSH_5.5p1 Debian-6+squeeze2 pat OpenSSH*
debug1: Enabling compatibility mode for protocol 2.0
debug1: Local version string SSH-2.0-OpenSSH_5.5p1 Debian-6+squeeze2
debug2: fd 3 setting O_NONBLOCK
 
SSH-transport, binary packet protocol
-------------------------------------
 
debug1: SSH2_MSG_KEXINIT sent
debug1: SSH2_MSG_KEXINIT received
# Key exchange algorithms
debug2: kex_parse_kexinit: diffie-hellman-group-exchange-sha256,diffie-hellman-group-exchange-sha1,diffie-hellman-group14-sha1,diffie-hellman-group1-sha1
# SSH host key types
debug2: kex_parse_kexinit: ssh-rsa-cert-v00@openssh.com,ssh-dss-cert-v00@openssh.com,ssh-rsa,ssh-dss
# Data encryption ciphers
debug2: kex_parse_kexinit: aes128-ctr,aes192-ctr,aes256-ctr,arcfour256,arcfour128,aes128-cbc,3des-cbc,blowfish-cbc,cast128-cbc,aes192-cbc,aes256-cbc,arcfour,rijndael-cbc@lysator.liu.se
debug2: kex_parse_kexinit: aes128-ctr,aes192-ctr,aes256-ctr,arcfour256,arcfour128,aes128-cbc,3des-cbc,blowfish-cbc,cast128-cbc,aes192-cbc,aes256-cbc,arcfour,rijndael-cbc@lysator.liu.se
# Data integrity algorithms
debug2: kex_parse_kexinit: hmac-md5,hmac-sha1,umac-64@openssh.com,hmac-ripemd160,hmac-ripemd160@openssh.com,hmac-sha1-96,hmac-md5-96
debug2: kex_parse_kexinit: hmac-md5,hmac-sha1,umac-64@openssh.com,hmac-ripemd160,hmac-ripemd160@openssh.com,hmac-sha1-96,hmac-md5-96
# Data compression algorithms
debug2: kex_parse_kexinit: none,zlib@openssh.com,zlib
debug2: kex_parse_kexinit: none,zlib@openssh.com,zlib
debug2: kex_parse_kexinit:
debug2: kex_parse_kexinit:
debug2: kex_parse_kexinit: first_kex_follows
debug2: kex_parse_kexinit: reserved 0
# Messages back from server
debug2: kex_parse_kexinit: diffie-hellman-group-exchange-sha256,diffie-hellman-group-exchange-sha1,diffie-hellman-group14-sha1,diffie-hellman-group1-sha1
debug2: kex_parse_kexinit: ssh-rsa,ssh-dss
debug2: kex_parse_kexinit: aes128-ctr,aes192-ctr,aes256-ctr,arcfour256,arcfour128,aes128-cbc,3des-cbc,blowfish-cbc,cast128-cbc,aes192-cbc,aes256-cbc,arcfour,rijndael-cbc@lysator.liu.se
debug2: kex_parse_kexinit: aes128-ctr,aes192-ctr,aes256-ctr,arcfour256,arcfour128,aes128-cbc,3des-cbc,blowfish-cbc,cast128-cbc,aes192-cbc,aes256-cbc,arcfour,rijndael-cbc@lysator.liu.se
debug2: kex_parse_kexinit: hmac-md5,hmac-sha1,umac-64@openssh.com,hmac-ripemd160,hmac-ripemd160@openssh.com,hmac-sha1-96,hmac-md5-96
debug2: kex_parse_kexinit: hmac-md5,hmac-sha1,umac-64@openssh.com,hmac-ripemd160,hmac-ripemd160@openssh.com,hmac-sha1-96,hmac-md5-96
debug2: kex_parse_kexinit: none,zlib@openssh.com
debug2: kex_parse_kexinit: none,zlib@openssh.com
debug2: kex_parse_kexinit:
debug2: kex_parse_kexinit:
debug2: kex_parse_kexinit: first_kex_follows 0
debug2: kex_parse_kexinit: reserved 0
# Message authentication code setup
debug2: mac_setup: found hmac-md5
debug1: kex: server-&gt;client aes128-ctr hmac-md5 none
debug2: mac_setup: found hmac-md5
debug1: kex: client-&gt;server aes128-ctr hmac-md5 none
# Key exchange
debug1: SSH2_MSG_KEX_DH_GEX_REQUEST(1024&lt;1024&lt;8192) sent
debug1: SSH2_MSG_KEX_DH_GEX_REQUEST(1024&lt;1024&lt;8192) sent
debug1: expecting SSH2_MSG_KEX_DH_GEX_GROUP
debug2: dh_gen_key: priv key bits set: 135/256
debug2: bits set: 498/1024
debug1: SSH2_MSG_KEX_DH_GEX_INIT sent
debug1: expecting SSH2_MSG_KEX_DH_GEX_REPLY
# Server authentication. vm1 host key is not known because it is our first connection
debug2: no key of type 0 for host vm1
debug2: no key of type 2 for host vm1
# Confirmation of host key acceptance
The authenticity of host &#39;vm1 &#39;(127.0.1.1)&#39; can&#39;t be established.
RSA key fingerprint is b6:06:92:5e:04:49:d9:e8:57:90:61:1b:16:87:bb:09.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added &#39;vm1&#39; (RSA) to the list of known hosts.
# Key is added to /home/user1/.ssh/known_hosts and checked
debug2: bits set: 499/1024
debug1: ssh_rsa_verify: signature correct
# Based on shared master key, data encryption key and data integrity key are derived
debug2: kex_derive_keys
debug2: set_newkeys: mode 1
# Information about this is sent to server
debug1: SSH2_MSG_NEWKEYS sent
debug1: expecting SSH2_MSG_NEWKEYS
debug2: set_newkeys: mode 0
debug1: SSH2_MSG_NEWKEYS received
# IP roaming not enabled? Not sure about this.
debug1: Roaming not allowed by server
 
SSH-userauth
------------
 
debug1: SSH2_MSG_SERVICE_REQUEST sent
debug2: service_accept: ssh-userauth
debug1: SSH2_MSG_SERVICE_ACCEPT received
debug2: key: /home/user1/.ssh/id_rsa ((nil))
debug2: key: /home/user1/.ssh/id_dsa ((nil))
debug1: Authentications that can continue: publickey,password
debug1: Next authentication method: publickey
debug1: Trying private key: /home/user1/.ssh/id_rsa
debug1: Trying private key: /home/user1/.ssh/id_dsa
debug2: we did not send a packet, disable method
debug1: Next authentication method: password
user1@vm1&#39;&#39;s password:
debug2: we sent a password packet, wait for reply
debug1: Authentication succeeded (password).
 
SSH-connection
--------------
 
debug1: channel 0: new [client-session]
debug2: channel 0: send open
# Disable SSH mutiplexing.
# More info: http://www.linuxjournal.com/content/speed-multiple-ssh-connections-same-server
debug1: Requesting no-more-sessions@openssh.com
debug1: Entering interactive session.
debug2: callback start
debug2: client_session2_setup: id 0
debug2: channel 0: request pty-req confirm 1
# Sending environment variables
debug1: Sending environment.
debug1: Sending env LANG = en_US.UTF-8
debug2: channel 0: request env confirm 0
debug2: channel 0: request shell confirm 1
# Set TCP_NODELAY flag: http://en.wikipedia.org/wiki/Nagle%27s_algorithm
debug2: fd 3 setting TCP_NODELAY
debug2: callback done
# Connection opened
debug2: channel 0: open confirm rwindow 0 rmax 32768
debug2: channel_input_status_confirm: type 99 id 0
# Pseudo terminal allocation
debug2: PTY allocation request accepted on channel 0
debug2: channel 0: rcvd adjust 2097152
debug2: channel_input_status_confirm: type 99 id 0
# Shell is started
debug2: shell request accepted on channel 0
# Loggin in is completed
Linux vm1 2.6.32-5-amd64 #1 SMP Sun May 6 04:00:17 UTC 2012 x86_64
 
The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.
 
Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
You have mail.
Last login: Thu Jul 19 05:14:40 2012 from 10.0.2.2
user1@vm1:~$ debug2: client_check_window_change: changed
debug2: channel 0: request window-change confirm 0
user1@vm1:~$ debug2: client_check_window_change: changed
debug2: channel 0: request window-change confirm 0
user1@vm1:~$ logout
 
Ending ssh connection
---------------------
 
debug2: channel 0: rcvd eof   # end of file
debug2: channel 0: output open -&gt; drain
debug2: channel 0: obuf empty
debug2: channel 0: close_write
debug2: channel 0: output drain -&gt; closed
debug1: client_input_channel_req: channel 0 rtype exit-status reply 0
# signalling that channels are half-closed for writing, through a channel protocol extension
# notification &quot;eow@openssh.com&quot; http://www.openssh.com/txt/release-5.1
debug1: client_input_channel_req: channel 0 rtype eow@openssh.com reply 0
debug2: channel 0: rcvd eow
# Ending connection
debug2: channel 0: close_read
debug2: channel 0: input open -&gt; closed
debug2: channel 0: rcvd close
debug2: channel 0: almost dead
debug2: channel 0: gc: notify user
debug2: channel 0: gc: user detached
debug2: channel 0: send close
debug2: channel 0: is dead
debug2: channel 0: garbage collecting
debug1: channel 0: free: client-session, nchannels 1
Connection to vm1 closed.
Transferred: sent 1928, received 2632 bytes, in 93.2 seconds
Bytes per second: sent 20.7, received 28.2
debug1: Exit status 0
user1@vm1:~$
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br></div></div><p>\u73B0\u5728\uFF0C\u4F60\u5C06\u5B66\u4E60\u5982\u4F55\u5728\u8C03\u8BD5\u6A21\u5F0F\u4E0B\u542F\u52A8<code>sshd</code>\uFF0C\u4F7F\u7528<code>scp</code>\u5EFA\u7ACB\u516C\u94A5\u8BA4\u8BC1\u548C\u590D\u5236\u6587\u4EF6\u3002</p><h2 id="\u8FD9\u6837\u505A" tabindex="-1"><a class="header-anchor" href="#\u8FD9\u6837\u505A" aria-hidden="true">#</a> \u8FD9\u6837\u505A</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> 1: mkdir -v ssh_test
 2: cd ssh_test
 3: cp -v /etc/ssh/sshd_config .
 4: sed -i&#39;.bak&#39; &#39;s/^Port 22$/Port 1024/&#39; sshd_config
 5: sed -i &#39;s/^HostKey \\/etc\\/ssh\\/ssh_host_rsa_key$/Hostkey \\/home\\/user1\\/ssh_test\\/ssh_host_rsa_key/&#39; sshd_config
 6: sed -i &#39;s/^HostKey \\/etc\\/ssh\\/ssh_host_dsa_key$/Hostkey \\/home\\/user1\\/ssh_test\\/ssh_host_dsa_key/&#39; sshd_config
 7: diff sshd_config.bak sshd_config
 8: ssh-keygen -b 4096 -t rsa -N &#39;&#39; -v -h -f ssh_host_rsa_key
 9: ssh-keygen -b 1024 -t dsa -N &#39;&#39; -v -h -f ssh_host_dsa_key
10: ssh-keygen -b 4096 -t rsa -N &#39;&#39; -v  -f ~/.ssh/id_rsa
11: cat ~/.ssh/id_rsa.pub &gt; ~/.ssh/authorized_keys
12: /usr/sbin/sshd -Ddf sshd_config &gt; sshd.out 2&gt;&amp;1 &amp;
13: ssh-keyscan -H vm1 127.0.0.1 &gt;&gt; ~/.ssh/known_hosts
14: /usr/sbin/sshd -Ddf sshd_config &gt;&gt; sshd.out 2&gt;&amp;1 &amp;
15: ssh vm1 -v -p 1024 2&gt;ssh.out
16: ps au --forest
17: logout
18: /usr/sbin/sshd -Ddf sshd_config &gt;&gt; sshd.out 2&gt;&amp;1 &amp;
19: scp -v -P 1024 vm1:.bashrc . 2&gt;scp.out
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="\u4F60\u4F1A\u770B\u5230\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4F60\u4F1A\u770B\u5230\u4EC0\u4E48" aria-hidden="true">#</a> \u4F60\u4F1A\u770B\u5230\u4EC0\u4E48</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:~$ mkdir -v ssh_test
mkdir: created directory &#39;ssh_test&#39;
user1@vm1:~$ cd ssh_test
user1@vm1:~/ssh_test$ cp -v /etc/ssh/sshd_config .
&#39;/etc/ssh/sshd_config&#39; -&gt; &#39;./sshd_config&#39;
user1@vm1:~/ssh_test$ sed -i&#39;.bak&#39; &#39;s/^Port 22$/Port 1024/&#39; sshd_config
user1@vm1:~/ssh_test$ sed -i &#39;s/^HostKey \\/etc\\/ssh\\/ssh_host_rsa_key$/Hostkey \\/home\\/user1\\/ssh_test\\/ssh_host_rsa_key/&#39; sshd_config
user1@vm1:~/ssh_test$ sed -i &#39;s/^HostKey \\/etc\\/ssh\\/ssh_host_dsa_key$/Hostkey \\/home\\/user1\\/ssh_test\\/ssh_host_dsa_key/&#39; sshd_config
user1@vm1:~/ssh_test$ diff sshd_config.bak sshd_config
5c5
&lt; Port 22
---
&gt; Port 1024
11,12c11,12
&lt; HostKey /etc/ssh/ssh_host_rsa_key
&lt; HostKey /etc/ssh/ssh_host_dsa_key
---
&gt; Hostkey /home/user1/ssh_test/ssh_host_rsa_key
&gt; Hostkey /home/user1/ssh_test/ssh_host_dsa_key
user1@vm1:~/ssh_test$ ssh-keygen -b 4096 -t rsa -N &#39;&#39; -v -h -f ssh_host_rsa_key
Generating public/private rsa key pair.
Your identification has been saved in ssh_host_rsa_key.
Your public key has been saved in ssh_host_rsa_key.pub.
The key fingerprint is:
8c:0a:8d:ae:c7:34:e6:29:9c:c2:14:29:b8:d9:1d:34 user1@vm1
&#39;The key&#39;s randomart image is:
+--[ RSA 4096]----+
|                 |
|    E            |
|. .. .           |
|oo o.  o         |
|.++.... S        |
|oo=...           |
|+=oo.            |
|o==              |
|oo               |
+-----------------+
user1@vm1:~/ssh_test$ ssh-keygen -b 1024 -t dsa -N &#39;&#39; -v -h -f ssh_host_dsa_key
Generating public/private dsa key pair.
Your identification has been saved in ssh_host_dsa_key.
Your public key has been saved in ssh_host_dsa_key.pub.
The key fingerprint is:
cd:6b:2a:a2:ba:80:65:71:85:ef:2e:6a:c0:a7:d9:aa user1@vm1
&#39;The key&#39;s randomart image is:
+--[ DSA 1024]----+
|     ..          |
|    ..           |
|  . ..           |
|   o  .  o       |
|. o  .  S o      |
|o+ .  .    .     |
|o.=  .    o      |
|.o..o o  o       |
|E=+o o ..        |
+-----------------+
user1@vm1:~/ssh_test$ ssh-keygen -b 4096  -t rsa -N &#39;&#39; -v  -f ~/.ssh/id_rsa
Generating public/private rsa key pair.
Your identification has been saved in /home/user1/.ssh/id_rsa.
Your public key has been saved in /home/user1/.ssh/id_rsa.pub.
The key fingerprint is:
50:65:18:61:3f:41:36:07:4f:40:36:a7:4b:6d:64:28 user1@vm1
&#39;The key&#39;s randomart image is:
+--[ RSA 4096]----+
|        =B&amp;+*    |
|       oE=.&amp;     |
|      .  .= +    |
|       . . +     |
|        S .      |
|                 |
|                 |
|                 |
|                 |
+-----------------+
user1@vm1:~/ssh_test$ cat ~/.ssh/id_rsa.pub &gt; ~/.ssh/authorized_keys
user1@vm1:~/ssh_test$ /usr/sbin/sshd -Ddf sshd_config &gt; sshd.out 2&gt;&amp;1 &amp;
[2] 26896
user1@vm1:~/ssh_test$ ssh-keyscan -H vm1 127.0.0.1 &gt;&gt; ~/.ssh/known_hosts
# 127.0.0.1 SSH-2.0-OpenSSH_5.5p1 Debian-6+squeeze2
# vm1 SSH-2.0-OpenSSH_5.5p1 Debian-6+squeeze2
[2]+  Exit 255                /usr/sbin/sshd -Ddf sshd_config &gt; sshd.out 2&gt;&amp;1
user1@vm1:~/ssh_test$ /usr/sbin/sshd -Ddf sshd_config &gt;&gt; sshd.out 2&gt;&amp;1 &amp;
[1] 26957
user1@vm1:~/ssh_test$ ssh vm1 -v -p 1024 2&gt;ssh.out
Linux vm1 2.6.32-5-amd64 #1 SMP Sun May 6 04:00:17 UTC 2012 x86_64
 
The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.
 
Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
You have mail.
Last login: Fri Jul 20 09:10:30 2012 from vm1.site
Environment:
  LANG=en_US.UTF-8
  USER=user1
  LOGNAME=user1
  HOME=/home/user1
  PATH=/usr/local/bin:/usr/bin:/bin:/usr/bin/X11:/usr/games
  MAIL=/var/mail/user1
  SHELL=/bin/bash
  SSH_CLIENT=127.0.1.1 47456 1024
  SSH_CONNECTION=127.0.1.1 47456 127.0.1.1 1024
  SSH_TTY=/dev/pts/0
  TERM=xterm
user1@vm1:~$ ps au --forest
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
user1    26224  0.0  1.2  23660  6576 pts/2    Ss   09:09   0:01 -bash
user1    27020  1.0  0.6  68392  3236 pts/2    S    09:50   0:00  \\_ sshd: user1 [priv]
user1    27025  0.0  0.2  68392  1412 pts/2    S    09:50   0:00  |   \\_ sshd: user1@pts/0
user1    27026  9.0  1.2  23564  6404 pts/0    Ss   09:50   0:00  |       \\_ -bash
user1    27051  0.0  0.2  16308  1060 pts/0    R+   09:50   0:00  |           \\_ ps au --forest
user1    27021  1.1  0.5  38504  2880 pts/2    S+   09:50   0:00  \\_ ssh vm1 -v -p 1024
root      1107  0.0  0.1   5932   620 tty6     Ss+  Jul18   0:00 /sbin/getty 38400 tty6
root      1106  0.0  0.1   5932   616 tty5     Ss+  Jul18   0:00 /sbin/getty 38400 tty5
root      1105  0.0  0.1   5932   620 tty4     Ss+  Jul18   0:00 /sbin/getty 38400 tty4
root      1104  0.0  0.1   5932   620 tty3     Ss+  Jul18   0:00 /sbin/getty 38400 tty3
root      1103  0.0  0.1   5932   616 tty2     Ss+  Jul18   0:00 /sbin/getty 38400 tty2
root      1102  0.0  0.1   5932   616 tty1     Ss+  Jul18   0:00 /sbin/getty 38400 tty1
user1@vm1:~$ logout
user1@vm1:~/ssh_test$
[1]+  Exit 255                /usr/sbin/sshd -Ddf sshd_config &gt; sshd.out 2&gt;&amp;1
user1@vm1:~/ssh_test$ /usr/sbin/sshd -Ddf sshd_config &gt;&gt; sshd.out 2&gt;&amp;1 &amp;
[1] 27067
user1@vm1:~/ssh_test$ scp -v -P 1024 vm1:.bashrc . 2&gt;scp.out
Environment:
  LANG=en_US.UTF-8
  USER=user1
  LOGNAME=user1
  HOME=/home/user1
  PATH=/usr/local/bin:/usr/bin:/bin:/usr/bin/X11:/usr/games
  MAIL=/var/mail/user1
  SHELL=/bin/bash
  SSH_CLIENT=127.0.1.1 47459 1024
  SSH_CONNECTION=127.0.1.1 47459 127.0.1.1 1024
.bashrc                                                                                                                     100% 3184     3.1KB/s   00:00
[1]+  Exit 255                /usr/sbin/sshd -Ddf sshd_config &gt;&gt; sshd.out 2&gt;&amp;1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br></div></div><h2 id="\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#\u89E3\u91CA" aria-hidden="true">#</a> \u89E3\u91CA</h2><ol><li>\u521B\u5EFA<code>/home/user1/ssh_test</code>\u76EE\u5F55\u3002</li><li>\u4F7F\u5176\u6210\u4E3A\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u3002</li><li>\u5C06<code>sshd_config</code>\u590D\u5236\u5230\u6B64\u76EE\u5F55\u3002</li><li>\u5C06<code>sshd</code>\u76D1\u542C\u7AEF\u53E3\u4ECE 22 \u66F4\u6539\u4E3A 1024\uFF0C\u5C06\u526F\u672C\u547D\u540D\u4E3A<code>sshd_config.bak</code>\u3002</li><li>\u66FF\u6362 RSA \u4E3B\u673A\u5BC6\u94A5\u4F4D\u7F6E\u3002</li><li>\u66FF\u6362 DSA \u4E3B\u673A\u5BC6\u94A5\u4F4D\u7F6E\u3002</li><li>\u663E\u793A<code>sshd_config</code>\u7684\u65E7\u7248\u672C\u548C\u65B0\u7248\u672C\u4E4B\u95F4\u7684\u5DEE\u5F02\u3002</li><li>\u751F\u6210\u5177\u6709\u7A7A\u5BC6\u7801\u7684\uFF0C\u65B0\u7684 4096 \u4F4D RSA \u4E3B\u673A\u5BC6\u94A5\u5BF9\uFF0C\u5C06\u5176\u4FDD\u5B58\u5230<code>/home/user1/ssh_test/ssh_host_rsa_key</code>\u548C<code>/home/user1/ssh_test/ssh_host_rsa_key.pub</code>\u3002</li><li>\u540C\u6837\u7684\uFF0C\u4F46\u662F\u5BF9 DSA \u5BC6\u94A5\u6267\u884C\u3002</li><li>\u751F\u6210\u65B0\u7684\u8BA4\u8BC1\u5BC6\u94A5\u5BF9\uFF0C\u5C06\u5176\u4FDD\u5B58\u5230<code>/home/user1/.ssh/id_rsa</code>\u548C<code>/home/user1/.ssh/id_rsa.pub</code>\u3002</li><li>\u5C06<code>id_rsa.pub</code>\u590D\u5236\u5230<code>/home/user1/.ssh/authorized_keys</code>\uFF0C\u6765\u5141\u8BB8\u65E0\u5BC6\u7801\u8BA4\u8BC1\u3002</li><li>\u5728\u8C03\u8BD5\u6A21\u5F0F\u4E0B\uFF0C\u5728\u7AEF\u53E3 1024 \u4E0A\u542F\u52A8\u65B0\u7684 SSH \u670D\u52A1\u5668\uFF0C\u5C06\u6240\u6709\u8F93\u51FA\u4FDD\u5B58\u5230<code>sshd.log</code>\u3002</li><li>\u63D0\u53D6 SSH \u5BA2\u6237\u7AEF\u7684\u4E3B\u673A\u8BA4\u8BC1\u5BC6\u94A5\uFF0C\u5E76\u5C06\u5176\u63D0\u4F9B\u7ED9<code>/home/user1/.ssh/known_hosts</code>\u3002</li><li>\u5728\u8C03\u8BD5\u6A21\u5F0F\u4E0B\uFF0C\u5728\u7AEF\u53E3 1024 \u4E0A\u542F\u52A8\u65B0\u7684 SSH \u670D\u52A1\u5668\uFF0C\u5C06\u6240\u6709\u8F93\u51FA\u9644\u52A0\u5230<code>sshd.log</code>\u3002\u8FD9\u662F\u56E0\u4E3A\u5728\u8C03\u8BD5\u6A21\u5F0F\u4E0B\uFF0C SSH \u670D\u52A1\u5668\u53EA\u7EF4\u62A4\u4E00\u4E2A\u8FDE\u63A5\u3002</li><li>\u4F7F\u7528<code>ssh</code>\u5BA2\u6237\u7AEF\u8FDE\u63A5\u5230\u6B64\u670D\u52A1\u5668\u3002</li><li>\u4EE5\u6811\u5F62\u5F0F\u6253\u5370\u5F53\u524D\u6B63\u5728\u8FD0\u884C\u7684\u8FDB\u7A0B\u3002\u4F60\u53EF\u4EE5\u770B\u5230\uFF0C\u4F60\u6B63\u5728\u4F7F\u7528<code>sshd</code>\u542F\u52A8\u7684 bash\uFF0C\u5B83\u670D\u52A1\u4E8E\u4F60\u7684\u8FDE\u63A5\uFF0C\u800C<code>sshd</code>\u53C8\u662F\u7531<code>sshd</code>\u542F\u52A8\uFF0C\u4F60\u5728\u51E0\u884C\u4E4B\u524D\u542F\u52A8\u4E86\u4F60\u81EA\u5DF1\u3002\u3002</li><li>\u9000\u51FA<code>ssh</code>\u4F1A\u8BDD\u3002</li><li>\u518D\u6B21\u542F\u52A8 SSH \u670D\u52A1\u5668\u3002</li><li>\u5C06\u6587\u4EF6<code>.bashrc</code>\u4ECE\u4F60\u7684\u4E3B\u76EE\u5F55\u590D\u5236\u5230\u5F53\u524D\u76EE\u5F55\u3002</li></ol><h2 id="\u9644\u52A0\u9898" tabindex="-1"><a class="header-anchor" href="#\u9644\u52A0\u9898" aria-hidden="true">#</a> \u9644\u52A0\u9898</h2>`,10),W=n("\u89C2\u770B\u6B64\u89C6\u9891\uFF0C\u5B83\u89E3\u91CA\u4E86\u52A0\u5BC6\u5982\u4F55\u5DE5\u4F5C\uFF1A"),F={href:"http://www.youtube.com/watch?v=3QnD2c4Xovk",target:"_blank",rel:"noopener noreferrer"},Q=n("http://www.youtube.com/watch?v=3QnD2c4Xovk"),Z=n(" \u9605\u8BFB\uFF1A"),ss={href:"http://docstore.mik.ua/orelly/networking_2ndEd/ssh/ch03_04.htm",target:"_blank",rel:"noopener noreferrer"},ns=n("http://docstore.mik.ua/orelly/networking_2ndEd/ssh/ch03_04.htm"),es=n(" \u9605\u8BFB\u6587\u4EF6"),as=s("code",null,"ssh.out",-1),rs=n("\uFF0C"),ls=s("code",null,"scp.out",-1),is=n("\u548C"),bs=s("code",null,"sshd.out",-1),ps=n("\u4E2D\u7684\u8C03\u8BD5\u8F93\u51FA\u3002\u5411\u4F60\u81EA\u5DF1\u89E3\u91CA\u53D1\u751F\u4E86\u4EC0\u4E48\u3002");function cs(ts,us){const e=i("ExternalLinkIcon");return b(),p(c,null,[u,s("blockquote",null,[s("p",null,[o,s("a",m,[d,a(e)])])]),s("blockquote",null,[s("p",null,[h,s("a",_,[g,a(e)])])]),s("blockquote",null,[s("p",null,[S,s("a",f,[k,a(e)])])]),s("blockquote",null,[s("p",null,[y,s("a",v,[x,a(e)])])]),s("p",null,[H,s("a",w,[E,a(e)]),T,N,D]),A,L,M,s("ul",null,[s("li",null,[s("a",G,[O,a(e)]),$]),R,C,P,q,s("li",null,[s("a",I,[U,a(e)]),Y]),K]),z,s("ul",null,[s("li",null,[s("a",X,[B,a(e)])]),s("li",null,[s("a",J,[V,a(e)])])]),j,s("p",null,[W,s("a",F,[Q,a(e)]),Z,s("a",ss,[ns,a(e)]),es,as,rs,ls,is,bs,ps])],64)}var ms=l(t,[["render",cs]]);export{ms as default};
