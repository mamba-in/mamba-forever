import{_ as a,f as n,e as s,K as t}from"./plugin-vue_export-helper.e309f811.js";const h='{"title":"Authority","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Props","slug":"props"}],"relativePath":"components/auth.md","lastUpdated":1652416784975}',p={},o=t(`<h1 id="authority"><a class="header-anchor" href="#authority" aria-hidden="true">#</a> Authority</h1><p>\u7528\u4E8E\u9879\u76EE\u6743\u9650\u7684\u7EC4\u4EF6\uFF0C\u4E00\u822C\u7528\u4E8E\u6309\u94AE\u7EA7\u7B49\u7EC6\u7C92\u5EA6\u6743\u9650\u7BA1\u7406</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Authority</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>RoleEnum.ADMIN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">block</span><span class="token punctuation">&gt;</span></span> \u53EA\u6709admin\u89D2\u8272\u53EF\u89C1 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Authority</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> Authority <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Authority&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> Authority <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>value</td><td><code>RoleEnum,RoleEnum[],string,string[]</code></td><td>-</td><td>\u89D2\u8272\u4FE1\u606F\u6216\u8005\u6743\u9650\u7F16\u7801\u3002\u4F1A\u81EA\u52A8\u533A\u5206\u6743\u9650\u6A21\u5F0F</td></tr></tbody></table>`,6),e=[o];function c(l,u,i,r,k,d){return s(),n("div",null,e)}var _=a(p,[["render",c]]);export{h as __pageData,_ as default};
