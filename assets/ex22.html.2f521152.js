import{_ as r,r as l,o,c as p,a as n,b as a,F as t,d as s,e as i}from"./app.91d0dc40.js";const b={},u=n("h1",{id:"\u7EC3\u4E60-22-\u6587\u4EF6\u7CFB\u7EDF-\u79FB\u52A8\u6570\u636E-tar-dd",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7EC3\u4E60-22-\u6587\u4EF6\u7CFB\u7EDF-\u79FB\u52A8\u6570\u636E-tar-dd","aria-hidden":"true"},"#"),s(" \u7EC3\u4E60 22\uFF1A\u6587\u4EF6\u7CFB\u7EDF\uFF1A\u79FB\u52A8\u6570\u636E\uFF0C"),n("code",null,"tar"),s("\uFF0C"),n("code",null,"dd")],-1),c=s("\u539F\u6587\uFF1A"),d={href:"https://archive.fo/JSknE",target:"_blank",rel:"noopener noreferrer"},m=s("Exercise 22. Filesystems: moving data around: tar, dd"),f=s("\u8BD1\u8005\uFF1A"),x={href:"https://github.com/wizardforcel",target:"_blank",rel:"noopener noreferrer"},g=s("\u98DE\u9F99"),h=s("\u534F\u8BAE\uFF1A"),v={href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank",rel:"noopener noreferrer"},w=s("CC BY-NC-SA 4.0"),_=s("\u81EA\u8C6A\u5730\u91C7\u7528"),U={href:"https://translate.google.cn/",target:"_blank",rel:"noopener noreferrer"},$=s("\u8C37\u6B4C\u7FFB\u8BD1"),k=i(`<p>\u73B0\u5728\u662F\u65F6\u5019\u81EA\u5DF1\u770B\u770B\u4E86\uFF0CLinux \u4E2D\u7684\u6240\u6709\u4E1C\u897F\u53EA\u662F\u4E00\u4E2A\u6587\u4EF6\u3002</p><p>\u8FD9\u4E2A\u7EC3\u4E60\u662F\u4E00\u4E2A\u5F88\u5927\u7684\u7EC3\u4E60\uFF0C\u4F46\u662F\u770B\u770B\u4F60\u5B66\u5230\u4E86\u4EC0\u4E48\u3002\u5B8C\u6210\u4E4B\u540E\uFF0C\u5728<code>man</code>\u4E2D\u67E5\u770B\u6240\u6709\u6545\u610F\u4E0D\u89E3\u91CA\u7684\u7A0B\u5E8F\u53C2\u6570\uFF0C\uFF0C\u5E76\u8BD5\u56FE\u81EA\u5DF1\u89E3\u91CA\u6BCF\u4E2A\u547D\u4EE4\u7684\u4F5C\u7528\u3002</p><p>\u73B0\u5728\u4F60\u5C06\u5B66\u4E60\u5982\u4F55\u73A9\u8F6C\u6570\u636E\u3002</p><h2 id="\u8FD9\u6837\u505A" tabindex="-1"><a class="header-anchor" href="#\u8FD9\u6837\u505A" aria-hidden="true">#</a> \u8FD9\u6837\u505A</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> 1: tar -czvf root.tgz /opt/root/
 2: tar -tzvf root.tgz
 3: cd /tmp
 4: tar -zxvf ~/root.tgz
 5: ls -al
 6: dd_if=$(mount | grep /tmp | cut -d &#39; &#39; -f 1) &amp;&amp; echo $dd_if
 7: sudo dd if=$dd_if of=~/tmp.img bs=10M
 8: cd &amp;&amp; ls -alh
 9: sudo losetup /dev/loop1 ~/tmp.img &amp;&amp; sudo mount /dev/loop1 /mnt/
10: ls -al /mnt
11: sudo umount /mnt &amp;&amp; sudo losetup -d /dev/loop1
12: sudo umount $dd_if &amp;&amp; sudo mkfs.ext3 $dd_if
13: new_uuid=$(sudo tune2fs -l $dd_if | awk &#39;/UUID/{print $3}&#39;) &amp;&amp; echo $new_uuid
14: grep &#39;/tmp&#39; /etc/fstab
15: sed &quot;s/^UUID=.*\\/tmp\\s\\+ext3\\s\\+defaults\\s\\+[0-9]\\s\\+[0-9]\\s\\?/UUID=$new_uuid \\/tmp ext3 defaults 0 2/&quot; /etc/fstab
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u73B0\u5728\u4F7F\u7528<code>sudo tune2fs -l</code>\u548C<code>sudo blkid</code>\u68C0\u67E5\u8F93\u51FA\u3002\u5982\u679C<code>/etc/fstab</code>\u4E2D\u7684 UUID \u66FF\u6362\u770B\u8D77\u6765\u6B63\u5E38\uFF0C\u6267\u884C\u5B9E\u9645\u7684\u66FF\u6362\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>16: sudo sed -i&#39;.bak&#39; &quot;s/^UUID=.*\\/tmp\\s\\+ext3\\s\\+defaults\\s\\+[0-9]\\s\\+[0-9]\\s\\?/UUID=$new_uuid \\/tmp ext3 defaults 0 2/&quot; /etc/fstab
17: sudo mount -a &amp;&amp; ls /tmp
18: sudo umount /tmp &amp;&amp; pv ~/tmp.img | sudo dd of=$dd_if bs=10M
19: new_uuid=$(sudo tune2fs -l $dd_if | awk &#39;/UUID/{print $3}&#39;) &amp;&amp; echo $new_uuid
20: sudo sed -i&#39;.bak&#39; &quot;s/^UUID=.*\\/tmp\\s\\+ext3\\s\\+defaults\\s\\+[0-9]\\s\\+[0-9]\\s\\?/UUID=$new_uuid \\/tmp ext3 defaults 0 2/&quot; /etc/fstab
21: sudo mount -a
22: rm -v tmp.img
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8F93\u5165<code>y</code>\u5E76\u6309\u4E0B<code>&lt;ENTER&gt;</code>\u3002</p><h2 id="\u4F60\u4F1A\u770B\u5230\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4F60\u4F1A\u770B\u5230\u4EC0\u4E48" aria-hidden="true">#</a> \u4F60\u4F1A\u770B\u5230\u4EC0\u4E48</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:~$ tar -czvf root.tgz /opt/root/
tar: Removing leading &#39;/&#39; from member names
/opt/root/
/opt/root/bin/
/opt/root/bin/bash
/opt/root/lib64/
/opt/root/lib64/ld-linux-x86-64.so.2
/opt/root/lib/
/opt/root/lib/libdl.so.2
/opt/root/lib/libncurses.so.5
/opt/root/lib/libc.so.6
user1@vm1:~$ tar -tzvf root.tgz
drwxr-xr-x root/root         0 2012-07-05 03:14 opt/root/
drwxr-xr-x root/root         0 2012-07-05 03:14 opt/root/bin/
-rwxr-xr-x root/root    926536 2012-07-05 03:14 opt/root/bin/bash
drwxr-xr-x root/root         0 2012-07-05 03:14 opt/root/lib64/
-rwxr-xr-x root/root    128744 2012-07-05 03:14 opt/root/lib64/ld-linux-x86-64.so.2
drwxr-xr-x root/root         0 2012-07-05 03:14 opt/root/lib/
-rw-r--r-- root/root     14696 2012-07-05 03:14 opt/root/lib/libdl.so.2
-rw-r--r-- root/root    286776 2012-07-05 03:14 opt/root/lib/libncurses.so.5
-rwxr-xr-x root/root   1437064 2012-07-05 03:14 opt/root/lib/libc.so.6
user1@vm1:~$ cd /tmp
user1@vm1:/tmp$ tar -zxvf ~/root.tgz
opt/root/
opt/root/bin/
opt/root/bin/bash
opt/root/lib64/
opt/root/lib64/ld-linux-x86-64.so.2
opt/root/lib/
opt/root/lib/libdl.so.2
opt/root/lib/libncurses.so.5
opt/root/lib/libc.so.6
user1@vm1:/tmp$ ls -al
total 19
drwxrwxrwt  6 root  root   1024 Jul  5 04:17 .
drwxr-xr-x 22 root  root   1024 Jul  3 08:29 ..
drwxrwxrwt  2 root  root   1024 Jul  3 08:41 .ICE-unix
drwx------  2 root  root  12288 Jul  3 07:47 lost+found
drwxr-xr-x  3 user1 user1  1024 Jul  5 03:24 opt
-rw-r--r--  1 root  root    489 Jul  3 10:14 sources.list
-r--r-----  1 root  root    491 Jul  3 10:21 sudoers
drwxrwxrwt  2 root  root   1024 Jul  3 08:41 .X11-unix
user1@vm1:/tmp$ dd_if=$(mount | grep /tmp | cut -d &#39; &#39; -f 1) &amp;&amp; echo $dd_if
/dev/sda8
user1@vm1:~$ cd &amp;&amp; ls -alh
total 243M
drwxr-xr-x 3 user1 user1 4.0K Jul  5 04:27 .
drwxr-xr-x 4 root  root  4.0K Jul  3 08:39 ..
-rw------- 1 user1 user1   22 Jul  3 10:45 .bash_history
-rw-r--r-- 1 user1 user1  220 Jul  3 08:39 .bash_logout
-rw-r--r-- 1 user1 user1 3.2K Jul  3 08:39 .bashrc
-rw------- 1 user1 user1   52 Jul  5 04:12 .lesshst
drwxr-xr-x 3 user1 user1 4.0K Jul  5 03:23 opt
-rw-r--r-- 1 user1 user1  675 Jul  3 08:39 .profile
-rw-r--r-- 1 user1 user1 1.3M Jul  5 04:25 root.tgz
-rw-r--r-- 1 root  root  241M Jul  5 04:36 tmp.img
user1@vm1:~$ sudo losetup /dev/loop1 ~/tmp.img &amp;&amp; sudo mount /dev/loop1 /mnt/
user1@vm1:~$ ls -al /mnt
total 19
drwxrwxrwt  6 root  root   1024 Jul  5 04:17 .
drwxr-xr-x 22 root  root   1024 Jul  3 08:29 ..
drwxrwxrwt  2 root  root   1024 Jul  3 08:41 .ICE-unix
drwx------  2 root  root  12288 Jul  3 07:47 lost+found
drwxr-xr-x  3 user1 user1  1024 Jul  5 03:24 opt
-rw-r--r--  1 root  root    489 Jul  3 10:14 sources.list
-r--r-----  1 root  root    491 Jul  3 10:21 sudoers
drwxrwxrwt  2 root  root   1024 Jul  3 08:41 .X11-unix
user1@vm1:~$ sudo umount /mnt &amp;&amp; sudo losetup -d /dev/loop1
user1@vm1:~$ sudo umount $dd_if &amp;&amp; sudo mkfs.ext3 $dd_if
mke2fs 1.41.12 (17-May-2010)
Filesystem label=
OS type: Linux
Block size=1024 (log=0)
Fragment size=1024 (log=0)
Stride=0 blocks, Stripe width=0 blocks
61752 inodes, 246784 blocks
12339 blocks (5.00%) reserved for the super user
First data block=1
Maximum filesystem blocks=67371008
31 block groups
8192 blocks per group, 8192 fragments per group
1992 inodes per group
Superblock backups stored on blocks:
        8193, 24577, 40961, 57345, 73729, 204801, 221185
 
Writing inode tables: done
Creating journal (4096 blocks): done
Writing superblocks and filesystem accounting information: done
 
This filesystem will be automatically checked every 27 mounts or
180 days, whichever comes first.  Use tune2fs -c or -i to override.
user1@vm1:~$ new_uuid=$(sudo tune2fs -l $dd_if | awk &#39;/UUID/{print $3}&#39;) &amp;&amp; echo $new_uuid
f8288adc-3ef9-4a6e-aab2-92624276b8ba
user1@vm1:~$ grep &#39;/tmp&#39; /etc/fstab
# /tmp was on /dev/sda8 during installation
UUID=011b4530-e4a9-4d13-926b-48d9e33b64bf /tmp ext3 defaults 0 2
user1@vm1:~$ sed &quot;s/^UUID=.*\\/tmp\\s\\+ext3\\s\\+defaults\\s\\+[0-9]\\s\\+[0-9]\\s\\?/UUID=$new_uuid \\/tmp ext3 defaults 0 2/&quot; /etc/fstab
# /etc/fstab: static file system information.
#
# Use &#39;blkid&#39; to print the universally unique identifier for a
# device; this may be used with UUID= as a more robust way to name devices
# that works even if disks are added and removed. See fstab(5).
#
# &lt;file system&gt; &lt;mount point&gt;   &lt;type&gt;  &lt;options&gt;       &lt;dump&gt;  &lt;pass&gt;
proc            /proc           proc    defaults        0       0
# / was on /dev/sda1 during installation
UUID=91aacf33-0b35-474c-9c61-311e04b0bed1 /               ext3    errors=remount-ro 0       1
# /home was on /dev/sda9 during installation
UUID=e27b0efb-8cf0-439c-9ebe-d59c927dd590 /home           ext3    defaults        0       2
# /tmp was on /dev/sda8 during installation
UUID=f8288adc-3ef9-4a6e-aab2-92624276b8ba /tmp ext3 defaults 0 2
# /usr was on /dev/sda5 during installation
UUID=9f49821b-7f94-4915-b9a9-ed9f12bb6847 /usr            ext3    defaults        0       2
# /var was on /dev/sda6 during installation
UUID=b7e908a1-a1cd-4d5c-bc79-c3a99d003e7c /var            ext3    defaults        0       2
# swap was on /dev/sda7 during installation
UUID=292981d7-5a17-488f-8d9a-176b65f45d46 none            swap    sw              0       0
/dev/scd0       /media/cdrom0   udf,iso9660 user,noauto     0       0
sudo sed -i&#39;.bak&#39; &quot;s/^UUID=.*\\/tmp\\s\\+ext3\\s\\+defaults\\s\\+[0-9]\\s\\+[0-9]\\s\\?/UUID=$new_uuid \\/tmp ext3 defaults 0 2/&quot; /etc/fstab
sudo mount -a &amp;&amp; ls /tmp
user1@vm1:~$ sudo umount /tmp &amp;&amp; pv ~/tmp.img | sudo dd of=$dd_if bs=10M
 241MB 0:00:04 [54.2MB/s] [===============================================================================================================&gt;] 100%
0+1928 records in
0+1928 records out
252706816 bytes (253 MB) copied, 5.52494 s, 45.7 MB/s
user1@vm1:~$ rm -v tmp.img
rm: remove write-protected regular file \`tmp.img&#39;? y
removed \`tmp.img&#39;
user1@vm1:~$
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br></div></div><h2 id="\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#\u89E3\u91CA" aria-hidden="true">#</a> \u89E3\u91CA</h2><ol><li><p>\u5728\u4F60\u7684\u4E3B\u76EE\u5F55\u4E2D\u521B\u5EFA\u5F52\u6863\u6216<code>/opt/root/</code>\u3002\u5F52\u6863\u6587\u4EF6\u7684\u6269\u5C55\u540D\u662F<code>.tgz</code>\uFF0C\u56E0\u4E3A\u8FD9\u4E2A\u5F52\u6863\u5B9E\u9645\u4E0A\u7531\u4E24\u90E8\u5206\u7EC4\u6210\uFF0C\u5C31\u50CF\u662F\u4FC4\u7F57\u65AF\u5957\u5A03\u3002\u7B2C\u4E00\u90E8\u5206\u7531\u5B57\u6BCD<code>t</code>\u6307\u5B9A\uFF0C\u662F\u4E00\u4E2A\u5927\u6587\u4EF6\uFF0C\u5176\u4E2D\u6240\u6709\u5F52\u6863\u6587\u4EF6\u7531\u7A0B\u5E8F<code>tar</code>\u5408\u5E76\u3002\u7B2C\u4E8C\u90E8\u5206\u7531\u5B57\u6BCD<code>gz</code>\u6307\u5B9A \uFF0C\u610F\u5473\u7740<code>tar</code>\u8C03\u7528<code>gzip</code>\u7A0B\u5E8F\u6765\u538B\u7F29\u5B83\u3002</p></li><li><p>\u6D4B\u8BD5\u8FD9\u4E2A\u5F52\u6863\u3002</p></li><li><p>\u5C06\u76EE\u5F55\u66F4\u6539\u4E3A<code>/tmp</code>\u3002</p></li><li><p>\u89E3\u538B\u4F60\u7684\u5F52\u6863\u3002</p></li><li><p>\u6253\u5370\u76EE\u5F55\u5185\u5BB9\u3002</p></li><li><p>\u63D0\u53D6\u6302\u8F7D\u5728<code>/tmp</code>\u4E0A\u7684\u5206\u533A\u7684\u540D\u79F0\uFF0C\u5C06\u5176\u5B58\u50A8\u5728<code>dd_if</code>\u53D8\u91CF\u4E2D\uFF0C\u5982\u679C\u63D0\u53D6\u6210\u529F\uFF0C\u6253\u5370\u51FA<code>dd_if</code>\u503C\u3002<code>if</code>\u4EE3\u8868\u8F93\u5165\u6587\u4EF6\u3002</p></li><li><p>\u5C06\u6574\u4E2A\u5206\u533A\u590D\u5236\u5230\u4F60\u7684\u4E3B\u76EE\u5F55\u4E2D\u7684<code>tmp.img</code>\u3002dd \u4F7F\u7528\u8D85\u7EA7\u7528\u6237\u8C03\u7528\uFF0C\u56E0\u4E3A\u4F60\u6B63\u5728\u8BBF\u95EE\u4EE3\u8868\u4F60\u7684\u5206\u533A\u7684\u6587\u4EF6<code>/dev/sda8</code>\uFF0C\u8BE5\u5206\u533A\u5BF9\u666E\u901A\u7528\u6237\u4E0D\u53EF\u8BBF\u95EE\u3002</p></li><li><p>\u5C06\u76EE\u5F55\u66F4\u6539\u4E3A\u4F60\u7684\u4E3B\u76EE\u5F55\u5E76\u6253\u5370\u51FA\u5176\u5185\u5BB9\u3002</p></li><li><p>\u544A\u8BC9 Linux \u5C06<code>tmp.img</code>\u6587\u4EF6\u7528\u4F5C\uFF08\u4E00\u79CD\uFF09\u7269\u7406\u5206\u533A\u5E76\u6302\u8F7D\u5B83\u3002</p></li><li><p>\u6253\u5370\u51FA<code>tmp.img</code>\u7684\u5185\u5BB9\u3002\u4F60\u53EF\u4EE5\u770B\u5230\u5B83\u771F\u7684\u662F<code>/tmp</code>\u7684\u7CBE\u786E\u526F\u672C \u3002</p></li><li></li><li><p>\u89E3\u9664\u6302\u8F7D<code>tmp.img</code>\uFF0C\u5E76\u544A\u8BC9 Linux \u505C\u6B62\u5C06\u5176\u770B\u505A\u5206\u533A\u3002</p></li><li><p>\u89E3\u9664\u6302\u8F7D<code>/tmp</code>\u5E76\u5728\u90A3\u91CC\u521B\u5EFA\u65B0\u7684\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u5220\u9664\u8BE5\u8FC7\u7A0B\u4E2D\u7684\u6240\u6709\u4E1C\u897F\u3002</p></li><li><p>\u63D0\u53D6\u4F60\u7684\u65B0<code>/tmp</code>\u6587\u4EF6\u7CFB\u7EDF\u7684UUID \uFF0C\u5C06\u5176\u5B58\u50A8\u5728<code>new_uuid</code>\u4E2D\uFF0C\u5E76\u6253\u5370\u51FA\u6765\u3002</p></li><li><p>\u4ECE<code>/etc/fstab</code>\u4E2D\u6253\u5370\u63CF\u8FF0\u65E7\u7684<code>/tmp</code>\u5206\u533A\u7684\u4E00\u884C\u3002</p></li><li><p>\u5411\u4F60\u5C55\u793A\uFF0C\u4FEE\u6539\u540E\u7684<code>/etc/fstab</code>\u5982\u4F55\u5DE5\u4F5C\u3002\u901A\u8FC7\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u6765\u5B8C\u6210\uFF0C\u8FD9\u4E2A\u8868\u8FBE\u5F0F\u7528\u4F5C\u63A9\u7801\uFF0C\u5B9A\u4E49\u4E86\u8FD9\u4E00\u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>UUID=f8288adc-3ef9-4a6e-aab2-92624276b8ba /tmp ext3 defaults 0 2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5B8C\u6210\u8FD9\u672C\u4E66\u540E\uFF0C\u6211\u4F1A\u7ED9\u4F60\u4E00\u4E2A\u94FE\u63A5\uFF0C\u8BA9\u4F60\u5B66\u4E60\u5982\u4F55\u521B\u5EFA\u8FD9\u6837\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u3002</p></li><li><p>\u4F7F\u7528\u65B0\u7684 UUID \u5B9E\u9645\u66FF\u6362<code>/tmp</code>\u65E7\u7684 UUID\u3002</p></li><li><p>\u6302\u8F7D<code>/etc/fstab</code>\u4E2D\u63CF\u8FF0\u7684\u6240\u6709\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u5E76\u5217\u51FA\u65B0<code>/tmp</code>\u7684\u5185\u5BB9</p></li><li><p>\u89E3\u9664\u6302\u8F7D\u65B0\u7684<code>/tmp</code>\u5E76\u4ECE<code>tmp.img</code>\u6062\u590D\u65E7<code>/tmp</code>\u3002</p></li><li><p>\u83B7\u53D6\u65E7<code>/tmp</code>\u7684 UUID\uFF0C\u5B83\u5B9E\u9645\u4E0A\u4E0E\u521B\u5EFA\u65B0\u6587\u4EF6\u7CFB\u7EDF\u4E4B\u524D\u76F8\u540C\uFF0C\u56E0\u4E3A<code>tmp.img</code>\u662F\u65E7\u7684<code>/ tmp</code>\u7684\u5B8C\u7F8E\u526F\u672C\u3002</p></li><li><p>\u5728<code>/etc/fstab</code>\u4E2D\u7528\u65E7\u7684 UUID \u66FF\u6362\u65B0\u7684 UUID \u3002</p></li><li><p>\u4ECE<code>/etc/fstab</code>\u6302\u8F7D\u6240\u6709\u6587\u4EF6\u7CFB\u7EDF\u3002\u5982\u679C\u6B64\u547D\u4EE4\u4E0D\u4F1A\u5BFC\u81F4\u9519\u8BEF\uFF0C\u4F60\u53EF\u80FD\u4E00\u5207\u6B63\u5E38\u3002\u606D\u559C\u3002</p></li><li><p>\u4ECE\u4F60\u7684\u4E3B\u76EE\u5F55\u4E2D\u5220\u9664<code>tmp.img</code>\u3002</p></li></ol><h2 id="\u9644\u52A0\u9898" tabindex="-1"><a class="header-anchor" href="#\u9644\u52A0\u9898" aria-hidden="true">#</a> \u9644\u52A0\u9898</h2><ul><li>\u5C1D\u8BD5\u8BE6\u7EC6\u89E3\u91CA\u6BCF\u4E2A\u547D\u4EE4\u7684\u4F5C\u7528\u3002\u62FF\u51FA\u4E00\u5F20\u7EB8\uFF0C\u628A\u5B83\u5168\u90E8\u5199\u51FA\u6765\u3002\u5728<code>man</code>\u4E2D\u67E5\u627E\u5728\u6240\u6709\u4E0D\u80FD\u5F88\u597D\u7406\u89E3\u7684\u547D\u4EE4\u548C\u53C2\u6570\u3002</li><li>\u8FD9\u4E2A\u6709\u4E9B\u8FC7\u65E9\u4E86\uFF0C\u4F46\u4E3A\u4EC0\u4E48\u4F60\u80FD\u4F5C\u4E3A<code>user1</code>\u6765\u53D1\u51FA\u5220\u9664\u547D\u4EE4\uFF0C\u4ECE\u4F60\u7684\u4E3B\u76EE\u5F55\u4E2D\u5220\u9664<code>tmp.img</code>\uFF0C\u8003\u8651\u5230<code>tmp.img</code>\u7531 root \u521B\u5EFA\uFF1F</li></ul>`,14);function I(D,J){const e=l("ExternalLinkIcon");return o(),p(t,null,[u,n("blockquote",null,[n("p",null,[c,n("a",d,[m,a(e)])])]),n("blockquote",null,[n("p",null,[f,n("a",x,[g,a(e)])])]),n("blockquote",null,[n("p",null,[h,n("a",v,[w,a(e)])])]),n("blockquote",null,[n("p",null,[_,n("a",U,[$,a(e)])])]),k],64)}var z=r(b,[["render",I]]);export{z as default};
