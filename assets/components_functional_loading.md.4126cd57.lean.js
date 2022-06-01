import{_ as n,f as a,e as s,K as t}from"./plugin-vue_export-helper.e309f811.js";const h='{"title":"Loading","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"useLoading","slug":"useloading"},{"level":3,"title":"UseLoadingOptions","slug":"useloadingoptions"},{"level":3,"title":"LoadingProps","slug":"loadingprops"},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C"}],"relativePath":"components/functional/loading.md","lastUpdated":1652416784982}',p={},o=t(`__VP_STATIC_START__<h1 id="loading"><a class="header-anchor" href="#loading" aria-hidden="true">#</a> Loading</h1><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p-5<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrapEl<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loadingRef<span class="token punctuation">&quot;</span></span> <span class="token attr-name">loading-tip</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u52A0\u8F7D\u4E2D...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-alert</span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u51FD\u6570\u65B9\u5F0F<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-4 mr-4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>openFnFullLoading<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5168\u5C4F Loading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>openFnWrapLoading<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5BB9\u5668\u5185 Loading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> toRefs<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> Loading<span class="token punctuation">,</span> useLoading <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Loading&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> Loading <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">[</span>openFullLoading<span class="token punctuation">,</span> closeFullLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useLoading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">tip</span><span class="token operator">:</span> <span class="token string">&#39;\u52A0\u8F7D\u4E2D...&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">const</span> <span class="token punctuation">[</span>openWrapLoading<span class="token punctuation">,</span> closeWrapLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useLoading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> wrapEl<span class="token punctuation">,</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">tip</span><span class="token operator">:</span> <span class="token string">&#39;\u52A0\u8F7D\u4E2D...&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">absolute</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">function</span> <span class="token function">openFnFullLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">openFullLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">closeFullLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">function</span> <span class="token function">openFnWrapLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">openWrapLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">closeWrapLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        openFnFullLoading<span class="token punctuation">,</span>
        openFnWrapLoading<span class="token punctuation">,</span>
        <span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>compState<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="useloading"><a class="header-anchor" href="#useloading" aria-hidden="true">#</a> useLoading</h2><p>\u4F7F\u7528</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useLoading <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Loading&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>open<span class="token punctuation">,</span> close<span class="token punctuation">,</span> setTip<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useLoading</span><span class="token punctuation">(</span>opt<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>LoadingProps<span class="token operator">&gt;</span> <span class="token operator">|</span> Partial<span class="token operator">&lt;</span>UseLoadingOptions<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="useloadingoptions"><a class="header-anchor" href="#useloadingoptions" aria-hidden="true">#</a> UseLoadingOptions</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>target</td><td><code>HTMLElement or Ref&lt;HTMLElement&gt;</code></td><td>-</td><td>-</td><td>\u6302\u8F7D\u7684 dom \u8282\u70B9</td></tr><tr><td>props</td><td><code>LoadingProps</code></td><td>-</td><td>-</td><td>loading \u7EC4\u4EF6\u53C2\u6570</td></tr></tbody></table><h3 id="loadingprops"><a class="header-anchor" href="#loadingprops" aria-hidden="true">#</a> LoadingProps</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>tip</td><td><code>string</code></td><td>-</td><td>-</td><td>\u52A0\u8F7D\u6587\u672C</td></tr><tr><td>size</td><td><code>default, small , large</code></td><td><code>default</code></td><td>-</td><td>\u5927\u5C0F</td></tr><tr><td>absolute</td><td><code>boolean</code></td><td>false</td><td>-</td><td>\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u4E3A <code>false</code> \u65F6\u53EF\u4EE5\u5168\u5C4F</td></tr><tr><td>loading</td><td><code>boolean</code></td><td>-</td><td>-</td><td>\u5F53\u524D\u52A0\u8F7D\u72B6\u6001</td></tr><tr><td>background</td><td><code>string</code></td><td>-</td><td>-</td><td>\u80CC\u666F\u8272\uFF0C</td></tr><tr><td>theme</td><td><code>&#39;dark&#39; or &#39;light&#39;</code></td><td><code>light</code></td><td>-</td><td>\u80CC\u666F\u8272\u4E3B\u9898 \uFF0C\u5F53\u80CC\u666F\u8272\u4E0D\u4E3A\u7A7A\u65F6\u4F7F\u7528\u80CC\u666F\u8272</td></tr></tbody></table><h3 id="\u8FD4\u56DE\u503C"><a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u8FD4\u56DE\u503C</h3><p><strong>open</strong></p><p>\u6253\u5F00 loading</p><p><strong>close</strong></p><p>\u5173\u95ED loading</p><p><strong>setTip</strong></p><p>\u8BBE\u7F6E\u52A0\u5728\u63D0\u793A\u6587\u6848(v2.6.2\u4EE5\u4E0A\u7248\u672C)</p>__VP_STATIC_END__`,17),e=[o];function c(u,l,i,k,r,d){return s(),a("div",null,e)}var m=n(p,[["render",c]]);export{h as __pageData,m as default};
