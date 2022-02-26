import{_ as l,r,o as p,c,a as n,b as a,F as o,d as e,e as b}from"./app.91d0dc40.js";const i={},u=n("h1",{id:"\u7EC3\u4E60-6-bash-\u8BED\u8A00\u8BBE\u7F6E-lang-locale-dpkg-reconfigure-locales",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7EC3\u4E60-6-bash-\u8BED\u8A00\u8BBE\u7F6E-lang-locale-dpkg-reconfigure-locales","aria-hidden":"true"},"#"),e(" \u7EC3\u4E60 6\uFF1ABash\uFF1A\u8BED\u8A00\u8BBE\u7F6E\uFF0C"),n("code",null,"LANG"),e("\uFF0C"),n("code",null,"locale"),e("\uFF0C"),n("code",null,"dpkg-reconfigure locales")],-1),t=e("\u539F\u6587\uFF1A"),m={href:"https://archive.fo/QgMfr",target:"_blank",rel:"noopener noreferrer"},d=e("Exercise 6. Bash: language settings, LANG, locale, dpkg-reconfigure locales"),_=e("\u8BD1\u8005\uFF1A"),h={href:"https://github.com/wizardforcel",target:"_blank",rel:"noopener noreferrer"},f=e("\u98DE\u9F99"),g=e("\u534F\u8BAE\uFF1A"),U={href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank",rel:"noopener noreferrer"},F=e("CC BY-NC-SA 4.0"),T=e("\u81EA\u8C6A\u5730\u91C7\u7528"),L={href:"https://translate.google.cn/",target:"_blank",rel:"noopener noreferrer"},q=e("\u8C37\u6B4C\u7FFB\u8BD1"),C=b(`<p>\u5728 Linux \u4E2D\uFF0C\u8BED\u8A00\u9009\u62E9\u50CF\u5BFC\u51FA\u53D8\u91CF\u4E00\u6837\u7B80\u5355\u3002\u8FD9\u662F\u6B63\u786E\u7684\uFF0C\u901A\u8FC7\u67E5\u770B\u8FD9\u4E2A\u53D8\u91CF\uFF0C\u7A0B\u5E8F\u51B3\u5B9A\u5982\u4F55\u548C\u4F60\u4EA4\u6D41\u3002\u5F53\u7136\uFF0C\u4E3A\u4E86\u4F7F\u5176\u5DE5\u4F5C\uFF0C\u7A0B\u5E8F\u5FC5\u987B\u652F\u6301\u533A\u57DF\u8BBE\u7F6E\uFF0C\u5E76\u5C06\u5176\u7FFB\u8BD1\u6210\u53EF\u7528\u548C\u5B89\u88C5\u7684\u8BED\u8A00\u3002\u8BA9\u6211\u4EEC\u901A\u8FC7\u5B89\u88C5\u6CD5\u8BED\u533A\u57DF\u8BBE\u7F6E\uFF0C\u770B\u770B\u5B83\u7684\u5DE5\u4F5C\u539F\u7406\u3002</p><p>\u73B0\u5728\uFF0C\u4F60\u5C06\u5B66\u4E60\u5982\u4F55\u5B89\u88C5\u548C\u9009\u62E9\u4E00\u4E2A\u533A\u57DF\u8BBE\u7F6E\u3002</p><h2 id="\u8FD9\u6837\u505A" tabindex="-1"><a class="header-anchor" href="#\u8FD9\u6837\u505A" aria-hidden="true">#</a> \u8FD9\u6837\u505A</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1: echo $LANG
2: locale
3: man man # press q to exit man
4: sudo dpkg-reconfigure locales
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u73B0\u5728\uFF0C\u9009\u62E9<code>fr_FR.UTF-8 locale</code>\uFF0C\u901A\u8FC7\u4F7F\u7528\u65B9\u5411\u952E\u6765\u6D4F\u89C8\u5217\u8868\uFF0C\u5E76\u4F7F\u7528\u770B\u7A7A\u683C\u6765\u9009\u62E9\u533A\u57DF\u8BBE\u7F6E\u3002\u9009\u62E9<code>en_US.UTF-8</code>\u4F5C\u4E3A\u9ED8\u8BA4\u7684\u7CFB\u7EDF\u533A\u57DF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> 5: export LANG=fr_FR.UTF-8
 6: echo $LANG
 7: locale # press q to exit man
 8: man man
 9: export LANG=en_US.UTF-8
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u4F60\u4F1A\u770B\u5230\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4F60\u4F1A\u770B\u5230\u4EC0\u4E48" aria-hidden="true">#</a> \u4F60\u4F1A\u770B\u5230\u4EC0\u4E48</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:~$ echo $LANG
en_US.UTF-8
user1@vm1:~$ locale
LANG=en_US.UTF-8
LANGUAGE=en_US:en
LC_CTYPE=&quot;en_US.UTF-8&quot;
LC_NUMERIC=&quot;en_US.UTF-8&quot;
LC_TIME=&quot;en_US.UTF-8&quot;
LC_COLLATE=&quot;en_US.UTF-8&quot;
LC_MONETARY=&quot;en_US.UTF-8&quot;
LC_MESSAGES=&quot;en_US.UTF-8&quot;
LC_PAPER=&quot;en_US.UTF-8&quot;
LC_NAME=&quot;en_US.UTF-8&quot;
LC_ADDRESS=&quot;en_US.UTF-8&quot;
LC_TELEPHONE=&quot;en_US.UTF-8&quot;
LC_MEASUREMENT=&quot;en_US.UTF-8&quot;
LC_IDENTIFICATION=&quot;en_US.UTF-8&quot;
LC_ALL=
user1@vm1:~$ man man
MAN(1)                Manual pager utils                MAN(1)

NAME
       man - an interface to the on-line reference manuals
user1@vm1:~$ sudo dpkg-reconfigure locales
---------------| Configuring locales |-----------------------
|                                                           |
| Locales are a framework to switch between multiple        |
| languages and allow users to use their language,          |
| country, characters, collation order, etc.                |
|                                                           |
| Please choose which locales to generate. UTF-8 locales    |
| should be chosen by default, particularly for new         |
| installations. Other character sets may be useful for     |
| backwards compatibility with older systems and software.  |
|                                                           |
|                          &lt;Ok&gt;                             |
|                                                           |
-------------------------------------------------------------
           -----------| Configuring locales |--------
           | Locales to be generated:               |
           |                                        |
           |    [ ] fr_BE@euro ISO-8859-15          |
           |    [ ] fr_CA ISO-8859-1                |
           |    [ ] fr_CA.UTF-8 UTF-8               |
           |    [ ] fr_CH ISO-8859-1                |
           |    [ ] fr_CH.UTF-8 UTF-8               |
           |    [*] fr_FR ISO-8859-1                |
           |    [ ] fr_FR.UTF-8 UTF-8               |
           |    [ ] fr_FR@euro ISO-8859-15          |
           |                                        |
           |                                        |
           |        &lt;Ok&gt;            &lt;Cancel&gt;        |
           |                                        |
           ------------------------------------------
 ------------------ Configuring locales ----------------------
 |                                                           |
 | Many packages in Debian use locales to display text in    |
 | the correct language for the user. You can choose a       |
 | default locale for the system from the generated          |
 | locales.                                                  |
 |                                                           |
 | This will select the default language for the entire      |
 | system. If this system is a multi-user system where not   |
 | all users are able to speak the default language, they    |
 | will experience difficulties.                             |
 |                                                           |
 |                          &lt;Ok&gt;                             |
 |                                                           |
 -------------------------------------------------------------
------------ Configuring locales --------------
| Default locale for the system environment:  |
|                                             |
|                 None                        |
|                 en_US.UTF-8                 |
|                 fr_FR.UTF-8                 |
|                                             |
|                                             |
|          &lt;Ok&gt;              &lt;Cancel&gt;         |
|                                             |
-----------------------------------------------
Generating locales (this might take a while)...
  en_US.UTF-8... done
  fr_FR.UTF-8... done
Generation complete.
user1@vm1:~$ export LANG=fr_FR.UTF-8
user1@vm1:~$ echo $LANG
fr_FR.UTF-8
user1@vm1:~$ locale
LANG=fr_FR.UTF-8
LANGUAGE=en_US:en
LC_CTYPE=&quot;fr_FR.UTF-8&quot;
LC_NUMERIC=&quot;fr_FR.UTF-8&quot;
LC_TIME=&quot;fr_FR.UTF-8&quot;
LC_COLLATE=&quot;fr_FR.UTF-8&quot;
LC_MONETARY=&quot;fr_FR.UTF-8&quot;
LC_MESSAGES=&quot;fr_FR.UTF-8&quot;
LC_PAPER=&quot;fr_FR.UTF-8&quot;
LC_NAME=&quot;fr_FR.UTF-8&quot;
LC_ADDRESS=&quot;fr_FR.UTF-8&quot;
LC_TELEPHONE=&quot;fr_FR.UTF-8&quot;
LC_MEASUREMENT=&quot;fr_FR.UTF-8&quot;
LC_IDENTIFICATION=&quot;fr_FR.UTF-8&quot;
LC_ALL=
user1@vm1:~$ man man
MAN(1)  Utilitaires de l&#39;afficheur des pages de manuel  MAN(1)

NOM
       man   -   interface  de  consultation  des  manuels  de
       r\xE9f\xE9rence en ligne
user1@vm1:~$ export LANG=en_US.UTF-8
user1@vm1:~$
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br></div></div><h2 id="\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#\u89E3\u91CA" aria-hidden="true">#</a> \u89E3\u91CA</h2><ol><li><p>\u6253\u5370\u4F60\u5F53\u524D\u4F7F\u7528\u7684<code>LANG</code>\u53D8\u91CF\uFF0C\u7A0B\u5E8F\u7528\u5B83\u6765\u786E\u5B9A\u4E0E\u4F60\u8FDB\u884C\u4EA4\u4E92\u65F6\u8981\u4F7F\u7528\u7684\u8BED\u8A00\u3002</p></li><li><p>\u6309\u7167\u6307\u5B9A\u7684\u56FD\u5BB6/\u5730\u533A\u7684\u683C\u5F0F\uFF0C\u6253\u5370\u6240\u6709\u533A\u57DF\u53D8\u91CF\uFF0C\u7A0B\u5E8F\u5458\u4F7F\u7528\u5B83\u4EEC\u6765\u8BBE\u7F6E\u6570\u5B57\uFF0C\u5730\u5740\uFF0C\u7535\u8BDD\u683C\u5F0F\uFF0C\u4EE5\u53CA\u5176\u5B83\u3002</p></li><li><p>\u663E\u793A unix \u624B\u518C\u7CFB\u7EDF\u7684\u624B\u518C\u9875\u3002\u6CE8\u610F\u6211\u5982\u4F55\u4F7F\u7528<code>#</code>\u6765\u6CE8\u91CA\u4E00\u4E2A\u52A8\u4F5C\uFF0C<code>#</code>\u4E4B\u540E\u7684\u6240\u6709\u5185\u5BB9\u90FD\u4E0D\u6267\u884C\u3002</p></li><li><p>\u6267\u884C\u7A0B\u5E8F\u6765\u91CD\u65B0\u914D\u7F6E\u4F60\u7684\u533A\u57DF\u8BBE\u7F6E\u3002\u56E0\u4E3A\u8FD9\u4E2A\u53D8\u5316\u662F\u7CFB\u7EDF\u5C42\u6B21\u7684\uFF0C\u4F60\u9700\u8981\u4EE5 root \u8EAB\u4EFD\u8FD0\u884C\u8FD9\u4E2A\u547D\u4EE4\uFF0C\u8FD9\u5C31\u662F\u5728<code>dpkg-reconfigure locales</code>\u524D\u9762\u6709<code>sudo</code>\u7684\u539F\u56E0\u3002\u73B0\u5728\u4E0D\u8981\u7EA0\u7ED3<code>sudo</code>\uFF0C\u6211\u4F1A\u8BA9\u4F60\u719F\u6089\u5B83\u3002</p></li><li><p>\u5BFC\u51FA<code>LANG</code>\u53D8\u91CF\uFF0C\u7528\u4E8E\u8BBE\u7F6E\u6240\u6709\u5176\u4ED6\u533A\u57DF\u53D8\u91CF\u3002</p></li><li><p>\u6253\u5370\u51FA<code>LANG</code>\u53D8\u91CF\uFF0C\u4F60\u53EF\u4EE5\u770B\u5230\u5B83\u5DF2\u7ECF\u6539\u53D8\u4E86\uFF0C\u6309\u7167\u4F60\u7684\u9884\u671F\u3002</p></li><li><p>\u6253\u5370\u5176\u5B83\u5DF2\u66F4\u6539\u7684\u533A\u57DF\u53D8\u91CF\u3002</p></li><li><p>\u4EE5\u6CD5\u8BED\u663E\u793A<code>man</code>\u624B\u518C\u9875\u3002</p></li><li><p>\u5C06\`LANG\u53D8\u91CF\u6062\u590D\u4E3A\u82F1\u6587\u3002</p></li></ol><h2 id="\u9644\u52A0\u9898" tabindex="-1"><a class="header-anchor" href="#\u9644\u52A0\u9898" aria-hidden="true">#</a> \u9644\u52A0\u9898</h2><ul><li><p>\u9605\u8BFB\u533A\u57DF\u8BBE\u7F6E\u7684\u624B\u518C\u9875\u3002\u4E3A\u6B64\uFF0C\u8BF7\u8F93\u5165<code>man locale</code>\u3002</p></li><li><p>\u73B0\u5728\uFF0C\u9605\u8BFB<code>man 7 locale</code>\u9875\u9762\u3002\u6CE8\u610F\u6211 \u5728\u8FD9\u91CC\u4F7F\u7528<code>7</code>\uFF0C\u6765\u8C03\u7528\u5173\u4E8E\u7EA6\u5B9A\u7684\u624B\u518C\u9875\u3002\u5982\u679C\u4F60\u613F\u610F\uFF0C \u73B0\u5728\u9605\u8BFB<code>man man</code>\uFF0C\u4E86\u89E3\u5176\u4ED6\u53EF\u80FD\u7684\u4EE3\u7801\u662F\u4EC0\u4E48\uFF0C\u6216\u8005\u53EA\u662F\u7B49\u5F85\u6DB5\u76D6\u5B83\u7684\u7EC3\u4E60\u3002</p></li></ul>`,12);function A(N,E){const s=r("ExternalLinkIcon");return p(),c(o,null,[u,n("blockquote",null,[n("p",null,[t,n("a",m,[d,a(s)])])]),n("blockquote",null,[n("p",null,[_,n("a",h,[f,a(s)])])]),n("blockquote",null,[n("p",null,[g,n("a",U,[F,a(s)])])]),n("blockquote",null,[n("p",null,[T,n("a",L,[q,a(s)])])]),C],64)}var x=l(i,[["render",A]]);export{x as default};
