import{_ as a,f as s,e as n,K as t}from"./plugin-vue_export-helper.e309f811.js";const h='{"title":"Basic \u57FA\u7840\u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"BasicTitle","slug":"basictitle"},{"level":3,"title":"Usage","slug":"usage"},{"level":3,"title":"Props","slug":"props"},{"level":3,"title":"Slots","slug":"slots"},{"level":2,"title":"BasicArrow","slug":"basicarrow"},{"level":3,"title":"Usage","slug":"usage-1"},{"level":3,"title":"Props","slug":"props-1"},{"level":2,"title":"BasicHelp","slug":"basichelp"},{"level":3,"title":"Usage","slug":"usage-2"},{"level":3,"title":"Props","slug":"props-2"},{"level":3,"title":"Slots","slug":"slots-1"}],"relativePath":"components/basic.md","lastUpdated":1652416784976}',p={},e=t(`<h1 id="basic-\u57FA\u7840\u7EC4\u4EF6"><a class="header-anchor" href="#basic-\u57FA\u7840\u7EC4\u4EF6" aria-hidden="true">#</a> Basic \u57FA\u7840\u7EC4\u4EF6</h1><p>\u4E00\u4E9B\u6BD4\u8F83\u57FA\u7840\u7684\u901A\u7528\u7EC4\u4EF6\u4F7F\u7528\u65B9\u5F0F</p><h2 id="basictitle"><a class="header-anchor" href="#basictitle" aria-hidden="true">#</a> BasicTitle</h2><p>\u7528\u4E8E\u663E\u793A\u6807\u9898\uFF0C\u53EF\u4EE5\u663E\u793A\u5E2E\u52A9\u6309\u94AE\u53CA\u6587\u672C</p><h3 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BasicTitle</span> <span class="token attr-name">helpMessage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u63D0\u793A1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6807\u9898<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BasicTitle</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BasicTitle</span> <span class="token attr-name">:helpMessage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>\u63D0\u793A1<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>\u63D0\u793A2<span class="token punctuation">&#39;</span>]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6807\u9898<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BasicTitle</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> BasicTitle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Basic/index&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> BasicTitle <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>helpMessage</td><td><code>string\uFF5Cstring[]</code></td><td>-</td><td>\u6807\u9898\u53F3\u4FA7\u5E2E\u52A9\u6309\u94AE\u4FE1\u606F</td></tr><tr><td>span</td><td><code>boolean</code></td><td><code>false</code></td><td>\u662F\u5426\u663E\u793A\u6807\u9898\u5DE6\u4FA7\u84DD\u8272\u8272\u5757</td></tr><tr><td>normal</td><td><code>boolean</code></td><td><code>false</code></td><td>\u5C06\u6587\u5B57\u9ED8\u8BA4\u5316\uFF0C\u4E0D\u52A0\u7C97</td></tr></tbody></table><h3 id="slots"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u6807\u9898\u6587\u672C</td></tr></tbody></table><h2 id="basicarrow"><a class="header-anchor" href="#basicarrow" aria-hidden="true">#</a> BasicArrow</h2><p>\u5E26\u52A8\u753B\u7684\u7BAD\u5934\u7EC4\u4EF6</p><h3 id="usage-1"><a class="header-anchor" href="#usage-1" aria-hidden="true">#</a> Usage</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BasicArrow</span> <span class="token attr-name">:expand</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> BasicArrow <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Basic/index&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> BasicArrow <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="props-1"><a class="header-anchor" href="#props-1" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>expand</td><td><code>boolean</code></td><td><code>false</code></td><td>\u7BAD\u5934\u5C55\u5F00\u72B6\u6001</td></tr><tr><td>top</td><td><code>boolean</code></td><td><code>false</code></td><td>\u7BAD\u5934\u9ED8\u8BA4\u5411\u4E0A</td></tr><tr><td>bottom</td><td><code>boolean</code></td><td><code>false</code></td><td>\u7BAD\u5934\u9ED8\u8BA4\u5411\u4E0B</td></tr><tr><td>inset</td><td><code>boolean</code></td><td><code>false</code></td><td>\u53D6\u6D88 padding/margin\uFF0C\u7528\u4E8E\u5185\u5D4C</td></tr></tbody></table><h2 id="basichelp"><a class="header-anchor" href="#basichelp" aria-hidden="true">#</a> BasicHelp</h2><p>\u5E2E\u52A9\u6309\u94AE\u7EC4\u4EF6</p><h3 id="usage-2"><a class="header-anchor" href="#usage-2" aria-hidden="true">#</a> Usage</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BasicHelp</span> <span class="token attr-name">:text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>\u63D0\u793A1<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>\u63D0\u793A2<span class="token punctuation">&#39;</span>]<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BasicHelp</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u63D0\u793A<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> BasicHelp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Basic/index&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> BasicHelp <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="props-2"><a class="header-anchor" href="#props-2" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>fontSize</td><td><code>string</code></td><td><code>14px</code></td><td>-</td><td>\u5B57\u4F53\u5927\u5C0F</td></tr><tr><td>color</td><td><code>string</code></td><td>#fff</td><td>-</td><td>\u989C\u8272</td></tr><tr><td>text</td><td><code>string\uFF5Cstring[]</code></td><td>-</td><td>-</td><td>\u6587\u672C\u5217\u8868</td></tr><tr><td>showIndex</td><td><code>boolean</code></td><td>true</td><td>-</td><td>\u662F\u5426\u663E\u793A\u5E8F\u53F7,\u5728 text \u4E3A string[]\u60C5\u51B5\u4E0B\u751F\u6548</td></tr><tr><td>maxWidth</td><td><code>string</code></td><td><code>600px</code></td><td>-</td><td>\u6700\u5927\u5BBD\u5EA6</td></tr><tr><td>placement</td><td><code>string</code></td><td><code>right</code></td><td>-</td><td>\u663E\u793A\u65B9\u5411\uFF0C\u53C2\u8003 Tooltip \u7EC4\u4EF6</td></tr></tbody></table><h3 id="slots-1"><a class="header-anchor" href="#slots-1" aria-hidden="true">#</a> Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u9ED8\u8BA4\u56FE\u6807</td></tr></tbody></table>`,24),o=[e];function c(l,u,d,i,r,k){return n(),s("div",null,o)}var f=a(p,[["render",c]]);export{h as __pageData,f as default};
