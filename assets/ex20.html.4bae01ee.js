import{_ as r,r as i,o as p,c as b,a as n,b as a,F as c,d as s,e as l}from"./app.91d0dc40.js";const t={},u=n("h1",{id:"\u7EC3\u4E60-20-\u6587\u4EF6\u7CFB\u7EDF-\u4FEE\u6539\u548C\u521B\u5EFA\u6587\u4EF6\u7CFB\u7EDF-tune2fs-mkfs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7EC3\u4E60-20-\u6587\u4EF6\u7CFB\u7EDF-\u4FEE\u6539\u548C\u521B\u5EFA\u6587\u4EF6\u7CFB\u7EDF-tune2fs-mkfs","aria-hidden":"true"},"#"),s(" \u7EC3\u4E60 20\uFF1A\u6587\u4EF6\u7CFB\u7EDF\uFF1A\u4FEE\u6539\u548C\u521B\u5EFA\u6587\u4EF6\u7CFB\u7EDF\uFF0C"),n("code",null,"tune2fs"),s("\uFF0C"),n("code",null,"mkfs")],-1),o=s("\u539F\u6587\uFF1A"),m={href:"https://archive.fo/CzHiN",target:"_blank",rel:"noopener noreferrer"},d=s("Exercise 20. Filesystems: modifying and creating filesystems, tune2fs, mkfs"),f=s("\u8BD1\u8005\uFF1A"),v={href:"https://github.com/wizardforcel",target:"_blank",rel:"noopener noreferrer"},h=s("\u98DE\u9F99"),g=s("\u534F\u8BAE\uFF1A"),k={href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank",rel:"noopener noreferrer"},_=s("CC BY-NC-SA 4.0"),x=s("\u81EA\u8C6A\u5730\u91C7\u7528"),y={href:"https://translate.google.cn/",target:"_blank",rel:"noopener noreferrer"},U=s("\u8C37\u6B4C\u7FFB\u8BD1"),w=n("p",null,"\u8BA9\u6211\u6765\u4ECB\u7ECD\u4E00\u4E0B\u6587\u4EF6\u7CFB\u7EDF\u76F8\u5173\u7684\u672F\u8BED\uFF1A",-1),F={href:"http://en.wikipedia.org/wiki/File_system",target:"_blank",rel:"noopener noreferrer"},I=s("\u6587\u4EF6\u7CFB\u7EDF"),S=s(" - \u4E00\u79CD\u7EC4\u7EC7\u6570\u636E\u7684\u65B9\u5F0F\uFF0C\u901A\u8FC7\u63D0\u4F9B\u5B58\u50A8\uFF0C\u68C0\u7D22\u548C\u66F4\u65B0\u6570\u636E\u7684\u8FC7\u7A0B\uFF0C\u4EE5\u53CA\u7BA1\u7406\u5305\u542B\u5B83\u7684\u8BBE\u5907\u4E0A\u7684\u53EF\u7528\u7A7A\u95F4\uFF0C\u6570\u636E\u9884\u671F\u5728\u7EC8\u6B62\u540E\u4FDD\u7559\u3002"),D=n("li",null,"Inode - \u7D22\u5F15\u8282\u70B9\u662F\u4E00\u79CD\u7ED3\u6784\uFF0C\u5B58\u50A8\u6587\u4EF6\u7CFB\u7EDF\u5BF9\u8C61\uFF08\u6587\u4EF6\uFF0C\u76EE\u5F55\u7B49\uFF09\u7684\u6240\u6709\u4FE1\u606F\uFF0C\u9664\u6570\u636E\u5185\u5BB9\u548C\u6587\u4EF6\u540D\u4E4B\u5916\u3002",-1),q=n("li",null,"\u5757 - \u53EF\u4EE5\u5206\u914D\u7684\u6700\u5C0F\u5757\u78C1\u76D8\u7A7A\u95F4\u3002\u5B83\u901A\u5E38\u9ED8\u8BA4\u4E3A 4096 \u5B57\u8282\uFF0C\u6216 4 \u5343\u5B57\u8282\u3002",-1),E=n("li",null,"\u65E5\u5FD7 - \u4E00\u79CD\u7ED3\u6784\uFF0C\u5141\u8BB8\u6587\u4EF6\u7CFB\u7EDF\u8DDF\u8E2A\u4EC0\u4E48\u65F6\u5019\u5199\u5165\u4E86\u4EC0\u4E48\u3002\u8FD9\u6837\u53EF\u4EE5\u5FEB\u901F\u4E86\u89E3\u5728\u65AD\u7535\u6216\u7C7B\u4F3C\u95EE\u9898\u65F6\uFF0C\u672A\u6B63\u786E\u5199\u5165\u7684\u5185\u5BB9\u3002",-1),T=l(`<p>\u63A5\u4E0B\u6765\uFF0C\u8BA9\u6211\u7ED9\u5927\u5BB6\u7B80\u8981\u4ECB\u7ECD\u6587\u4EF6\u7CFB\u7EDF\u7684\u5DE5\u4F5C\u539F\u7406\u3002\u4E3A\u4E86\u6309\u540D\u79F0\u8BBF\u95EE\u6587\u4EF6\uFF0CLinux \u5185\u6838\u5C06\uFF1A</p><ul><li>\u5728\u5305\u542B\u8BE5\u6587\u4EF6\u7684\u76EE\u5F55\u4E2D\u67E5\u627E\u6587\u4EF6\u540D\u3002</li><li>\u83B7\u53D6\u6587\u4EF6 Inode \u53F7\u3002</li><li>\u901A\u8FC7 Inode \u533A\u57DF\u4E2D\u7684\u6570\u5B57\u67E5\u627E Inode\u3002</li><li>\u8BFB\u53D6\u6B64 Inode \u7684\u6570\u636E\u5757\u7684\u4F4D\u7F6E\u3002</li><li>\u4F7F\u7528\u8FD9\u4E2A\u4F4D\u7F6E\u5728\u6570\u636E\u533A\u57DF\u4E2D\u4ECE\u8FD9\u4E2A\u5757\u8BFB\u53D6\u6587\u4EF6\u3002</li></ul><p>\u73B0\u5728\uFF0C\u6BCF\u4E2A\u6587\u4EF6\u7CFB\u7EDF\u90FD\u6709\u5F88\u591A\u4E0E\u4E4B\u76F8\u5173\u7684\u9009\u9879\u3002\u8FD9\u4E9B\u9009\u9879\u53EF\u4EE5\u901A\u8FC7<code>tune2fs </code>\u7A0B\u5E8F\u67E5\u770B\u548C\u66F4\u6539\u3002\u8FD9\u662F\u4E00\u4E2A\u5E26\u6CE8\u89E3\u7684<code>tune2fs -l /dev/sda8</code>\u7684\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:~$ sudo tune2fs -l /dev/sda8
tune2fs 1.41.12 (17-May-2010)
# \u53EA\u662F\u4E2A\u6807\u7B7E\uFF0C\u53EF\u4EE5\u662F\u4EFB\u4F55\u4E1C\u897F\uFF0C\u6216\u8005\u6CA1\u6709\u4E1C\u897F
Filesystem volume name:   &lt;none&gt;
# \u8FD9\u91CC\u5E94\u8BE5\u662F\u6700\u540E\u7684\u6302\u8F7D\u70B9
Last mounted on:          &lt;not available&gt;
# \u552F\u4E00\u7684\u6587\u4EF6\u7CFB\u7EDF\u6807\u8BC6\u7B26
Filesystem UUID:          869db6b4-aea0-4a25-8bd2-f0b53dd7a88e
# \u5DF2\u77E5\u4F4D\u7F6E\u7684\u7279\u6B8A\u6570\u5B57\uFF0C\u5B83\u5B9A\u4E49\u4E86 FS \u7684\u7C7B\u578B\uFF0C\u5C1D\u8BD5\u8FD9\u4E2A\uFF1A
# sudo dd if=/dev/sda8 of=/dev/stdout bs=1 skip=1080 count=2 | hexdump -C
Filesystem magic number:  0xEF53
# FS \u7248\u672C
Filesystem revision #:    1 (dynamic)
# \u542F\u7528\u7684 FS \u529F\u80FD
Filesystem features:
    # \u8FD9\u662F\u4E00\u4E2A\u65E5\u5FD7\u6587\u4EF6\u7CFB\u7EDF\u3002\u65E5\u5FD7\u6587\u4EF6\u7CFB\u7EDF\u662F\u4E00\u4E2A\u6587\u4EF6\u7CFB\u7EDF\uFF0C
    # \u5B83\u8DDF\u8E2A\u65E5\u5FD7\u4E2D\u53D1\u751F\u7684\u53D8\u5316\uFF08\u901A\u5E38\u662F\u4E00\u4E2A\u5FAA\u73AF\u65E5\u5FD7\uFF0C
    # \u5728\u6587\u4EF6\u7CFB\u7EDF\u7684\u7279\u5B9A\u4F4D\u7F6E\uFF09\uFF0C\u5728\u63D0\u4EA4\u7ED9\u4E3B\u6587\u4EF6\u7CFB\u7EDF\u4E4B\u524D\u3002
    # \u5728\u7CFB\u7EDF\u5D29\u6E83\u6216\u8005\u65AD\u7535\u7684\u4E8B\u4EF6\u4E2D\uFF0C\u8FD9\u79CD\u6587\u4EF6\u7CFB\u7EDF\u80FD\u591F\u66F4\u5FEB
    # \u6062\u590D\uFF0C\u5E76\u4E14\u4E0D\u53EF\u80FD\u6BC1\u574F\u3002
    # http://en.wikipedia.org/wiki/Journaling_file_system
    has_journal
    # \u62E5\u6709\u6269\u5C55\u5C5E\u6027\uFF0C\u4F8B\u5982\u6269\u5C55\u7684 ACL\u3002
    ext_attr
    # \u4E3A\u7CFB\u7EDF\u4FE1\u606F\u4FDD\u7559\u7A7A\u95F4\uFF0C\u8FD9\u5141\u8BB8 FS \u6539\u53D8\u5927\u5C0F\u3002
    resize_inode
    # \u4F7F\u7528\u7D22\u5F15\u6765\u52A0\u901F\u5927\u76EE\u5F55\u4E2D\u7684\u67E5\u627E\u3002
    dir_index
    # \u5728\u76EE\u5F55\u6761\u76EE\u4E2D\u50A8\u5B58\u6587\u4EF6\u7C7B\u578B\u4FE1\u606F\u3002
    filetype
    # \u610F\u601D\u662F\u9700\u8981\u8FD0\u884C fsck\u3002
    needs_recovery
    # \u66F4\u5C11\u7684\u8D85\u7EA7\u5757\u5907\u4EFD\uFF0C\u5728\u5927 FS \u4E0A\u8282\u7EA6\u7A7A\u95F4\u3002
    sparse_super
    # \u662F\u5426\u53EF\u4EE5\u5305\u542B &gt; 2GB \u7684\u6587\u4EF6\u3002\u5728\u521B\u5EFA &gt;2GB \u7684\u6587\u4EF6\u65F6\uFF0C\u5185\u6838\u4F1A\u81EA\u52A8\u8BBE\u7F6E\u5B83\u3002
    large_file
# dir_index \u4E2D\u4F7F\u7528\u54EA\u4E2A\u54C8\u5E0C
Filesystem flags:         signed_directory_hash
# \u6302\u8F7D\u65F6\u4F7F\u7528\u4EC0\u4E48\u9009\u9879
Default mount options:    (none)
# \u662F\u5426\u9700\u8981\u6267\u884C fsck
Filesystem state:         clean
# \u9519\u8BEF\u65F6\u505A\u4EC0\u4E48\uFF1A\u7EE7\u7EED\uFF0C\u4EE5\u53EA\u8BFB\u65B9\u5F0F\u91CD\u65B0\u6302\u8F7D\uFF0C\u6216\u8005\u62A5\u9519\uFF1F
Errors behavior:          Continue
# \u54EA\u4E2A OS \u4F7F\u7528\u8FD9\u4E2A FS
Filesystem OS type:       Linux
# \u7D22\u5F15\u8282\u70B9\u603B\u6570\u3002\u7D22\u5F15\u8282\u70B9\u5C31\u662F &quot;inode&quot;\u3002\u5B83\u7684\u7ED3\u6784\u662F\uFF1A 
# \u50A8\u5B58\u6240\u6709\u6587\u4EF6\u7CFB\u7EDF\u5BF9\u8C61\uFF08\u6587\u4EF6\u3001\u76EE\u5F55\uFF0C\u4EE5\u53CA\u5176\u4ED6\uFF09\u7684\u4FE1\u606F
# \u9664\u4E86\u6587\u4EF6\u5185\u5BB9\u548C\u6587\u4EF6\u540D\u79F0\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C
# \u4F60\u7684\u6587\u4EF6\u6570\u91CF\u4E0D\u80FD\u591A\u4E8E\u7D22\u5F15\u8282\u70B9\u6570\u91CF\u3002
# \u8FD9\u5C31\u662F\u7D22\u5F15\u8282\u70B9\u7ED3\u6784\uFF0C\u5B83\u63CF\u8FF0\u4E86\u91CC\u9762\u50A8\u5B58\u4E86\u4EC0\u4E48\u4FE1\u606F\uFF1A
#/* \u51FA\u73B0\u5728 Inode \u8868\u4E2D\u7684 Inode \u7ED3\u6784 */
#struct dinode
#{ ushort  di_mode;     /* mode and type of file   */
#  short   di_nlink;    /* number of links to file */
#  ushort  di_uid;      /* owner&#39;s user id         */
#  ushort  di_gid;      /* owner&#39;s group id        */
#  off_t   di_size;     /* number of bytes in file */
#  char    di_addr[39]; /* disk block addresses    */
#  char    di_gen;      /* file generation number  */
#  time_t  di_atime;    /* time last accessed      */
#  time_t  di_mtime;    /* time last modified      */
#  time_t  di_ctime;    /* time created            */
#};
# \u8FD9\u91CC\u4E5F\u6709\u5F88\u597D\u7684\u89E3\u91CA\uFF1A
# http://support.tux4u.nl/dokuwiki/lib/exe/fetch.php?media=linux:disk_bestandssysteem:inode.pdf
Inode count:              62464
# \u5F53\u524D\u6709\u591A\u5C11\u7A7A\u95F2\u8282\u70B9
Free inodes:              62452
# \u8BBE\u5907\u4E0A\u7684\u7B2C\u4E00\u4E2A\u5757\u3002\u7531\u4E8E\u6BCF\u4E2A\u5206\u533A\u90FD\u8868\u793A\u4E3A\u5355\u72EC\u7684\u8BBE\u5907\uFF0C
# \u5B83\u8BBE\u4E3A 0\u3002
First block:              0
# \u8FD9\u662F\u6587\u4EF6\u7CFB\u7EDF\u4E2D\uFF0C\u7B2C\u4E00\u4E2A\u7D22\u5F15\u8282\u70B9\u7684\u8282\u70B9\u53F7\u3002
First inode:              11
# \u7D22\u5F15\u8282\u70B9\u7684\u5927\u5C0F\uFF0C\u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D\u3002\u5728\u65B0\u7684 Linux \u53D1\u884C\u7248\u4E2D\uFF0C\u8FD9\u6709\u65F6\u4F1A\u9ED8\u8BA4\u589E\u52A0\uFF0C
# \u4E3A\u4E86\u5141\u8BB8\u6587\u4EF6\u4E2D\u6269\u5C55\u5C5E\u6027\u7684\u5B58\u50A8\uFF0C\u4F8B\u5982\uFF0C\u5FAE\u79D2\u65F6\u95F4\u6233\u3002
Inode size:               256
# \u6DFB\u52A0\u7D22\u5F15\u8282\u70B9\u5B57\u6BB5\u6240\u9700\u7684\u7A7A\u95F4
Required extra isize:     28
# \u6DFB\u52A0\u7D22\u5F15\u8282\u70B9\u5B57\u6BB5\u8981\u6C42\u7684\u7A7A\u95F4\u3002\u4E0D\u91CD\u8981\uFF0C\u56E0\u4E3A\u8FD9\u4E2A\u5927\u5C0F
# \u4EFB\u4F55\u65F6\u5019\u90FD\u662F\u6240\u9700\u7A7A\u95F4
Desired extra isize:      28
# \u4E00\u4E2A\u9690\u5F62\u8282\u70B9\uFF0C\u5B83\u50A8\u5B58\u6587\u4EF6\u7CFB\u7EDF\u7684\u65E5\u5FD7\u3002
Journal inode:            8
# \u5757\u7684\u603B\u6570\u3002\u5757\u662F\u78C1\u76D8\u7A7A\u95F4\u53EF\u5206\u914D\u7684\u6700\u5C0F\u5355\u4F4D\u3002
# \u4F60\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u7684\u516C\u5F0F\uFF0C\u4EE5 GB \u8BA1\u7B97\u5206\u533A\u5927\u5C0F\uFF1A
# \u5757\u7684\u6570\u91CF * \u5757\u7684\u5927\u5C0F
# ------------------------
#         1024^3
Block count:              249856
# \u6709\u591A\u5C11\u5757\u4E3A\u8D85\u6781\u7528\u6237\u4FDD\u7559\u3002\u666E\u901A\u7528\u6237\u4E0D\u80FD\u4F7F\u7528\u8FD9\u4E2A
# \u4FDD\u7559\u7A7A\u95F4\u3002\u8FD9\u662F\u4E3A\u4E86\u4F7F\u7CFB\u7EDF\u4FDD\u6301\u8FD0\u884C\uFF0C\u4EE5\u9632\u4E00\u4E9B\u6D41\u6C13\u8F6F\u4EF6
# \u51B3\u5B9A\u585E\u6EE1\u6240\u6709\u53EF\u7528\u7684\u78C1\u76D8\u7A7A\u95F4\u3002
Reserved block count:     12492
# \u5F53\u524D\u6709\u591A\u5C11\u5757\u662F\u7A7A\u95F2\u7684\u3002 
Free blocks:              241518
# \u7528\u4E8E\u76EE\u5F55\u7D22\u5F15\uFF08dir_index\uFF09\u7684\u7B97\u6CD5\u3002
Default directory hash:   half_md4
# \u76EE\u524D\u4E3A\u6B62\uFF0C\u6211\u53EF\u4EE5\u8BF4\uFF0C\u8FD9\u662F\u7528\u4E8E dir_index \u54C8\u5E0C\u7B97\u6CD5\u7684\u79CD\u5B50\u503C\u3002
Directory Hash Seed:      d02c6099-bd06-4d29-a3d7-779df2aa2410
# \u65E5\u5FD7\u5907\u4EFD\u9009\u9879\u3002
Journal backup:           inode blocks                          #
# \u5757\u7684\u5927\u5C0F\uFF0C\u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D\u30024096 \u5B57\u8282\u5C31\u662F 4 KB\u3002
Block size:               4096
# \u5728 ex3 FS \u4E2D\u672A\u5B9E\u73B0\u3002\u8FD9\u662F\u4E00\u4E2A\u7279\u6027\uFF0C\u5B83\u80FD\u591F\u5728\u4E00\u4E2A\u5757\u4E2D\u5199\u5165\u591A\u4E2A\u5C0F\u6587\u4EF6\uFF0C
# \u6765\u8282\u7EA6\u7A7A\u95F4\u3002
Fragment size:            4096
# \u4FDD\u7559\u7684\u63A7\u4EF6\uFF0C\u6240\u4EE5\u7EC4\u63CF\u8FF0\u7B26\u8868\u53EF\u80FD\u5728\u672A\u6765\u4F1A\u589E\u957F\u3002
Reserved GDT blocks:      60
# \u6BCF\u4E2A\u5757\u7EC4\u7684\u5757\u6570\u91CF\u3002\u5757\u7EC4\u5305\u542B\u6587\u4EF6\u7CFB\u7EDF\u91CD\u8981\u7684\u63A7\u5236\u4FE1\u606F\u7684\u5197\u4F59\u526F\u672C\u3002
# \uFF08\u8D85\u7EA7\u5757\u548C\u6587\u4EF6\u63CF\u8FF0\u7B26\uFF09\uFF0C\u5E76\u5305\u542B\u4E00\u90E8\u5206\u6587\u4EF6\u7CFB\u7EDFcontains a
# \uFF08\u5757\u7684\u4F4D\u56FE\uFF0C\u7D22\u5F15\u8282\u70B9\u7684\u4F4D\u56FE\uFF0C\u4E00\u90E8\u5206\u7D22\u5F15\u8282\u70B9\u8868\uFF0C\u4EE5\u53CA\u6570\u636E\u5757\uFF09\u3002
# \u5757\u7EC4\u7684\u7ED3\u6784\u5728\u4E0B\u8868\u4E2D\u5C55\u793A\uFF1A
#,---------+---------+---------+---------+---------+---------,
#| \u8D85\u7EA7    | FS      | \u5757\u7684    | Inode   | Inode   | \u6570\u636E    |
#| \u5757      | \u63CF\u8FF0\u7B26  | \u4F4D\u56FE    | \u4F4D\u56FE    | \u8868      | \u5757      |
#\`---------+---------+---------+---------+---------+---------&#39;
# http://tldp.org/HOWTO/Filesystems-HOWTO-6.html
Blocks per group:         32768
# \u6BCF\u4E2A\u7EC4\u7684\u7247\u6BB5\u6570\u91CF\u3002\u56E0\u4E3A ext3 FS \u4E2D\u6CA1\u6709\u7247\u6BB5\uFF0C
# \u8FD9\u7B49\u4E8E\u6BCF\u4E2A\u7EC4\u7684\u5757\u6570\u91CF\u3002
Fragments per group:      32768
# \u6BCF\u4E2A\u7EC4\u7684\u7D22\u5F15\u8282\u70B9\u6570\u91CF\u3002
Inodes per group:         7808
# \u6BCF\u4E2A\u7EC4\u7684\u7D22\u5F15\u8282\u70B9\u5757\u3002\u7D22\u5F15\u8282\u70B9\u5757\u662F\u4E00\u4E2A\u8868\u7684\u7D22\u5F15\uFF0C
# \u63CF\u8FF0\u4E86\u6240\u6709\u6587\u4EF6\u5C5E\u6027\uFF0C\u9664\u4E86\u6587\u4EF6\u540D\u79F0\u3002\u5B83\u62E5\u6709\u6570\u636E\u5757\u7684\u7D22\u5F15\u3002
# \u6570\u636E\u5757\u5305\u542B\u6587\u4EF6\u771F\u5B9E\u5185\u5BB9\u3002
# http://www.porcupine.org/forensics/forensic-discovery/chapter3.html
Inode blocks per group:   488
# FS \u7684\u521B\u5EFA\u65F6\u95F4\u3002
Filesystem created:       Mon Jul  2 06:16:24 2012
# \u6700\u540E\u7684 FS \u6302\u8F7D\u65F6\u95F4\u3002
Last mount time:          Mon Jul  2 06:57:21 2012
# \u6700\u540E\u7684 FS \u5199\u5165\u65F6\u95F4\u3002
Last write time:          Mon Jul  2 06:57:21 2012
# FS \u7684\u6302\u8F7D\u6B21\u6570\u3002
Mount count:              6
# \u81EA\u52A8\u68C0\u67E5\u524D\u7684\u6B21\u6570\u3002\u5982\u679C\u6587\u4EF6\u7CFB\u7EDF\u7684\u6302\u8F7D\u6B21\u6570\u662F\u8FD9\u4E2A
# \u6216\u8005\u68C0\u67E5\u95F4\u9694\u5230\u4E86\uFF0C\u90A3\u4E48 FS \u4F1A\u81EA\u52A8\u68C0\u67E5\u3002
Maximum mount count:      34
# \u6700\u540E\u7684 fsck \u6267\u884C\u65F6\u95F4
Last checked:             Mon Jul  2 06:16:24 2012
# \u4E0B\u4E00\u4E2A FS \u68C0\u67E5\u95F4\u9694. \u5982\u679C\u8FD9\u4E2A\u95F4\u9694\u5230\u4E86\uFF0C
# \u6216\u8005\u5230\u8FBE\u4E86\u6700\u5927\u6302\u8F7D\u6570\uFF0CFS \u4F1A\u81EA\u52A8\u68C0\u67E5\u3002
Check interval:           15552000 (6 months)
# \u4E0B\u4E00\u4E2A FS \u68C0\u67E5\u95F4\u9694\uFF0C\u4EE5\u4EBA\u7C7B\u53EF\u8BFB\u7684\u683C\u5F0F\u3002
Next check after:         Sat Dec 29 05:16:24 2012
# \u80FD\u591F\u4F7F\u7528\u4FDD\u7559\u7A7A\u95F4\u7684\u7528\u6237\u7684\u7528\u6237 ID\u3002
# \u5B83\u9ED8\u8BA4\u662F root \u7528\u6237\uFF08\u8D85\u7EA7\u7528\u6237\uFF09
Reserved blocks uid:      0 (user root)
# \u80FD\u591F\u4F7F\u7528\u4FDD\u7559\u7A7A\u95F4\u7684\u7528\u6237\u7684\u7EC4 ID\u3002
# \u5B83\u9ED8\u8BA4\u662F root \u7EC4
Reserved blocks gid:      0 (group root)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br></div></div><p>\u5F88\u53EF\u6015\uFF0C\u662F\u561B\uFF1F\u5B9E\u9645\u4E0A\u4F60\u4F1A\u53D1\u73B0\uFF0C\u8FD9\u4E2A\u63CF\u8FF0\u4E2D\u53EA\u6709\u51E0\u4E2A\u53C2\u6570\u5B9E\u9645\u4E0A\u662F\u6709\u7528\u7684\uFF0C\u5B83\u4EEC\u662F\uFF1A</p><ul><li>\u4FDD\u7559\u5757\u6570\u91CF\u3002</li><li>\u6700\u5927\u6302\u8F7D\u6570\u3002</li><li>\u68C0\u67E5\u95F4\u9694\u3002</li></ul><p>\u901A\u5E38\u4F60\u4E0D\u9700\u8981\u4FEE\u6539\u5176\u4ED6\u53C2\u6570\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5B83\u4EEC\u662F\u6B63\u5E38\u7684\u3002\u4EE5\u4E0B\u662F\u4F7F\u7528\u6587\u4EF6\u7CFB\u7EDF\u7684\u547D\u4EE4\u5217\u8868\uFF1A</p><ul><li><code>mkfs.ext3</code> - \u521B\u5EFA\u4E00\u4E2A<code>ext3</code>\u6587\u4EF6\u7CFB\u7EDF\u3002\u5982\u679C\u5728\u5177\u6709\u73B0\u6709\u6587\u4EF6\u7CFB\u7EDF\u7684\u8BBE\u5907\u4E0A\u6267\u884C\u6B64\u547D\u4EE4\uFF0C\u5219\u8BE5\u6587\u4EF6\u7CFB\u7EDF\u5C06\u88AB\u9500\u6BC1\uFF0C\u56E0\u6B64\u8BF7\u5C0F\u5FC3\u3002</li><li><code>mkfs.ext4</code> - \u521B\u5EFA\u4E00\u4E2A<code>ext4</code>\u6587\u4EF6\u7CFB\u7EDF\u3002\u8FD9\u5176\u5B9E\u662F\u76F8\u540C\u7684\u7A0B\u5E8F\uFF0C\u5C1D\u8BD5<code>sudo find /sbin -samefile sbin/mkfs.ext3</code>\u3002</li><li><code>tune2fs</code> - \u6253\u5370\u5E76\u66F4\u6539\u6587\u4EF6\u7CFB\u7EDF\u53C2\u6570\u3002</li></ul><p>\u73B0\u5728\uFF0C\u4F60\u5C06\u5B66\u4E60\u5982\u4F55\u521B\u5EFA\u65B0\u7684\u6587\u4EF6\u7CFB\u7EDF\u5E76\u4FEE\u6539\u5176\u53C2\u6570\u3002</p><h2 id="\u8FD9\u6837\u505A" tabindex="-1"><a class="header-anchor" href="#\u8FD9\u6837\u505A" aria-hidden="true">#</a> \u8FD9\u6837\u505A</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1: sudo -s
2: umount /tmp
3: blkid | grep /dev/sda8
4: mkfs.ext3 /dev/sda8
5: blkid | grep /dev/sda8
6: blkid | grep /dev/sda8 &gt;&gt; /etc/fstab
7: vim /etc/fstab
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u73B0\u5728\u4F60\u5FC5\u987B\u5C06<code>/tmp</code>\u90A3\u4E00\u884C\u7684 UUID\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># /tmp was on /dev/sda8 during installation
UUID=869db6b4-aea0-4a25-8bd2-f0b53dd7a88e /tmp            ext3    defaults        0       2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u66FF\u6362\u4E3A\u4F60\u6DFB\u52A0\u5230\u6587\u4EF6\u672B\u5C3E\u7684\u90A3\u4E2A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/dev/sda8: UUID=&quot;53eed507-18e8-4f71-9003-bcea8c4fd2dd&quot; TYPE=&quot;ext3&quot; SEC_TYPE=&quot;ext2&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u56E0\u4E3A\u6839\u636E\u5B9A\u4E49\uFF0C\u4F60\u7684 UUID \u5FC5\u987B\u8DDF\u6211\u7684\u4E0D\u540C\u3002\u5728\u66FF\u6362 UUID\uFF0C\u7F16\u5199\u6587\u4EF6\uFF0C\u9000\u51FA\u4E4B\u540E\uFF0C\u7EE7\u7EED\u5E76\u8F93\u5165\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> 8: mount /tmp
 9: tune2fs -c 2 /dev/sda8
10: unmount /tmp
11: fsck /tmp
12: for ((i=1;i&lt;=4;i++)); do mount /tmp ; umount /tmp ; cat /var/log/messages | tail -n 4 ; done
13: fsck /tmp
14: mount -a
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u4F60\u4F1A\u770B\u5230\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4F60\u4F1A\u770B\u5230\u4EC0\u4E48" aria-hidden="true">#</a> \u4F60\u4F1A\u770B\u5230\u4EC0\u4E48</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:~$ sudo -s
root@vm1:/home/user1# umount /tmp
root@vm1:/home/user1# blkid | grep /dev/sda8
/dev/sda8: UUID=&quot;869db6b4-aea0-4a25-8bd2-f0b53dd7a88e&quot; TYPE=&quot;ext3&quot; SEC_TYPE=&quot;ext2&quot;
root@vm1:/home/user1# mkfs.ext3 /dev/sda8
mke2fs 1.41.12 (17-May-2010)
Filesystem label=
OS type: Linux
Block size=4096 (log=2)
Fragment size=4096 (log=2)
Stride=0 blocks, Stripe width=0 blocks
62464 inodes, 249856 blocks
12492 blocks (5.00%) reserved for the super user
First data block=0
Maximum filesystem blocks=255852544
8 block groups
32768 blocks per group, 32768 fragments per group
7808 inodes per group
Superblock backups stored on blocks:
        32768, 98304, 163840, 229376
 
Writing inode tables: done
Creating journal (4096 blocks): done
Writing superblocks and filesystem accounting information: done
 
This filesystem will be automatically checked every 28 mounts or
180 days, whichever comes first.  Use tune2fs -c or -i to override.
root@vm1:/home/user1# blkid | grep /dev/sda8
/dev/sda8: UUID=&quot;53eed507-18e8-4f71-9003-bcea8c4fd2dd&quot; TYPE=&quot;ext3&quot; SEC_TYPE=&quot;ext2&quot;
root@vm1:/home/user1# blkid | grep /dev/sda8 &gt;&gt; /etc/fstab
root@vm1:/home/user1# vim /etc/fstab
# that works even if disks are added and removed. See fstab(5).
#
# &lt;file system&gt; &lt;mount point&gt;   &lt;type&gt;  &lt;options&gt;       &lt;dump&gt;  &lt;pass&gt;
proc            /proc           proc    defaults        0       0
# / was on /dev/vda5 during installation
UUID=128559db-a2e0-4983-91ad-d4f43f27da49 /               ext3    errors=re
# /home was on /dev/vda10 during installation
UUID=32852d29-ddee-4a8d-9b1e-f46569a6b897 /home           ext3    defaults
# /tmp was on /dev/sda8 during installation
UUID=869db6b4-aea0-4a25-8bd2-f0b53dd7a88e /tmp            ext3    defaults
# /usr was on /dev/vda9 during installation
UUID=0221be16-496b-4277-b131-2371ce097b44 /usr            ext3    defaults
# /var was on /dev/vda8 during installation
UUID=2db00f94-3605-4229-8813-0ee23ad8634e /var            ext3    defaults
# swap was on /dev/vda6 during installation
UUID=3a936af2-2c04-466d-b98d-09eacc5d104c none            swap    sw
/dev/scd0       /media/cdrom0   udf,iso9660 user,noauto     0       0
/dev/sda8: UUID=&quot;53eed507-18e8-4f71-9003-bcea8c4fd2dd&quot; TYPE=&quot;ext3&quot; SEC_TYPE
                                                         22,1          Bot
 
#
# &lt;file system&gt; &lt;mount point&gt;   &lt;type&gt;  &lt;options&gt;       &lt;dump&gt;  &lt;pass&gt;
proc            /proc           proc    defaults        0       0
# / was on /dev/vda5 during installation
UUID=128559db-a2e0-4983-91ad-d4f43f27da49 /               ext3    errors=re
# /home was on /dev/vda10 during installation
UUID=32852d29-ddee-4a8d-9b1e-f46569a6b897 /home           ext3    defaults
# /tmp was on /dev/sda8 during installation
UUID=53eed507-18e8-4f71-9003-bcea8c4fd2dd /tmp            ext3    defaults
# /usr was on /dev/vda9 during installation
UUID=0221be16-496b-4277-b131-2371ce097b44 /usr            ext3    defaults
# /var was on /dev/vda8 during installation
UUID=2db00f94-3605-4229-8813-0ee23ad8634e /var            ext3    defaults
 
# swap was on /dev/vda6 during installation
UUID=3a936af2-2c04-466d-b98d-09eacc5d104c none            swap    sw
/dev/scd0       /media/cdrom0   udf,iso9660 user,noauto     0       0
&quot;/etc/fstab&quot; 22L, 1277C written
root@vm1:/home/user1# mount /tmp
root@vm1:/home/user1# tune2fs -c 2 /dev/sda8
tune2fs 1.41.12 (17-May-2010)
Setting maximal mount count to 2
root@vm1:/home/user1# unmount /tmp
root@vm1:/home/user1# fsck /tmp
fsck from util-linux-ng 2.17.2
e2fsck 1.41.12 (17-May-2010)
/dev/sda8: clean, 11/62464 files, 8337/249856 blocks (check in 2 mounts)
root@vm1:/home/user1# for ((i=1;i&lt;=4;i++)); do mount /tmp ; umount /tmp ; cat /var/log/messages | tail -n 4 ; done
Jul  2 12:11:43 vm1 kernel: [21080.920658] EXT3-fs: mounted filesystem with ordered data mode.
Jul  2 12:11:58 vm1 kernel: [21096.363787] kjournald starting.  Commit interval 5 seconds
Jul  2 12:11:58 vm1 kernel: [21096.364167] EXT3 FS on sda8, internal journal
Jul  2 12:11:58 vm1 kernel: [21096.364171] EXT3-fs: mounted filesystem with ordered data mode.
Jul  2 12:11:58 vm1 kernel: [21096.364171] EXT3-fs: mounted filesystem with ordered data mode.
Jul  2 12:11:58 vm1 kernel: [21096.381372] kjournald starting.  Commit interval 5 seconds
Jul  2 12:11:58 vm1 kernel: [21096.381539] EXT3 FS on sda8, internal journal
Jul  2 12:11:58 vm1 kernel: [21096.381542] EXT3-fs: mounted filesystem with ordered data mode.
Jul  2 12:11:58 vm1 kernel: [21096.396152] kjournald starting.  Commit interval 5 seconds
Jul  2 12:11:58 vm1 kernel: [21096.396158] EXT3-fs warning: maximal mount count reached, running e2fsck is recommended
Jul  2 12:11:58 vm1 kernel: [21096.396344] EXT3 FS on sda8, internal journal
Jul  2 12:11:58 vm1 kernel: [21096.396348] EXT3-fs: mounted filesystem with ordered data mode.
Jul  2 12:11:58 vm1 kernel: [21096.412434] kjournald starting.  Commit interval 5 seconds
Jul  2 12:11:58 vm1 kernel: [21096.412441] EXT3-fs warning: maximal mount count reached, running e2fsck is recommended
Jul  2 12:11:58 vm1 kernel: [21096.412610] EXT3 FS on sda8, internal journal
Jul  2 12:11:58 vm1 kernel: [21096.412612] EXT3-fs: mounted filesystem with ordered data mode.
root@vm1:/home/user1# fsck /tmp
fsck from util-linux-ng 2.17.2
e2fsck 1.41.12 (17-May-2010)
/dev/sda8 has been mounted 4 times without being checked, check forced.
Pass 1: Checking inodes, blocks, and sizes
Pass 2: Checking directory structure
Pass 3: Checking directory connectivity
Pass 4: Checking reference counts
Pass 5: Checking group summary information
/dev/sda8: 11/62464 files (0.0% non-contiguous), 8337/249856 blocks
root@vm1:/home/user1# mount -a
root@vm1:/home/user1#
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br></div></div><h2 id="\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#\u89E3\u91CA" aria-hidden="true">#</a> \u89E3\u91CA</h2><ol><li>\u6267\u884C root\uFF08\u8D85\u7EA7\u7528\u6237\uFF09shell\u3002</li><li>\u89E3\u9664\u6302\u8F7D<code>/tmp</code>\uFF0C\u4ECE<code>/etc/fstab</code>\u8BFB\u53D6\u5B83\u7684\u4F4D\u7F6E \u3002</li><li>\u6253\u5370\u51FA<code>/dev/sda8</code>\u7684UUID\uFF0C<code>/dev/sda8</code>\u662F\u6302\u8F7D\u5728<code>/tmp</code>\u4E0A\u7684\u6587\u4EF6\u7CFB\u7EDF\u3002</li><li>\u5728<code>/dev/sda8</code>\u4E0A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6587\u4EF6\u7CFB\u7EDF\u3002</li><li>\u518D\u6B21\u6253\u5370\u51FA<code>/dev/sda8</code>\u7684 UUID\uFF0C\u6CE8\u610F\u5982\u4F55\u53D8\u5316\uFF0C\u56E0\u4E3A\u4F60\u521B\u5EFA\u4E86\u4E00\u4E2A\u65B0\u7684\u6587\u4EF6\u7CFB\u7EDF\u3002</li><li>\u5C06\u6B64 UUID \u9644\u52A0\u5230<code>/etc/fstab</code>\u3002</li><li>\u6253\u5F00<code>/etc/fstab</code>\u8FDB\u884C\u7F16\u8F91\u3002</li><li>\u6302\u8F7D\u65B0\u521B\u5EFA\u7684\u6587\u4EF6\u7CFB\u7EDF\u3002\u8FD9\u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A\u68C0\u67E5\uFF0C\u662F\u5426\u4F60\u5DF2\u7ECF\u6B63\u786E\u66FF\u6362\u4E86 UUID\uFF0C\u5982\u679C\u4E0D\u662F\u4F1A\u6709\u4E00\u4E2A\u9519\u8BEF\u6D88\u606F\u3002</li><li>\u8BBE\u7F6E\u6BCF\u4E24\u6B21\u6302\u8F7D\u68C0\u67E5<code>/dev/sda8</code>\u3002</li><li>\u89E3\u9664\u6302\u8F7D<code>/dev/sda8</code>\u3002</li><li>\u68C0\u67E5<code>/dev/sda8</code>\u3002</li><li>\u6302\u8F7D\uFF0C\u63A5\u89E6\u6302\u8F7D<code>/dev/sda8</code>\uFF0C \u5E76\u8FDE\u7EED\u56DB\u6B21\u5411\u4F60\u5C55\u793A<code>/var/log/messages/</code>\u7684\u6700\u540E4 \u884C\u3002\u8BF7\u6CE8\u610F\uFF0C\u4ECE\u7B2C\u4E09\u6B21\u5F00\u59CB\uFF0C\u6302\u8F7D\u7CFB\u7EDF\u901A\u77E5\u4F60 \u9700\u8981\u8FD0\u884C<code>e2fsck</code>\u3002\u5982\u679C\u4F60\u91CD\u65B0\u542F\u52A8\u7CFB\u7EDF\uFF0C\u5B83\u5C06\u4E3A\u4F60\u8FD0\u884C<code>e2fsck</code>\u3002</li><li>\u68C0\u67E5<code>/dev/sda8</code>\u3002<code>fsck</code>\u786E\u5B9A\u6587\u4EF6\u7CFB\u7EDF\u7C7B\u578B\u5E76\u81EA\u52A8\u8C03\u7528<code>e2fsck</code>\u3002</li><li>\u6302\u8F7D\u6240\u6709\u6587\u4EF6\u7CFB\u7EDF\u3002\u5982\u679C\u6CA1\u6709\u9519\u8BEF\uFF0C\u4F60\u5DF2\u7ECF\u5B8C\u6210\u4E86\u8FD9\u4E2A\u7EC3\u4E60\u3002</li></ol><h2 id="\u9644\u52A0\u9898" tabindex="-1"><a class="header-anchor" href="#\u9644\u52A0\u9898" aria-hidden="true">#</a> \u9644\u52A0\u9898</h2>`,22),C=l("<li>\u9605\u8BFB<code>man mkfs</code>\uFF0C<code>man mkfs.ext3</code>\uFF0C<code>man tune2fs</code>\u3002</li><li>\u9605\u8BFB\u9875\u9762\u9876\u90E8\u7684<code>tune2fs -l</code>\u5217\u8868\uFF0C\u5E76\u4E3A\u4F60\u7684\u6240\u6709\u6587\u4EF6\u7CFB\u7EDF\u8BFB\u53D6\u5E7B\u6570\u3002</li><li>\u624B\u52A8\u8BA1\u7B97\u6587\u4EF6\u7CFB\u7EDF\u7684\u5927\u5C0F\uFF0C\u4F7F\u7528\u5728<code>tune2fs -l</code>\u5217\u8868\u7684\u5757\u63CF\u8FF0\u4E2D\u63D0\u4F9B\u7684\u516C\u5F0F\u3002</li>",3),J=s("\u9605\u8BFB\u8FD9\u4E2A\u5E7B\u706F\u7247\uFF0C\u5E76\u5B8C\u6210\u5B83\u5C55\u793A\u7684\u4E1C\u897F\uFF1A"),B={href:"http://mcgrewsecurity.com/training/extx.pdf",target:"_blank",rel:"noopener noreferrer"},P=s("http://mcgrewsecurity.com/training/extx.pdf"),z=s("\u3002");function L(M,X){const e=i("ExternalLinkIcon");return p(),b(c,null,[u,n("blockquote",null,[n("p",null,[o,n("a",m,[d,a(e)])])]),n("blockquote",null,[n("p",null,[f,n("a",v,[h,a(e)])])]),n("blockquote",null,[n("p",null,[g,n("a",k,[_,a(e)])])]),n("blockquote",null,[n("p",null,[x,n("a",y,[U,a(e)])])]),w,n("ul",null,[n("li",null,[n("a",F,[I,a(e)]),S]),D,q,E]),T,n("ul",null,[C,n("li",null,[J,n("a",B,[P,a(e)]),z])])],64)}var Y=r(t,[["render",L]]);export{Y as default};
