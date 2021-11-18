import{d as e}from"./app.7980cf23.js";const o={},s=e('<p>IDEA 默认集成了 <strong>Terminal</strong>，但默认使用的终端确是 <code>cmd.exe</code>（<code>Windows10</code> 默认则是 <code>PowerShell</code>）。而众所周知，<code>Windows</code> 在命令行上做得确实有够难用的，所以我们可以选择其他的第三方终端进行使用。</p><p>这里演示一下使用 <code>Git-Bash</code> 作为默认集成的终端</p><p>在设置 <code>Settings &gt; Tools &gt; Terminal</code> 下有一个 <code>Shell path</code> 的选择框。</p><p>在里面填写以下内容：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token string">&quot;D:\\Program<span class="token entity" title="\\c">\\c</span>mder<span class="token entity" title="\\v">\\v</span>endor\\git-for-windows<span class="token entity" title="\\b">\\b</span>in<span class="token entity" title="\\b">\\b</span>ash.exe&quot;</span>  -login -i\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>注：这里吾辈直接使用了 <code>cmder</code> 内置的 <code>Git</code> 客户端，关于 <code>cmder</code> 可以参考另外一篇内容：<a href="/p/f97fcb0bc7d747e08ce70de500bf68cb">Cmder 启动报错</a><br> 而且使用 Git-Bash 的话最好确保安装的 Git 是最新版本，否则 IDEA Terminal 有可能出现光标位置偏移的错误。</p></blockquote><p>字符串中的内容是本机上的 <code>Git-Bash</code> 的程序完全路径，后面两个参数则是为了避免在 <code>IDEA</code> 集成的终端下发生有中文时光标异常的问题。</p>',7);o.render=function(e,o){return s};export{o as default};