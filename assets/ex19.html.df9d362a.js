import{_ as t,r as l,o,c as p,a as n,b as a,F as d,d as s,e as r}from"./app.91d0dc40.js";const i={},b=n("h1",{id:"\u7EC3\u4E60-19-\u6587\u4EF6\u7CFB\u7EDF-\u6302\u8F7D-mount-etc-fstab",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7EC3\u4E60-19-\u6587\u4EF6\u7CFB\u7EDF-\u6302\u8F7D-mount-etc-fstab","aria-hidden":"true"},"#"),s(" \u7EC3\u4E60 19\uFF1A\u6587\u4EF6\u7CFB\u7EDF\uFF1A\u6302\u8F7D\uFF0C"),n("code",null,"mount"),s("\uFF0C"),n("code",null,"/etc/fstab")],-1),c=s("\u539F\u6587\uFF1A"),u={href:"https://archive.fo/9OnRm",target:"_blank",rel:"noopener noreferrer"},m=s("Exercise 19. Filesystems: mounting, mount, /etc/fstab"),f=s("\u8BD1\u8005\uFF1A"),v={href:"https://github.com/wizardforcel",target:"_blank",rel:"noopener noreferrer"},h=s("\u98DE\u9F99"),x=s("\u534F\u8BAE\uFF1A"),g={href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank",rel:"noopener noreferrer"},y=s("CC BY-NC-SA 4.0"),w=s("\u81EA\u8C6A\u5730\u91C7\u7528"),_={href:"https://translate.google.cn/",target:"_blank",rel:"noopener noreferrer"},U=s("\u8C37\u6B4C\u7FFB\u8BD1"),k=r(`<p>\u6211\u5E0C\u671B\u4F60\u719F\u6089\u5206\u533A\u7684\u6982\u5FF5\u3002\u5982\u679C\u6CA1\u6709\uFF0C\u6211\u4F1A\u7B80\u8981\u4ECB\u7ECD\u4E00\u4E0B\u3002\u9996\u5148\u5F15\u7528\u81EA\u7EF4\u57FA\u767E\u79D1\uFF1A</p><blockquote><p>\u78C1\u76D8\u5206\u533A\u662F\u4E00\u79CD\u884C\u4E3A\uFF0C\u5C06\u786C\u76D8\u9A71\u52A8\u5668\u5206\u4E3A\u591A\u4E2A\u903B\u8F91\u5B58\u50A8\u5355\u5143\uFF0C\u5B83\u4EEC\u88AB\u79F0\u4E3A\u5206\u533A\uFF0C\u6765\u5C06\u4E00\u4E2A\u7269\u7406\u78C1\u76D8\u9A71\u52A8\u5668\u89C6\u4E3A\u591A\u4E2A\u78C1\u76D8\u3002</p></blockquote><p>\u770B\u4E00\u770B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:~$ sudo parted /dev/vda
GNU Parted 2.3
Using /dev/vda
Welcome to GNU Parted! Type &#39;help&#39; to view a list of commands.
(parted) unit GB
(parted) p
Model: Virtio Block Device (virtblk)
Disk /dev/vda: 17.2GB
Sector size (logical/physical): 512B/512B
Partition Table: msdos
 
Number  Start   End     Size    Type      File system     Flags
 1      0.00GB  13.3GB  13.3GB  extended
 5      0.00GB  1.02GB  1.02GB  logical   ext3            boot
 6      1.03GB  2.05GB  1.02GB  logical   linux-swap(v1)
 7      2.05GB  3.07GB  1.02GB  logical   ext3
 8      3.07GB  5.12GB  2.05GB  logical   ext3
 9      5.12GB  9.22GB  4.09GB  logical   ext3
10      9.22GB  13.3GB  4.09GB  logical   ext3
 
(parted)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,4),q=s("\u8FD9\u662F\u4E00\u4E2A\u7269\u7406\u786C\u76D8\uFF0C\u5206\u4E3A 7 \u4E2A\u4E0D\u540C\u7684\u5206\u533A\u3002\u8FD9\u6837\u505A\u7684\u539F\u56E0\u5F88\u591A\uFF0C\u4F46\u6700\u597D\u88AB\u7406\u89E3\u4E3A\u201C\u5206\u6CBB\u201D\u539F\u5219\u7684\u5E94\u7528\u3002\u4EE5\u8FD9\u79CD\u65B9\u5F0F\u5206\u5272\u65F6\uFF0C\u6D41\u6C13\u7A0B\u5E8F\u4E0D\u80FD\u901A\u8FC7\u5360\u7528\u6240\u6709\u78C1\u76D8\u7A7A\u95F4\uFF0C\u4F7F\u6574\u4E2A\u670D\u52A1\u5668\u5D29\u6E83\uFF0C\u8BE5\u7A0B\u5E8F\u5C06\u9650\u5236\u5728\u5176\u5206\u533A\u4E2D\u3002\u6211\u4E0D\u4F1A\u518D\u8C08\u8BBA\u78C1\u76D8\u5206\u533A\uFF0C\u4F46\u662F\u6211\u4F1A\u7EE7\u7EED\u5173\u6CE8\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u518D\u6B21\u5F15\u7528"),B={href:"http://en.wikipedia.org/wiki/File_system",target:"_blank",rel:"noopener noreferrer"},D=s("\u7EF4\u57FA\u767E\u79D1"),I=s("\uFF1A"),G=r(`<blockquote><p>\u6587\u4EF6\u7CFB\u7EDF\u662F\u4E00\u79CD\u7EC4\u7EC7\u6570\u636E\u7684\u624B\u6BB5\u3002\u901A\u8FC7\u63D0\u4F9B\u5B58\u50A8\uFF0C\u68C0\u7D22\u548C\u66F4\u65B0\u6570\u636E\u7684\u8FC7\u7A0B\uFF0C\u4EE5\u53CA\u7BA1\u7406\u5305\u542B\u5B83\u7684\u8BBE\u5907\u4E0A\u7684\u53EF\u7528\u7A7A\u95F4\uFF0C\u6570\u636E\u9884\u671F\u5728\u7A0B\u5E8F\u7EC8\u6B62\u540E\u4FDD\u7559\u3002\u6587\u4EF6\u7CFB\u7EDF\u4EE5\u6709\u6548\u7684\u65B9\u5F0F\u7EC4\u7EC7\u6570\u636E\uFF0C\u5E76\u6839\u636E\u8BBE\u5907\u7684\u7279\u5B9A\u7279\u6027\u8FDB\u884C\u8C03\u6574\u3002\u5728\u64CD\u4F5C\u7CFB\u7EDF\u548C\u6587\u4EF6\u7CFB\u7EDF\u4E4B\u95F4\uFF0C\u901A\u5E38\u5B58\u5728\u7D27\u8026\u5408\u3002\u4E00\u4E9B\u6587\u4EF6\u7CFB\u7EDF\u63D0\u4F9B\u4E86\u673A\u5236\u6765\u63A7\u5236\u6570\u636E\u548C\u5143\u6570\u636E\u7684\u8BBF\u95EE\u3002\u786E\u4FDD\u53EF\u9760\u6027\u662F\u6587\u4EF6\u7CFB\u7EDF\u7684\u4E3B\u8981\u804C\u8D23\u3002\u4E00\u4E9B\u6587\u4EF6\u7CFB\u7EDF\u5141\u8BB8\u591A\u4E2A\u7A0B\u5E8F\u51E0\u4E4E\u540C\u65F6\u66F4\u65B0\u540C\u4E00\u4E2A\u6587\u4EF6\u3002</p></blockquote><blockquote><p>\u7C7B Unix \u64CD\u4F5C\u7CFB\u7EDF\u521B\u5EFA\u4E00\u4E2A\u865A\u62DF\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u8FD9\u4F7F\u5F97\u6240\u6709\u8BBE\u5907\u4E0A\u7684\u6240\u6709\u6587\u4EF6\u4F3C\u4E4E\u90FD\u5B58\u5728\u4E8E\u5355\u4E2A\u5C42\u6B21\u7ED3\u6784\u4E2D\u3002\u8FD9\u610F\u5473\u7740\uFF0C\u5728\u8FD9\u4E9B\u7CFB\u7EDF\u4E2D\uFF0C\u6709\u4E00\u4E2A\u6839\u76EE\u5F55\uFF0C\u7CFB\u7EDF\u4E0A\u5B58\u5728\u7684\u6BCF\u4E2A\u6587\u4EF6\u4F4D\u4E8E\u5B83\u4E0B\u65B9\u7684\u67D0\u4E2A\u5730\u65B9\u3002\u7C7B Unix \u7CFB\u7EDF\u53EF\u4EE5\u4F7F\u7528 RAM \u78C1\u76D8\u6216\u7F51\u7EDC\u5171\u4EAB\u8D44\u6E90\u4F5C\u4E3A\u5176\u6839\u76EE\u5F55\u3002</p></blockquote><p>\u8FD9\u610F\u5473\u7740\uFF0C\u6240\u6709\u6587\u4EF6\u7CFB\u7EDF\u90FD\u96C6\u6210\u5728\u4E00\u4E2A\u5927\u6811\u4E2D\u3002\u5BF9\u4E8E\u719F\u6089 Microsoft Windows \u7684\u4EBA\u6765\u8BF4\uFF0C\u8FD9\u610F\u5473\u7740\u6BD4\u8D77<code>C:\\</code>\u548C<code>D:\\</code>\u7B49\u76D8\u7B26\uFF0C\u8FD9\u79CD\u547D\u540D\u65B9\u6848\u6709\u4E00\u4E2A\u5355\u72EC\u7684\u6839\uFF0C<code>/</code>\uFF0C\u6240\u6709\u5176\u4ED6\u5206\u533A\u90FD\u8FDE\u63A5\u5230\u5B83\u4E0A\u9762\u3002\u5C06\u6587\u4EF6\u7CFB\u7EDF\u8FDE\u63A5\u5230\u73B0\u6709\u76EE\u5F55\u7684\u8FC7\u7A0B\u79F0\u4E3A\u6302\u8F7D\u3002\u8FDE\u63A5\u6587\u4EF6\u7CFB\u7EDF\u7684\u76EE\u5F55\u79F0\u4E3A\u6302\u8F7D\u70B9\u3002\u540C\u6837\uFF0C\u770B\u4E00\u770B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:~$ mount
/dev/vda5 on / type ext3 (rw,errors=remount-ro)
tmpfs on /lib/init/rw type tmpfs (rw,nosuid,mode=0755)
proc on /proc type proc (rw,noexec,nosuid,nodev)
sysfs on /sys type sysfs (rw,noexec,nosuid,nodev)
udev on /dev type tmpfs (rw,mode=0755)
tmpfs on /dev/shm type tmpfs (rw,nosuid,nodev)
devpts on /dev/pts type devpts (rw,noexec,nosuid,gid=5,mode=620)
/dev/vda10 on /home type ext3 (rw)
/dev/vda7 on /tmp type ext3 (rw)
/dev/vda9 on /usr type ext3 (rw)
/dev/vda8 on /var type ext3 (rw)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u8FD9\u662F\u6211\u4E4B\u524D\u5C55\u793A\u7ED9\u4F60\u7684\u76F8\u540C\u5206\u533A\uFF0C\u4F60\u53EF\u4EE5\u5728\u8FD9\u4E2A\u5217\u8868\u4E2D\u770B\u5230\u6302\u8F7D\u70B9\u3002\u4E0D\u4EE5<code>/dev/vda</code>\u5F00\u5934\u7684\u662F\u865A\u62DF\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u5B83\u5141\u8BB8\u8BBF\u95EE\u4E0D\u540C\u7684\u7CFB\u7EDF\u8BBE\u65BD\uFF0C\u4F46\u5B83\u4EEC\u548C\u6B64\u7EC3\u4E60\u65E0\u5173\u3002\u73B0\u5728\u6211\u4EEC\u6765\u770B\u770B<code>/etc/fstab</code>\u6587\u4EF6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:~$ cat /etc/fstab
# /etc/fstab: static file system information.
#
# Use &#39;blkid&#39; to print the universally unique identifier for a
# device; this may be used with UUID= as a more robust way to name devices
# that works even if disks are added and removed. See fstab(5).
#
# &lt;file system&gt; &lt;mount point&gt;   &lt;type&gt;  &lt;options&gt;       &lt;dump&gt;  &lt;pass&gt;
proc            /proc           proc    defaults    0       0
# / was on /dev/vda5 during installation
UUID=128559db-a2e0-4983-91ad-d4f43f27da49 /         ext3    errors=remount-ro 0       1
# /home was on /dev/vda10 during installation
UUID=32852d29-ddee-4a8d-9b1e-f46569a6b897 /home     ext3    defaults        0       2
# /tmp was on /dev/vda7 during installation
UUID=869db6b4-aea0-4a25-8bd2-f0b53dd7a88e /tmp      ext3    defaults        0       2
# /usr was on /dev/vda9 during installation
UUID=0221be16-496b-4277-b131-2371ce097b44 /usr      ext3    defaults        0       2
# /var was on /dev/vda8 during installation
UUID=2db00f94-3605-4229-8813-0ee23ad8634e /var      ext3    defaults        0       2
# swap was on /dev/vda6 during installation
UUID=3a936af2-2c04-466d-b98d-09eacc5d104c none      swap    sw              0       0
/dev/scd0       /media/cdrom0   udf,iso9660 user,noauto     0       0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u770B\u8D77\u6765\u5F88\u6050\u6016\uFF0C\u4F46\u8BA9\u6211\u4EEC\u9009\u53D6\u4E00\u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># &lt;file system&gt;                             &lt;mount point&gt;  &lt;type&gt;  &lt;options&gt;         &lt;dump&gt;  &lt;pass&gt;
UUID=128559db-a2e0-4983-91ad-d4f43f27da49   /              ext3    errors=remount-ro 0       1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6309\u7167\u5B57\u6BB5\u5C06\u5176\u62C6\u5F00\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>UUID=128559db-a2e0-4983-91ad-d4f43f27da49 # Filesystem to mount. This UUID is synonim for /dev/vda5
/                    # This is root filesystem, mount it to /
ext3                 # This is ext3 filesystem. There are many different filesystems out there
errors=remount-ro    # If any errors encountered during mounting filesystem should be remounted read-only
0                    # This filesystem should not be backed up by dump utility
1                    # This filesystem should be checked first by fsck utility
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u548C\u4E4B\u524D\u4E00\u6837\uFF0C\u8FD9\u4E9B\u4FE1\u606F\u53EF\u4EE5\u901A\u8FC7<code>man fstab</code>\u63D0\u4F9B\u7ED9\u4F60\u3002\u73B0\u5728\u6211\u5C06\u5411\u4F60\u5C55\u793A\u4F7F\u7528\u73B0\u6709\u6587\u4EF6\u7CFB\u7EDF\u7684\u51E0\u4E2A\u547D\u4EE4\uFF1A</p><ul><li><code>mount</code> - \u6253\u5370\u51FA\u6240\u6709\u5DF2\u6302\u8F7D\u7684\u6587\u4EF6\u7CFB\u7EDF\u3002</li><li><code>mount -a</code> - \u6302\u8F7D<code>/etc/fstab</code>\u4E2D\u63CF\u8FF0\u7684\u6240\u6709\u6587\u4EF6\u7CFB\u7EDF\u3002</li><li><code>mount /dev/sda&lt;N&gt; /&lt;mount point&gt;</code> - \u6302\u8F7D\u5206\u533A\u3002</li><li><code>umount /dev/sda&lt;N&gt; /&lt;mount point&gt;</code> - \u89E3\u9664\u6302\u8F7D\u5206\u533A\u3002</li><li><code>mount -h</code> - \u6253\u5370\u51FA\u4F7F\u7528<code>mount</code>\u7684\u7B80\u77ED\u5E2E\u52A9\u3002</li><li><code>fsck</code> - \u68C0\u67E5\u5206\u533A\u662F\u5426\u6709\u9519\u8BEF\u3002</li><li><code>blkid</code> - \u6253\u5370\u51FA\u552F\u4E00\u7684\u5206\u533A\u6807\u8BC6\u7B26\u3002</li></ul><p>\u73B0\u5728\uFF0C\u4F60\u5C06\u5B66\u4E60\u5982\u4F55\u5217\u51FA\u5DF2\u5B89\u88C5\u7684\u5206\u533A\uFF0C\u6302\u8F7D\u548C\u89E3\u9664\u6302\u8F7D\u5B83\u4EEC\u3002</p><h2 id="\u8FD9\u6837\u505A" tabindex="-1"><a class="header-anchor" href="#\u8FD9\u6837\u505A" aria-hidden="true">#</a> \u8FD9\u6837\u505A</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1: cat /etc/fstab
2: mount
3: sudo blkid
4: sudo umount /tmp
5: mount
6: sudo fsck /tmp
7: sudo mount -a
8: mount
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u4F60\u4F1A\u770B\u5230\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4F60\u4F1A\u770B\u5230\u4EC0\u4E48" aria-hidden="true">#</a> \u4F60\u4F1A\u770B\u5230\u4EC0\u4E48</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:~$ cat /etc/fstab
# /etc/fstab: static file system information.
#
# Use &#39;blkid&#39; to print the universally unique identifier for a
# device; this may be used with UUID= as a more robust way to name devices
# that works even if disks are added and removed. See fstab(5).
#
# &lt;file system&gt; &lt;mount point&gt;   &lt;type&gt;  &lt;options&gt;       &lt;dump&gt;  &lt;pass&gt;
proc            /proc           proc    defaults        0       0
# / was on /dev/sda1 during installation
UUID=05d469bb-dbfe-4d5a-9bb2-9c0fe9fa8577 /               ext3    errors=remount-ro 0       1
# /home was on /dev/sda9 during installation
UUID=a1b936a0-df38-4bf5-b095-6220ffdfc63c /home           ext3    defaults        0       2
# /tmp was on /dev/sda8 during installation
UUID=d0a86453-0dbb-4f33-a023-6c09fe9fa202 /tmp ext3 defaults 0 2
# /usr was on /dev/sda5 during installation
UUID=b9544cbb-cdb6-4f3b-89e7-a339f52bfac7 /usr            ext3    defaults        0       2
# /var was on /dev/sda6 during installation
UUID=e15e713b-5850-4bc3-b99e-ab6f1d037caa /var            ext3    defaults        0       2
# swap was on /dev/sda7 during installation
UUID=4d516f09-80ff-4956-8a75-e9757697f6b1 none            swap    sw              0       0
/dev/scd0       /media/cdrom0   udf,iso9660 user,noauto     0       0
user1@vm1:~$ mount
/dev/sda1 on / type ext3 (rw,errors=remount-ro)
tmpfs on /lib/init/rw type tmpfs (rw,nosuid,mode=0755)
proc on /proc type proc (rw,noexec,nosuid,nodev)
sysfs on /sys type sysfs (rw,noexec,nosuid,nodev)
udev on /dev type tmpfs (rw,mode=0755)
tmpfs on /dev/shm type tmpfs (rw,nosuid,nodev)
devpts on /dev/pts type devpts (rw,noexec,nosuid,gid=5,mode=620)
/dev/sda9 on /home type ext3 (rw)
/dev/sda5 on /usr type ext3 (rw)
/dev/sda6 on /var type ext3 (rw)
/dev/sda8 on /tmp type ext3 (rw)
/dev/sda8 on /tmp type ext3 (rw)
user1@vm1:~$ sudo blkid
/dev/sda1: UUID=&quot;05d469bb-dbfe-4d5a-9bb2-9c0fe9fa8577&quot; TYPE=&quot;ext3&quot;
/dev/sda5: UUID=&quot;b9544cbb-cdb6-4f3b-89e7-a339f52bfac7&quot; TYPE=&quot;ext3&quot;
/dev/sda6: UUID=&quot;e15e713b-5850-4bc3-b99e-ab6f1d037caa&quot; TYPE=&quot;ext3&quot;
/dev/sda7: UUID=&quot;4d516f09-80ff-4956-8a75-e9757697f6b1&quot; TYPE=&quot;swap&quot;
/dev/sda8: UUID=&quot;d0a86453-0dbb-4f33-a023-6c09fe9fa202&quot; TYPE=&quot;ext3&quot;
/dev/sda9: UUID=&quot;a1b936a0-df38-4bf5-b095-6220ffdfc63c&quot; TYPE=&quot;ext3&quot;
user1@vm1:~$ sudo umount /tmp
user1@vm1:~$ mount
/dev/sda1 on / type ext3 (rw,errors=remount-ro)
tmpfs on /lib/init/rw type tmpfs (rw,nosuid,mode=0755)
proc on /proc type proc (rw,noexec,nosuid,nodev)
sysfs on /sys type sysfs (rw,noexec,nosuid,nodev)
udev on /dev type tmpfs (rw,mode=0755)
tmpfs on /dev/shm type tmpfs (rw,nosuid,nodev)
devpts on /dev/pts type devpts (rw,noexec,nosuid,gid=5,mode=620)
/dev/sda9 on /home type ext3 (rw)
/dev/sda5 on /usr type ext3 (rw)
/dev/sda6 on /var type ext3 (rw)
user1@vm1:~$ sudo fsck /tmp
fsck from util-linux-ng 2.17.2
e2fsck 1.41.12 (17-May-2010)
/dev/sda8: clean, 11/61752 files, 13973/246784 blocks
user1@vm1:~$ sudo mount -a
user1@vm1:~$ mount
/dev/sda1 on / type ext3 (rw,errors=remount-ro)
tmpfs on /lib/init/rw type tmpfs (rw,nosuid,mode=0755)
proc on /proc type proc (rw,noexec,nosuid,nodev)
sysfs on /sys type sysfs (rw,noexec,nosuid,nodev)
udev on /dev type tmpfs (rw,mode=0755)
tmpfs on /dev/shm type tmpfs (rw,nosuid,nodev)
devpts on /dev/pts type devpts (rw,noexec,nosuid,gid=5,mode=620)
/dev/sda9 on /home type ext3 (rw)
/dev/sda5 on /usr type ext3 (rw)
/dev/sda6 on /var type ext3 (rw)
/dev/sda8 on /tmp type ext3 (rw)
user1@vm1:~$
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br></div></div><h2 id="\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#\u89E3\u91CA" aria-hidden="true">#</a> \u89E3\u91CA</h2><ol><li>\u6253\u5370\u4F60\u7684<code>/etc/fstab</code>\u6587\u4EF6\u7684\u5185\u5BB9\uFF0C\u5B83\u5305\u542B\u5206\u533A\u4FE1\u606F\u4EE5\u53CA\u6302\u8F7D\u4F4D\u7F6E\u3002</li><li>\u6253\u5370\u5F53\u524D\u5DF2\u6302\u8F7D\u7684\u5206\u533A\u3002</li><li>\u6253\u5370\u7CFB\u7EDF\u4E2D\u6240\u6709\u5206\u533A\u7684 UUID\u3002</li><li>\u89E3\u9664\u6302\u8F7D<code>/tmp</code>\u5206\u533A\uFF0C\u4EE5\u4FBF\u4F60\u53EF\u4EE5\u68C0\u67E5\u5B83\u3002</li><li>\u518D\u6B21\u6253\u5370\u51FA\u5F53\u524D\u5DF2\u6302\u8F7D\u7684\u5206\u533A\u3002<code>/tmp</code>\u73B0\u5728\u4E0D\u5B58\u5728\u4E8E\u6B64\u5217\u8868\u4E2D\u3002</li><li>\u68C0\u67E5<code>/tmp</code>\u5206\u533A\u662F\u5426\u6709\u9519\u8BEF\u3002<code>fsck</code>\u901A\u8FC7\u8BFB\u53D6\u76F8\u5E94\u7684<code>/etc/fstab</code>\u6761\u76EE\u77E5\u9053\u8981\u68C0\u67E5\u54EA\u4E2A\u5206\u533A\u3002</li><li>\u6302\u8F7D<code>/etc/fstab</code>\u4E2D\u63CF\u8FF0\u7684\u6240\u6709\u5206\u533A\u3002</li><li>\u518D\u6B21\u6253\u5370\u5F53\u524D\u5DF2\u6302\u8F7D\u7684\u5206\u533A\u3002<code>/tmp</code>\u5DF2\u7ECF\u8FD4\u56DE\u4E86\u6B64\u5217\u8868\u3002</li></ol><h2 id="\u9644\u52A0\u9898" tabindex="-1"><a class="header-anchor" href="#\u9644\u52A0\u9898" aria-hidden="true">#</a> \u9644\u52A0\u9898</h2>`,20),T=n("li",null,[s("\u9605\u8BFB"),n("code",null,"man fstab"),s(", "),n("code",null,"man mount"),s("\u3002")],-1),$=s("\u9605\u8BFB "),E={href:"http://tldp.org/LDP/sag/html/filesystems.html",target:"_blank",rel:"noopener noreferrer"},P=s("http://tldp.org/LDP/sag/html/filesystems.html"),N=s("\u3002");function F(S,Y){const e=l("ExternalLinkIcon");return o(),p(d,null,[b,n("blockquote",null,[n("p",null,[c,n("a",u,[m,a(e)])])]),n("blockquote",null,[n("p",null,[f,n("a",v,[h,a(e)])])]),n("blockquote",null,[n("p",null,[x,n("a",g,[y,a(e)])])]),n("blockquote",null,[n("p",null,[w,n("a",_,[U,a(e)])])]),k,n("p",null,[q,n("a",B,[D,a(e)]),I]),G,n("ul",null,[T,n("li",null,[$,n("a",E,[P,a(e)]),N])])],64)}var V=t(i,[["render",F]]);export{V as default};
