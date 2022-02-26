import{_ as a,r as l,o as t,c as o,a as n,b as r,F as i,d as s,e as p}from"./app.91d0dc40.js";const d={},u=n("h1",{id:"\u7EC3\u4E60-18-\u65E5\u5FD7-var-log-rsyslog-logger",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7EC3\u4E60-18-\u65E5\u5FD7-var-log-rsyslog-logger","aria-hidden":"true"},"#"),s(" \u7EC3\u4E60 18\uFF1A\u65E5\u5FD7\uFF1A"),n("code",null,"/var/log"),s("\uFF0C"),n("code",null,"rsyslog"),s("\uFF0C"),n("code",null,"logger")],-1),b=s("\u539F\u6587\uFF1A"),c={href:"https://archive.fo/xmofk",target:"_blank",rel:"noopener noreferrer"},m=s("Exercise 18. Logging, /var/log, rsyslog, logger"),g=s("\u8BD1\u8005\uFF1A"),v={href:"https://github.com/wizardforcel",target:"_blank",rel:"noopener noreferrer"},h=s("\u98DE\u9F99"),f=s("\u534F\u8BAE\uFF1A"),J={href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank",rel:"noopener noreferrer"},x=s("CC BY-NC-SA 4.0"),_=s("\u81EA\u8C6A\u5730\u91C7\u7528"),w={href:"https://translate.google.cn/",target:"_blank",rel:"noopener noreferrer"},y=s("\u8C37\u6B4C\u7FFB\u8BD1"),k=p(`<p>\u5B88\u62A4\u8FDB\u7A0B\u662F\u5728\u540E\u53F0\u8FD0\u884C\u7684\u7A0B\u5E8F\u3002\u6240\u4EE5\u95EE\u9898\u6765\u4E86\uFF1A\u4ED6\u4EEC\u600E\u4E48\u544A\u8BC9\u4F60\u4ED6\u4EEC\u5728\u505A\u4EC0\u4E48\uFF1F\u4ED6\u4EEC\u5982\u4F55\u544A\u8BC9\u4F60\u6709\u4EC0\u4E48\u95EE\u9898\uFF1F\u8FD9\u4E2A\u95EE\u9898\u662F\u7531\u65E5\u5FD7\u6587\u4EF6\u89E3\u51B3\u7684\uFF0C\u5176\u4E2D\u5B88\u62A4\u8FDB\u7A0B\u5199\u5165\u5176\u72B6\u6001\u548C\u64CD\u4F5C\u3002\u5728 Debian \u4E2D\uFF0C\u8FD9\u4E2A\u6587\u4EF6\u4F4D\u4E8E<code>/var/log</code>\u76EE\u5F55\u4E0B\u3002</p><p>\u4F46\u8C01\u5199\u5165\u8FD9\u4E9B\u6587\u4EF6\uFF1F\u6700\u660E\u663E\u7684\u7B54\u6848\u662F\u5B88\u62A4\u8FDB\u7A0B\u672C\u8EAB\uFF0C\u8FD9\u5B9E\u9645\u4E0A\u5F80\u5F80\u662F\u9519\u8BEF\u7684\u3002\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u5B88\u62A4\u7A0B\u5E8F\u786E\u5B9E\u4F1A\u81EA\u5DF1\u7F16\u5199\u65E5\u5FD7\u6587\u4EF6\uFF0C\u4F46\u901A\u5E38\u5B83\u4EEC\u901A\u8FC7\u540D\u4E3A<code>rsyslogd</code>\u7684\u5B88\u62A4\u7A0B\u5E8F\uFF08\u79F0\u4E3A \u65E5\u5FD7\u8BB0\u5F55\u5B88\u62A4\u7A0B\u5E8F\uFF09\u6765\u5B9E\u73B0\u3002\u5B83\u5C06\u65E5\u5FD7\u5199\u5165\u4E0D\u540C\u7684\u6587\u4EF6\uFF0C\u6765\u7B80\u5316\u641C\u7D22\u548C\u5206\u6790\u3002\u4E3A\u4E86\u533A\u5206\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u5B83\u6709\u4E00\u4E2A\u6982\u5FF5\u53EB\u505A\u201C\u8BBE\u65BD\u201D\u3002\u8FD9\u662F\u6807\u51C6\u8BBE\u65BD\u7684\u5217\u8868\uFF1A</p><table><thead><tr><th>\u8BBE\u65BD</th><th>\u8BBE\u65BD\u8BF4\u660E</th><th>\u8BBE\u65BD</th><th>\u8BBE\u65BD\u8BF4\u660E</th></tr></thead><tbody><tr><td>auth</td><td>\u6388\u6743\u76F8\u5173\u6D88\u606F</td><td>LOCAL0</td><td>\u672C\u5730\u4F7F\u7528 0</td></tr><tr><td>authPriv</td><td>\u654F\u611F\u7684\u5B89\u5168\u4FE1\u606F</td><td>LOCAL1</td><td>\u672C\u5730\u4F7F\u75281</td></tr><tr><td>cron</td><td>Cron\u4FE1\u606F</td><td>local2</td><td>\u672C\u5730\u4F7F\u7528 2</td></tr><tr><td>daemon</td><td>\u7CFB\u7EDF\u5B88\u62A4\u7A0B\u5E8F</td><td>local3</td><td>\u672C\u5730\u4F7F\u7528 3</td></tr><tr><td>ftp</td><td>FTP \u5B88\u62A4\u6D88\u606F</td><td>local4</td><td>\u672C\u5730\u4F7F\u7528 4</td></tr><tr><td>kern</td><td>\u5185\u6838\u6D88\u606F</td><td>local5</td><td>\u672C\u5730\u4F7F\u7528 5</td></tr><tr><td>lpr</td><td>\u884C\u5F0F\u6253\u5370\u673A\u5B50\u7CFB\u7EDF</td><td>local6</td><td>\u5F53\u5730\u4F7F\u7528 6</td></tr><tr><td>mail</td><td>\u90AE\u4EF6\u5B50\u7CFB\u7EDF</td><td>local7</td><td>\u5F53\u5730\u4F7F\u7528 7</td></tr><tr><td>news</td><td>\u65B0\u95FB\u5B50\u7CFB\u7EDF</td><td></td><td></td></tr><tr><td>security</td><td>auth \u7684\u8FC7\u65F6\u540D\u79F0</td><td></td><td></td></tr><tr><td>syslog</td><td>\u7531 syslogd \u5185\u90E8\u751F\u6210\u7684\u6D88\u606F</td><td></td><td></td></tr><tr><td>user</td><td></td><td></td><td></td></tr><tr><td>uucp</td><td>UUCP \u5B50\u7CFB\u7EDF</td><td></td><td></td></tr></tbody></table><p>\u6BCF\u4E2A\u6761\u76EE\u4E5F\u6807\u8BB0\u6709\u4E25\u91CD\u6027\u72B6\u6001\uFF0C\u4EE5\u4FBF\u5206\u6790\u53D1\u751F\u4E86\u4EC0\u4E48\uFF1A</p><table><thead><tr><th>\u4EE3\u7801\u540D\u79F0</th><th>\u4E25\u91CD\u6027</th><th>\u63CF\u8FF0</th><th>\u4E00\u822C\u8BF4\u660E</th></tr></thead><tbody><tr><td>alert</td><td>\u8B66\u62A5</td><td>\u5FC5\u987B\u7ACB\u5373\u91C7\u53D6\u884C\u52A8\u3002</td><td>\u5E94\u7ACB\u5373\u7EA0\u6B63\uFF0C\u56E0\u6B64\u901A\u77E5\u53EF\u4EE5\u89E3\u51B3\u95EE\u9898\u7684\u4EBA\u5458\u3002\u4E00\u4E2A\u4F8B\u5B50\u662F\u4E22\u5931\u5907\u7528 ISP \u8FDE\u63A5\u3002</td></tr><tr><td>crit</td><td>\u4E25\u91CD</td><td>\u4E25\u91CD\u60C5\u51B5\u3002</td><td>\u5E94\u7ACB\u5373\u7EA0\u6B63\uFF0C\u4F46\u8868\u793A\u4E3B\u7CFB\u7EDF\u51FA\u73B0\u6545\u969C\uFF0C\u4E00\u4E2A\u4F8B\u5B50\u5C31\u662F\u4E3B ISP \u8FDE\u63A5\u7684\u4E22\u5931 \u3002</td></tr><tr><td>debug</td><td>\u8C03\u8BD5</td><td>\u8C03\u8BD5\u7EA7\u522B\u6D88\u606F\u3002</td><td>\u4FE1\u606F\u5BF9\u5F00\u53D1\u4EBA\u5458\u6709\u7528\uFF0C\u7528\u4E8E\u8C03\u8BD5\u5E94\u7528\u7A0B\u5E8F\uFF0C\u5728\u64CD\u4F5C\u671F\u95F4\u65E0\u7528\u3002</td></tr><tr><td>emerg</td><td>\u7D27\u6025</td><td>\u7CFB\u7EDF\u4E0D\u53EF\u7528</td><td>\u901A\u5E38\u5F71\u54CD\u591A\u4E2A\u5E94\u7528\u7A0B\u5E8F/\u670D\u52A1\u5668/\u7AD9\u70B9\u7684\u201C\u7D27\u6025\u201D\u72B6\u6001\u3002\u5728\u8FD9\u4E2A\u7EA7\u522B\uFF0C\u901A\u5E38\u4F1A\u901A\u77E5\u6240\u6709\u6280\u672F\u4EBA\u5458\u3002</td></tr><tr><td>err</td><td>\u9519\u8BEF</td><td>\u9519\u8BEF\u60C5\u51B5\u3002</td><td>\u975E\u7D27\u6025\u6545\u969C\uFF0C\u5E94\u8F6C\u53D1\u7ED9\u5F00\u53D1\u4EBA\u5458\u6216\u7BA1\u7406\u5458\uFF1B\u6BCF\u4E2A\u9879\u76EE\u5FC5\u987B\u5728\u7ED9\u5B9A\u7684\u65F6\u95F4\u5185\u89E3\u51B3\u3002</td></tr><tr><td>error</td><td>\u9519\u8BEF</td><td>err \u7684\u5F03\u7528\u540D\u79F0</td><td>---</td></tr><tr><td>info</td><td>\u4FE1\u606F</td><td>\u4FE1\u606F\u6D88\u606F</td><td>\u6B63\u5E38\u64CD\u4F5C\u7684\u4FE1\u606F - \u53EF\u4EE5\u7528\u4E8E\u6536\u96C6\u62A5\u544A\uFF0C\u6D4B\u91CF\u541E\u5410\u91CF\u7B49 - \u65E0\u9700\u91C7\u53D6\u4EFB\u4F55\u884C\u52A8\u3002</td></tr><tr><td>notice</td><td>\u6CE8\u610F</td><td>\u6B63\u5E38\u4F46\u91CD\u8981\u7684\u72B6\u51B5\u3002</td><td>\u4E0D\u6B63\u5E38\u4F46\u4E0D\u662F\u9519\u8BEF\u60C5\u51B5\u7684\u4E8B\u4EF6\uFF0C\u53EF\u80FD\u6C47\u603B\u4E3A\u90AE\u4EF6\u53D1\u7ED9\u5F00\u53D1\u8005\u6216\u8005\u7BA1\u7406\u5458\uFF0C\u6765\u5B9A\u4F4D\u6F5C\u5728\u95EE\u9898 - \u4E0D\u9700\u8981\u7ACB\u5373\u91C7\u53D6\u884C\u52A8\u3002</td></tr><tr><td>panic</td><td>\u7D27\u6025</td><td>emerg \u7684\u5F03\u7528\u540D\u79F0</td><td>---</td></tr><tr><td>warning</td><td>\u8B66\u544A</td><td>\u8B66\u544A\u60C5\u51B5\u3002</td><td>\u8B66\u544A\u6D88\u606F\uFF0C\u800C\u4E0D\u662F\u9519\u8BEF\uFF0C\u4F46\u8868\u793A\u5982\u679C\u4E0D\u91C7\u53D6\u884C\u52A8\uFF0C\u5C06\u53D1\u751F\u9519\u8BEF\uFF0C\u4F8B\u5982\u6587\u4EF6\u7CFB\u7EDF 85% \u5360\u6EE1 - \u6BCF\u4E2A\u6761\u76EE\u5FC5\u987B\u5728\u7ED9\u5B9A\u65F6\u95F4\u5185\u89E3\u51B3\u3002</td></tr><tr><td>warn</td><td>\u8B66\u544A</td><td>warning \u7684\u5F03\u7528\u540D\u79F0</td><td>---</td></tr></tbody></table><p>\u56E0\u4E3A\u5982\u679C\u65E5\u5FD7\u6587\u4EF6\u7559\u7ED9\u81EA\u5DF1\uFF0C\u5B83\u4EEC\u5F80\u5F80\u4F1A\u53D8\u5F97\u975E\u5E38\u5927\uFF0C\u5E76\u4E14\u6D88\u8017\u6240\u6709\u53EF\u7528\u7684\u78C1\u76D8\u7A7A\u95F4\uFF0C\u6240\u4EE5\u6709\u4E00\u79CD\u79F0\u4E3A\u8F6E\u66FF\u7684\u673A\u5236\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u79CD\u673A\u5236\u901A\u5E38\u53EA\u4FDD\u7559\u6700\u540E 7 \u5929\u7684\u65E5\u5FD7\u6587\u4EF6\uFF0C\u5305\u62EC\u4ECA\u5929\u3002\u8F6E\u66FF\u7531<code>logrotate</code>\u5B88\u62A4\u8FDB\u7A0B\u6267\u884C\uFF0C\u6765\u5E2E\u52A9\u4F60\u4E86\u89E3\u8FD9\u4E2A\u5B88\u62A4\u8FDB\u7A0B\u505A\u4E86\u4EC0\u4E48\u3002\u6211\u4E3A\u4F60\u5C06\u5176\u5199\u51FA\u6765\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Day 0
    log.0 is created
Day 1
    mv log.0 log.1
    log.0 is created
Day 2
    mv log.1 log.2
    mv log.0 log.1
    log.0 is created
Day 3
    mv log.2 log.3
    mv log.1 log.2
    mv log.0 log.1
    log.0 is created
Day 4
    mv log.3 log.4
    mv log.2 log.3
    mv log.1 log.2
    mv log.0 log.1
    log.0 is created
Day 5
    mv log.4 log.5
    mv log.3 log.4
    mv log.2 log.3
    mv log.1 log.2
    mv log.0 log.1
    log.0 is created
Day 6
    mv log.5 log.6
    mv log.4 log.5
    mv log.3 log.4
    mv log.2 log.3
    mv log.1 log.2
    mv log.0 log.1
    log.0 is created
Day 7
    rm log.6
    mv log.5 log.6
    mv log.4 log.5
    mv log.3 log.4
    mv log.2 log.3
    mv log.1 log.2
    mv log.0 log.1
    log.0 is created
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p>\u8BA9\u6211\u91CD\u590D\u4E00\u4E0B\uFF1A</p><ul><li>\u65E5\u5FD7\u662F\u4E00\u4E2A\u8BB0\u5F55\u65F6\u95F4\u7684\u8FC7\u7A0B\uFF0C\u4F7F\u7528\u81EA\u52A8\u5316\u7684\u8BA1\u7B97\u673A\u7A0B\u5E8F\uFF0C\u6765\u63D0\u4F9B\u5BA1\u8BA1\u8DDF\u8E2A\uFF0C\u53EF\u7528\u4E8E\u4E86\u89E3\u7CFB\u7EDF\u6D3B\u52A8\u548C\u8BCA\u65AD\u95EE\u9898\u3002</li><li>\u65E5\u5FD7\u5B88\u62A4\u7A0B\u5E8F\u662F\u7A0B\u5E8F\uFF0C\u5176\u4ED6\u7A0B\u5E8F\u53EF\u80FD\u8981\u6C42\u5B83\u5728\u65E5\u5FD7\u6587\u4EF6\u4E2D\u5199\u5165\u5185\u5BB9\u3002</li><li>\u6BCF\u4E2A\u65E5\u5FD7\u6761\u76EE\u5177\u6709\u8BBE\u65BD\uFF08\u65E5\u5FD7\u7C7B\u522B\uFF09\u548C\u4E25\u91CD\u6027 \uFF08\u5B83\u662F\u591A\u4E48\u91CD\u8981\uFF09\u5C5E\u6027\u3002</li><li>\u8F6E\u66FF\u662F\u4E00\u4E2A\u8FC7\u7A0B\uFF0C\u4EC5\u4FDD\u7559\u6709\u9650\u6570\u91CF\u7684\u65E5\u5FD7\u6587\u4EF6\uFF0C\u6765\u907F\u514D\u586B\u6EE1\u78C1\u76D8\u3002</li><li>\u5728 Debian \u4E2D\uFF0C\u65E5\u5FD7\u6587\u4EF6\u901A\u5E38\u4F4D\u4E8E<code>/var/log</code>\u76EE\u5F55\u4E2D\u3002</li></ul><p>\u8FD9\u662F\u5904\u7406\u65E5\u5FD7\u7684\u6709\u7528\u547D\u4EE4\uFF08\u8981\u8BB0\u4F4F\u6253\u5F00\u76F8\u5173\u7684\u624B\u518C\u9875\uFF0C\u5E76\u627E\u51FA\u6709\u4EC0\u4E48\u9009\u9879\uFF09\uFF1A</p><ul><li><code>logger Hello, I have a kitty!</code> - \u7F16\u5199\u4E00\u4E2A\u81EA\u5B9A\u4E49\u65E5\u5FD7\u6D88\u606F\u3002</li><li><code>ls -altr /var/log</code> - \u5217\u51FA\u65E5\u5FD7\u76EE\u5F55\uFF0C\u4EE5\u8FD9\u6837\u4E00\u79CD\u65B9\u5F0F\uFF0C\u6700\u540E\u4FEE\u6539\u7684\u6587\u4EF6\u5230\u6700\u540E\u3002</li><li><code>grep user1 /var/log/auth.log</code> - \u5217\u51FA\u6587\u4EF6\u4E2D\u5305\u542B<code>user1</code>\u7684\u6240\u6709\u884C\u3002</li><li><code>grep -irl user1 /var/log</code> - \u5217\u51FA\u6240\u6709\u5305\u542B<code>user1</code>\u7684\u6587\u4EF6 \u3002</li><li><code>find /var/log -mmin -10</code> - \u627E\u5230\u5728\u8FC7\u53BB 10 \u5206\u949F\u5185\u88AB\u4FEE\u6539\u7684\u4EFB\u4F55\u6587\u4EF6\u3002</li><li><code>tail /var/log/auth.log</code> - \u6253\u5370\u65E5\u5FD7\u6587\u4EF6\u7684\u6700\u540E 10 \u884C\u3002</li><li><code>tail -f /var/log/auth.log</code> - \u5B9E\u65F6\u8DDF\u8E2A\u65E5\u5FD7\u6587\u4EF6\u3002\u914D\u7F6E\u5B88\u62A4\u8FDB\u7A0B\u65F6\u975E\u5E38\u6709\u7528\u3002</li></ul><p>\u73B0\u5728\u4F60\u5C06\u5B66\u4E60\u5982\u4F55\u67E5\u770B\u65E5\u5FD7\uFF0C\u5E76\u5C06\u4E00\u4E9B\u4E1C\u897F\u5199\u5165\u7CFB\u7EDF\u65E5\u5FD7\u3002</p><h2 id="\u8FD9\u6837\u505A" tabindex="-1"><a class="header-anchor" href="#\u8FD9\u6837\u505A" aria-hidden="true">#</a> \u8FD9\u6837\u505A</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> 1: sudo -s
 2: cd /var/log
 3: ls -altr | tail
 4: tail auth.log
 5: grep user1 auth.log | tail
 6: /etc/init.d/exim4 restart
 7: find /var/log -mmin -5
 8: tail /var/log/exim4/mainlog
 9: grep -irl rcconf .
10: tail ./dpkg.log
11: last
12: lastlog
13: logger local0.alert I am a kitty, sittin in ur system watchin u work ^^
14: ls -altr | tail
15: tail messages
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="\u4F60\u4F1A\u770B\u5230\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u4F60\u4F1A\u770B\u5230\u4EC0\u4E48" aria-hidden="true">#</a> \u4F60\u4F1A\u770B\u5230\u4EC0\u4E48</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user1@vm1:~$ sudo -s
root@vm1:/home/user1# cd /var/log
root@vm1:/var/log# ls -altr | tail
-rw-r-----  1 root        adm   46955 Jun 29 12:28 messages
-rw-r-----  1 root        adm   19744 Jun 29 12:28 dmesg
-rw-r-----  1 root        adm     696 Jun 29 12:28 daemon.log
drwxr-xr-x  7 root        root   4096 Jun 29 12:28 .
-rw-r-----  1 root        adm   60738 Jun 29 12:28 syslog
-rw-r-----  1 root        adm   58158 Jun 29 12:28 kern.log
-rw-r-----  1 root        adm   12652 Jun 29 12:28 debug
-rw-rw-r--  1 root        utmp  75264 Jun 29 12:28 wtmp
-rw-rw-r--  1 root        utmp 292584 Jun 29 12:28 lastlog
-rw-r-----  1 root        adm   38790 Jun 29 12:40 auth.log
root@vm1:/var/log# tail auth.log
Jun 29 12:28:22 vm1 sshd[983]: Server listening on 0.0.0.0 port 22.
Jun 29 12:28:22 vm1 sshd[983]: Server listening on :: port 22.
Jun 29 12:28:44 vm1 sshd[1214]: Accepted password for user1 from 194.85.195.183 port 53775 ssh2
Jun 29 12:28:44 vm1 sshd[1214]: pam_unix(sshd:session): session opened for user user1 by (uid=0)
Jun 29 12:30:49 vm1 sudo:    user1 : TTY=pts/0 ; PWD=/home/user1 ; USER=root ; COMMAND=/bin/bash
Jun 29 12:30:53 vm1 login[1260]: pam_securetty(login:auth): unexpected response from failed conversation function
Jun 29 12:30:53 vm1 login[1260]: pam_securetty(login:auth): cannot determine username
Jun 29 12:35:08 vm1 sudo:    user1 : TTY=pts/0 ; PWD=/home/user1 ; USER=root ; COMMAND=/bin/bash
Jun 29 12:35:14 vm1 sudo:    user1 : TTY=pts/0 ; PWD=/home/user1 ; USER=root ; COMMAND=/bin/bash
Jun 29 12:40:32 vm1 sudo:    user1 : TTY=pts/0 ; PWD=/home/user1 ; USER=root ; COMMAND=/bin/bash
root@vm1:/var/log# tail auth.log | grep user1
Jun 29 12:28:44 vm1 sshd[1214]: Accepted password for user1 from 194.85.195.183 port 53775 ssh2
Jun 29 12:28:44 vm1 sshd[1214]: pam_unix(sshd:session): session opened for user user1 by (uid=0)
Jun 29 12:30:49 vm1 sudo:    user1 : TTY=pts/0 ; PWD=/home/user1 ; USER=root ; COMMAND=/bin/bash
Jun 29 12:35:08 vm1 sudo:    user1 : TTY=pts/0 ; PWD=/home/user1 ; USER=root ; COMMAND=/bin/bash
Jun 29 12:35:14 vm1 sudo:    user1 : TTY=pts/0 ; PWD=/home/user1 ; USER=root ; COMMAND=/bin/bash
Jun 29 12:40:32 vm1 sudo:    user1 : TTY=pts/0 ; PWD=/home/user1 ; USER=root ; COMMAND=/bin/bash
root@vm1:/var/log# grep user1 auth.log | tail
Jun 29 12:26:33 vm1 sshd[1302]: Accepted password for user1 from 194.85.195.183 port 53008 ssh2
Jun 29 12:26:33 vm1 sshd[1302]: pam_unix(sshd:session): session opened for user user1 by (uid=0)
Jun 29 12:26:38 vm1 sudo:    user1 : TTY=pts/0 ; PWD=/home/user1 ; USER=root ; COMMAND=/bin/bash
Jun 29 12:28:02 vm1 sshd[1302]: pam_unix(sshd:session): session closed for user user1
Jun 29 12:28:44 vm1 sshd[1214]: Accepted password for user1 from 194.85.195.183 port 53775 ssh2
Jun 29 12:28:44 vm1 sshd[1214]: pam_unix(sshd:session): session opened for user user1 by (uid=0)
Jun 29 12:30:49 vm1 sudo:    user1 : TTY=pts/0 ; PWD=/home/user1 ; USER=root ; COMMAND=/bin/bash
Jun 29 12:35:08 vm1 sudo:    user1 : TTY=pts/0 ; PWD=/home/user1 ; USER=root ; COMMAND=/bin/bash
Jun 29 12:35:14 vm1 sudo:    user1 : TTY=pts/0 ; PWD=/home/user1 ; USER=root ; COMMAND=/bin/bash
Jun 29 12:40:32 vm1 sudo:    user1 : TTY=pts/0 ; PWD=/home/user1 ; USER=root ; COMMAND=/bin/bash
root@vm1:/home/user1# /etc/init.d/exim4 restart
Stopping MTA for restart: exim4_listener.
Restarting MTA: exim4.
root@vm1:/home/user1# find /var/log -mmin -5
/var/log/exim4/mainlog
/var/log/auth.log
root@vm1:/home/user1# tail /var/log/exim4/mainlog
2012-06-29 12:24:11 exim 4.72 daemon started: pid=1159, -q30m, listening for SMTP on [127.0.0.1]:25 [::1]:25
2012-06-29 12:24:11 Start queue run: pid=1165
2012-06-29 12:24:11 End queue run: pid=1165
2012-06-29 12:28:22 exim 4.72 daemon started: pid=1190, -q30m, listening for SMTP on [127.0.0.1]:25 [::1]:25
2012-06-29 12:28:22 Start queue run: pid=1196
2012-06-29 12:28:22 End queue run: pid=1196
2012-06-29 12:41:18 exim 4.72 daemon started: pid=1622, -q30m, listening for SMTP on [127.0.0.1]:25 [::1]:25
2012-06-29 12:41:18 Start queue run: pid=1624
2012-06-29 12:41:18 End queue run: pid=1624
2012-06-29 12:42:28 exim 4.72 daemon started: pid=1886, -q30m, listening for SMTP on [127.0.0.1]:25 [::1]:25
root@vm1:/home/user1# grep -irl rcconf .
./aptitude
./apt/history.log
./apt/term.log
./dpkg.log
./auth.log
root@vm1:/home/user1# tail ./dpkg.log
2012-06-26 19:27:40 status unpacked rcconf 2.5
2012-06-26 19:27:40 status unpacked rcconf 2.5
2012-06-26 19:27:40 trigproc man-db 2.5.7-8 2.5.7-8
2012-06-26 19:27:40 status half-configured man-db 2.5.7-8
2012-06-26 19:27:40 status installed man-db 2.5.7-8
2012-06-26 19:27:41 startup packages configure
2012-06-26 19:27:41 configure rcconf 2.5 2.5
2012-06-26 19:27:41 status unpacked rcconf 2.5
2012-06-26 19:27:41 status half-configured rcconf 2.5
2012-06-26 19:27:41 status installed rcconf 2.5
root@vm1:/var/log# last
user1    pts/0        sis.site  Fri Jun 29 12:26   still logged in
user1    pts/0        sis.site  Fri Jun 29 12:14 - down   (00:09)
user1    pts/0        sis.site  Thu Jun 28 19:40 - 11:25  (15:45)
user1    pts/0        sis.site  Wed Jun 27 19:14 - 17:04  (21:50)
user1    pts/0        sis.site  Tue Jun 26 13:54 - 18:18 (1+04:23)
user1    pts/0        sis.site  Thu Jun 21 15:23 - 13:11 (4+21:47)
user1    pts/0        sis.site  Fri Jun 15 19:34 - 12:01 (5+16:26)
user1    pts/0        sis.site  Fri Jun 15 19:11 - 19:34  (00:22)
reboot   system boot  2.6.32-5-amd64   Fri Jun 29 12:24 - 12:26  (00:02)
user1    pts/0        sis.site  Fri Jun 29 12:14 - down   (00:09)
root@vm1:/var/log# lastlog
Username         Port     From             Latest
root                                       **Never logged in**
daemon                                     **Never logged in**
bin                                        **Never logged in**
sys                                        **Never logged in**
sync                                       **Never logged in**
games                                      **Never logged in**
man                                        **Never logged in**
lp                                         **Never logged in**
mail                                       **Never logged in**
news                                       **Never logged in**
uucp                                       **Never logged in**
proxy                                      **Never logged in**
www-data                                   **Never logged in**
backup                                     **Never logged in**
list                                       **Never logged in**
irc                                        **Never logged in**
gnats                                      **Never logged in**
nobody                                     **Never logged in**
libuuid                                    **Never logged in**
Debian-exim                                **Never logged in**
statd                                      **Never logged in**
sshd                                       **Never logged in**
user1            pts/0    sis.site  Fri Jun 29 12:28:45 +0400 2012
root@vm1:/var/log# logger local0.alert I am a kitty, sittin in ur system watchin u work ^^
root@vm1:/var/log# ls -altr | tail
-rw-r-----  1 root        adm     696 Jun 29 12:28 daemon.log
drwxr-xr-x  7 root        root   4096 Jun 29 12:28 .
-rw-r-----  1 root        adm   58158 Jun 29 12:28 kern.log
-rw-r-----  1 root        adm   12652 Jun 29 12:28 debug
-rw-rw-r--  1 root        utmp  75264 Jun 29 12:28 wtmp
-rw-rw-r--  1 root        utmp 292584 Jun 29 12:28 lastlog
-rw-r-----  1 root        adm   38971 Jun 29 13:17 auth.log
-rw-r-----  1 root        adm     229 Jun 29 13:19 user.log
-rw-r-----  1 root        adm   60932 Jun 29 13:19 syslog
-rw-r-----  1 root        adm   47047 Jun 29 13:19 messages
root@vm1:/var/log# tail messages
Jun 29 12:28:21 vm1 kernel: [    1.846975] processor LNXCPU:00: registered as cooling_device0
Jun 29 12:28:21 vm1 kernel: [    1.868828] usbcore: registered new interface driver hiddev
Jun 29 12:28:21 vm1 kernel: [    1.895676] input: QEMU 0.14.1 QEMU USB Tablet as /devices/pci0000:00/0000:00:01.2/usb1/1-1/1-1:1.0/input/input4
Jun 29 12:28:21 vm1 kernel: [    1.895743] generic-usb 0003:0627:0001.0001: input,hidraw0: USB HID v0.01 Pointer [QEMU 0.14.1 QEMU USB Tablet] on usb-0000:00:01.2-1/input0
Jun 29 12:28:21 vm1 kernel: [    1.895762] usbcore: registered new interface driver usbhid
Jun 29 12:28:21 vm1 kernel: [    1.895765] usbhid: v2.6:USB HID core driver
Jun 29 12:28:21 vm1 kernel: [    2.373061] EXT3 FS on vda1, internal journal
Jun 29 12:28:21 vm1 kernel: [    2.394992] loop: module loaded
Jun 29 12:28:21 vm1 kernel: [    2.413478] input: ImExPS/2 Generic Explorer Mouse as /devices/platform/i8042/serio1/input/input5
Jun 29 13:19:11 vm1 user1: local0.alert I am a kitty, sittin in ur system watchin u work ^^
root@vm1:/var/log#
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br></div></div><h2 id="\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#\u89E3\u91CA" aria-hidden="true">#</a> \u89E3\u91CA</h2><ul><li>\u6253\u5F00 root \uFF08\u8D85\u7EA7\u7528\u6237\uFF09shell\u3002\u8FD9\u662F\u56E0\u4E3A\u4F5C\u4E3A<code>user1</code>\u5DE5\u4F5C\u65F6\uFF0C\u51FA\u4E8E\u5B89\u5168\u7684\u8003\u8651\uFF0C\u4F60\u4E0D\u80FD\u8BFB\u53D6\u6240\u6709\u65E5\u5FD7\u6587\u4EF6\u3002</li><li>\u5C06\u76EE\u5F55\u66F4\u6539\u4E3A<code>/var/log</code>\u3002</li><li>\u6309\u65E5\u671F\u6392\u5E8F\u6253\u5370\u6240\u6709\u6587\u4EF6\uFF0C\u6700\u540E\u4FEE\u6539\u7684\u6587\u4EF6\u5728\u5E95\u90E8\u3002</li><li>\u4ECE<code>auth.log</code>\u6253\u5370\u6700\u540E 10 \u884C\uFF0C\u5305\u542B\u767B\u5F55\u7CFB\u7EDF\u7684\u4FE1\u606F\u3002</li><li>\u4ECE<code>auth.log</code>\u6253\u5370\u5305\u542B<code>user1</code>\u7684\u6700\u540E 10 \u884C\u3002</li><li>\u91CD\u542F<code>exim4</code>\u90AE\u4EF6\u670D\u52A1\u5668\u3002</li><li>\u6253\u5370\u6700\u8FD1 5 \u5206\u949F\u5185\u7684\u6587\u4EF6\u66F4\u6539\u3002\u73B0\u5728\uFF0C\u4F60\u53EF\u4EE5\u8F7B\u677E\u627E\u5230<code>exim4</code>\u5728\u54EA\u4E2A\u6587\u4EF6\u4E2D \u8BB0\u5F55\u5176\u64CD\u4F5C\u3002</li><li>\u4ECE<code>exim4</code>\u65E5\u5FD7\u6253\u5370\u51FA\u6700\u540E 10 \u884C \u3002</li><li>\u5728\u5F53\u524D\u76EE\u5F55\u4E2D\u7684\u6240\u6709\u6587\u4EF6 \u641C\u7D22<code>rcconf</code>\u3002\u73B0\u5728\uFF0C\u4F60\u53EF\u4EE5\u8F7B\u677E\u627E\u5230 Debian \u5305\u7CFB\u7EDF\u8BB0\u5F55\u5176\u64CD\u4F5C\u7684\u4F4D\u7F6E\u3002</li><li>\u4ECE<code>dpkg.log</code>\u6253\u5370\u6700\u540E 10 \u884C\uFF0C\u542B\u6709\u8F6F\u4EF6\u5305\u5B89\u88C5\u548C\u5220\u9664\u4FE1\u606F\u3002</li><li>\u6253\u5370\u7528\u6237\u6700\u540E\u767B\u5F55\u7684\u4FE1\u606F\u3002</li><li>\u6253\u5370\u6240\u6709\u7528\u6237\u6700\u8FD1\u767B\u5F55\u7684\u4FE1\u606F\u3002</li><li>\u5C06\u4F60\u7684\u6D88\u606F\u4F20\u9012\u7ED9<code>rsyslogd</code>\u5B88\u62A4\u7A0B\u5E8F\u3002</li><li>\u6309\u65E5\u671F\u6392\u5E8F\u6253\u5370\u6240\u6709\u6587\u4EF6\uFF0C\u6700\u540E\u4FEE\u6539\u7684\u6587\u4EF6\u4F4D\u4E8E\u5E95\u90E8\u3002\u73B0\u5728\u4F60\u53EF\u80FD\u4F1A\u770B\u5230\u8FD9\u91CC\u5C31\u662F\u4F60\u7684\u6D88\u606F\u3002</li><li>\u4ECE\u6D88\u606F\u4E2D\u6253\u5370\u51FA\u6700\u540E10\u884C\uFF0C\u4F60\u53EF\u4EE5\u770B\u5230\u4F60\u7684\u6D88\u606F\u786E\u5B9E\u5DF2\u8BB0\u5F55\u3002</li></ul><h2 id="\u9644\u52A0\u9898" tabindex="-1"><a class="header-anchor" href="#\u9644\u52A0\u9898" aria-hidden="true">#</a> \u9644\u52A0\u9898</h2><p>\u9605\u8BFB<code>rsyslogd</code>\u548C<code>logger</code>\u7684\u624B\u518C\u9875\u3002 \u901A\u8FC7\u9605\u8BFB\u76F8\u5E94\u7684\u624B\u518C\u9875\uFF0C\u627E\u51FA<code>last</code>\u548C<code>lastlog</code>\u4E4B\u95F4\u7684\u533A\u522B\u3002 \u9605\u8BFB<code>logrotate</code>\u624B\u518C\u9875\u5E76\u8BB0\u4F4F\u5B83\u7684\u5B58\u5728\u3002 \u6267\u884C<code>tail -f /var/log/auth.log</code>\uFF0C\u5E76\u751F\u6210<code>vm1</code>\u7684\u7B2C\u4E8C\u4E2A\u8FDE\u63A5\uFF08\u5982\u679C\u4F60\u5728 Windows \u4E0A\u5DE5\u4F5C\uFF0C\u5219\u4E3A putty\uFF09\u3002\u4E0D\u9519\u5427\uFF1F</p>`,20);function N(D,T){const e=l("ExternalLinkIcon");return t(),o(i,null,[u,n("blockquote",null,[n("p",null,[b,n("a",c,[m,r(e)])])]),n("blockquote",null,[n("p",null,[g,n("a",v,[h,r(e)])])]),n("blockquote",null,[n("p",null,[f,n("a",J,[x,r(e)])])]),n("blockquote",null,[n("p",null,[_,n("a",w,[y,r(e)])])]),k],64)}var S=a(d,[["render",N]]);export{S as default};
