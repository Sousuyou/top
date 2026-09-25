"""既存の調査資料から、アプリ取り込み用データと静的な閲覧ページを作ります。"""
from pathlib import Path
import json, html, shutil, re

ROOT = Path(__file__).parent
BASE = ROOT.parent
# 本文の編集元は「編集済みコンテンツ.json」です。
edited = json.loads((ROOT/'編集済みコンテンツ.json').read_text())
items = edited['techniques']
recommendations = edited['cocktail_recommendations']
sources = {s['id']: s for s in edited['sources']}
shake = {'records': [dict(s, type=s['kind'], result=s['scope']) for s in edited['sources'] if s['id'].startswith('E')]}
data = {'schema_version':2,'title':'カクテル技法ガイド','reviewed_on':'2026-09-07','status':'アプリ取り込み用の整理版・新規実験なし','perspectives':edited['perspectives'],'techniques':items,'cocktail_recommendations':recommendations,'sources':list(sources.values())}
data['gin_considerations']=edited.get('gin_considerations',[])
(ROOT/'data.json').write_text(json.dumps(data,ensure_ascii=False,indent=2))
shutil.copyfile(ROOT.parent/'theme.css',ROOT/'theme.css')

def esc(x): return html.escape(str(x),quote=True)
def ul(xs): return '<ul>'+''.join('<li>'+esc(x)+'</li>' for x in xs)+'</ul>'
def paragraphs(xs): return ''.join('<p>'+esc(x)+'</p>' for x in xs)
def ref_links(ids):
    return '<p class="inline-sources">参考：'+ ' / '.join(f'<a href="{esc(sources[i]["url"])}" target="_blank" rel="noopener noreferrer">{esc(sources[i].get("display_title",sources[i]["title"]))}</a>' for i in ids)+'</p>'
def reading_content(t):
    r=t['reading']
    return f'<section class="expanded-reading"><h2>{esc(r["title"])}</h2>{paragraphs(r["paragraphs"])}</section><section><h2>仕組みと考え方</h2><p>{esc(r["theory"])}</p>{ref_links(r["source_ids"])}</section><section class="practitioner"><p class="kicker">バーテンダーの視点 · 要旨</p><h2>{esc(r["voice"]["person"])}</h2><p>{esc(r["voice"]["text"])}</p><p class="caption">資料の内容を要約し、本ガイドの解説を添えています。</p></section><section class="application"><h2>一杯への取り入れ方</h2><p>{esc(r["application"])}</p><p class="caption">公開資料を踏まえた本ガイドの提案</p></section>'
def additional_voices(t):
    voices=t.get('additional_voices',[])
    if not voices: return ''
    return '<section class="other-voices"><h2>ほかのバーテンダーの考え方</h2>'+''.join(f'<div><h3><a href="../perspectives.html#{esc(v["person_id"])}">{esc(v["person"])} — 経歴と視点を読む →</a></h3><p>{esc(v["text"])}</p>{ref_links(v["source_ids"])}</div>' for v in voices)+'</section>'

def page(title,body,depth=0):
    pre='../' if depth else './'
    return f'''<!doctype html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light dark"><meta name="robots" content="noindex"><meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; object-src 'none'; base-uri 'none'"><title>{esc(title)} | Bar Soutsu Tools</title><link rel="stylesheet" href="{pre}styles.css"><link rel="stylesheet" href="{pre}theme.css"><link rel="manifest" href="{pre}../manifest.json"><link rel="icon" href="{pre}../assets/icon.svg" type="image/svg+xml"><script src="{pre}integration.js" defer></script><script src="{pre}app.js" defer></script></head><body><a class="skip" href="#main">本文へ移動</a><header class="brand"><a href="{pre}../index.html" aria-label="Bar Soutsu Toolsのトップへ戻る">← BAR SOUTSU <span>TOOLS</span></a><span class="edition">カクテル技法ガイド</span></header><main id="main">{body}</main><footer>Bar Soutsu Tools · 技法ガイド整理版<br><small>公開資料をもとに、技法の使い方を解説しています。参考にした資料は各ページに掲載しています。</small></footer></body></html>'''

cards=''.join(f'''<a class="card" href="techniques/{t['id']}.html" data-group="{esc(t['group'])}" data-search="{esc(' '.join([t['title'],t['english'],t['summary'],t['person'],t['reading']['voice']['person']]+t['use_cases']+[v['person'] for v in t.get('additional_voices',[])]))}"><span class="kicker">{esc(t['group'])}</span><h3>{esc(t['title'])}</h3><p>{esc(t['summary'])}</p><span class="card-bottom">{esc(t['person'] or '基本の技法')}<b aria-hidden="true">↗</b></span></a>''' for t in items)
body=f'''<section class="hero"><p class="kicker">TECHNIQUE LIBRARY / {len(items)} TECHNIQUES</p><h1>カクテルの技法と、<br>使い分け。</h1><p class="lead">シェイクの基本から、スイッチングなどの仕込みまで。<br>何のために使う技法なのか、どんなカクテルに向くのかを解説します。</p><div class="guide-path"><span><b>01</b> 技法を知る</span><span><b>02</b> 使い方を選ぶ</span><span><b>03</b> 比較結果を確かめる</span></div></section>
<section class="choose" aria-labelledby="choose-title"><h2 id="choose-title">目的から選ぶ</h2><div class="quick-grid"><a href="techniques/wet-shake.html"><strong>柑橘と酒をよく混ぜたい</strong><span>ウェットシェイク →</span></a><a href="techniques/dry-shake.html"><strong>クリーミーな泡を作りたい</strong><span>ドライシェイク →</span></a><a href="techniques/switching.html"><strong>量を増やしすぎず、果実の風味を加えたい</strong><span>スイッチング →</span></a><a href="techniques/cordial.html"><strong>甘味・酸味・香りを仕込んでおきたい</strong><span>コーディアル →</span></a></div></section>
<section aria-labelledby="library-title"><div class="section-top"><h2 id="library-title">技法を探す</h2><p id="result-count" role="status" aria-live="polite">{len(items)}件</p></div><div class="controls"><label for="search">技法・カクテル・人物で検索</label><div class="search-row"><input id="search" type="search" placeholder="例：泡、ダイキリ、Iain、Erik" autocomplete="off"><button id="clear" type="button">クリア</button></div><div class="filters" role="group" aria-label="技法の分類">{''.join(f'<button type="button" data-filter="{g}" aria-pressed="{str(g=="すべて").lower()}">{g}</button>' for g in ['すべて','シェイク','仕込み','調製と提供'])}</div></div><div class="cards">{cards}</div><p id="empty" hidden>一致する技法がありません。言葉を短くするか、分類を「すべて」に戻してください。</p></section>
<section class="comparison"><p class="kicker">SHAKER CHOICE</p><h2>３ピースと２ピース、どう選ぶ？</h2><div class="two-col"><div><h3>３ピース</h3><p>少量のカクテルを一杯ずつ作るときの選択肢です。握りやすく、安定して振って注げるものを選びます。</p></div><div><h3>金属２ピース</h3><p>氷の出し入れが必要な卵白系や、果肉を使うカクテルに便利です。作る量が多い場合も、容量に余裕のあるものを選べます。</p></div></div><p class="note">３ピースはコブラー型、ここでの２ピースは金属同士のボストン型を指します。形だけで味の優劣は決まらないため、容量、扱いやすさ、目指す口当たりに合わせて選びます。</p></section>'''
body = body.replace('<section class="choose"', '<nav class="research-links" aria-label="詳しく調べる"><a href="cocktails.html">カクテル別の作り方 <span>材料・提供方法に合わせて選ぶ →</span></a><a href="evidence.html">比較結果を読む <span>実験の結果を、一杯の選択へ →</span></a><a href="perspectives.html">バーテンダーの視点 <span>技法を選ぶ考え方を読む →</span></a></nav><section class="choose"', 1)
(ROOT/'index.html').write_text(page('カクテル技法ガイド',body))
(ROOT/'techniques').mkdir(exist_ok=True)
for n,t in enumerate(items):
    evidence=''.join(f'<li><a href="{esc(sources[s]["url"])}" target="_blank" rel="noopener noreferrer">{esc(sources[s]["title"])} <span aria-label="新しいタブで開く">↗</span></a><small>{esc(sources[s]["kind"])}</small><p>{esc(sources[s]["limits"])}</p></li>' for s in t['source_ids'])
    examples=f'<section><h2>実際に使われている例</h2><p>{esc(t["example"])}</p></section>' if t['example'] else ''
    related=[x for x in items if x['group']==t['group'] and x!=t][:3]
    b=f'''<nav class="breadcrumbs" aria-label="現在地"><a href="../index.html">技法一覧</a><span aria-hidden="true"> / </span><span>{esc(t['title'])}</span></nav><article><header class="detail-hero"><p class="kicker">{esc(t['group'])} / {esc(t['english'])}</p><h1>{esc(t['title'])}</h1><p class="lead">{esc(t['summary'])}</p><p class="byline">{esc(t['person'] or '基本の技法')}<span>{esc(t['attribution'])}</span></p></header><div class="detail-grid"><aside class="overview"><h2>向いているカクテル・用途</h2>{ul(t['use_cases'])}<a href="#method">基本の手順へ ↓</a><a href="#sources">参考資料へ ↓</a></aside><div class="reading">{reading_content(t)}{additional_voices(t)}<section id="method"><h2>基本の手順</h2><ol class="steps">{''.join('<li>'+esc(x)+'</li>' for x in t['steps'])}</ol></section><section><h2>仕上げのポイント</h2>{ul(t['tips'])}</section>{examples}<details class="limits" {"open" if t["id"] in ["carbonation","milk-clarification","fat-wash"] else ""}><summary>使用上の注意・資料の補足</summary>{ul(t['limits'])}</details><details id="sources"><summary>参考資料と確認できた範囲 <span>{len(t['source_ids'])}資料</span></summary><p class="evidence-label">{esc(t['evidence'])}</p><ul class="sources">{evidence}</ul><p class="caption">調査日：2026年9月7日。公開資料をもとにまとめており、本ガイド独自の実験結果ではありません。</p></details></div></div></article><section class="related"><h2>あわせて読む</h2><div class="related-links">{''.join(f'<a href="{x["id"]}.html">{esc(x["title"])} →</a>' for x in related)}</div><a class="back" href="../index.html">← 技法一覧へ戻る</a></section>'''
    (ROOT/'techniques'/f'{t["id"]}.html').write_text(page(t['title'],b,1))
def reading_header(title, lead):
    return f'<nav class="breadcrumbs"><a href="index.html">技法一覧</a> / {esc(title)}</nav><header class="detail-hero"><h1>{esc(title)}</h1><p class="lead">{esc(lead)}</p></header>'

cocktail_body = reading_header('カクテル別の作り方', '同じ名前のカクテルでも、卵白を使うか、氷を入れて提供するかで、適した作り方は変わります。作りたい一杯の項目を開いて確認してください。')
cocktail_body += '<p class="note">公開されている実験や実務家の方法を参考に、作り方を提案しています。実際に比較されたカクテルと、似た材料から使い方を考えたものは、「参考にした結果」で区別しています。</p><div class="recommendations">'
for r in recommendations:
    refs = sorted(set(re.findall(r'E\d{2}',r['evidence_scope'])))
    cocktail_body += f'<details><summary>{esc(r["cocktail"])}</summary><dl><dt>おすすめの作り方</dt><dd>{esc(r["finish_and_method"])}</dd><dt>器具の選び方</dt><dd>{esc(r["shaker_choice"])}</dd><dt>参考にした結果</dt><dd>{esc(r["evidence_scope"])}</dd></dl><p class="source-shortcuts">'+''.join(f'<a href="evidence.html#{s}">{s}の結果 →</a>' for s in refs)+'</p></details>'
cocktail_body += '</div><a class="back" href="index.html">← 技法一覧へ戻る</a>'
(ROOT/'cocktails.html').write_text(page('カクテル別の作り方',cocktail_body))

evidence_body = reading_header('比較結果を読む', '振る時間、泡の作り方、シェーカーの違い。公開された結果を読みながら、実際の一杯にどう生かすかを考えます。')
evidence_body += '<p class="note">実験や作り比べに加え、バーテンダーのレシピやインタビューも収録しています。同じ方法を紹介した記事もあるため、16件すべてが別々の実験というわけではありません。</p><nav class="evidence-index" aria-label="資料番号">'+''.join(f'<a href="#{s["id"]}"><span>{s["id"]}</span>{esc(s["display_title"])}</a>' for s in shake['records'])+'</nav><div class="evidence-cards">'
for s in shake['records']:
    evidence_body += f'<section id="{s["id"]}"><p class="kicker">{s["id"]} / {esc(s["type"])}</p><h2>{esc(s["display_title"])}</h2><h3>わかったこと・紹介されている方法</h3><p>{esc(s["result"])}</p><h3>一杯を作るとき、どう生かすか</h3><p>{esc(s.get("interpretation",""))}</p><p class="caption">本ガイドの考察</p><details class="evidence-note"><summary>比較条件と補足</summary><p>{esc(s["limits"])}</p></details><a href="{esc(s["url"])}" target="_blank" rel="noopener noreferrer">元の記事を読む ↗</a><p class="original-title">記事名：{esc(s["title"])}</p></section>'
evidence_body += '</div><a class="back" href="cocktails.html">カクテル別の作り方へ →</a>'
(ROOT/'evidence.html').write_text(page('比較結果を読む',evidence_body))
print(f'{len(items)}技法・{len(recommendations)}カクテル条件・{len(shake["records"])}比較資料を生成しました。')

view_body = reading_header('バーテンダーの視点', '日本と海外のバーテンダーを、経歴と実際の仕事から紹介します。気になる人物から、技法やインタビューへ。')
view_body += '<nav id="people-index" class="people-index" aria-label="人物から読む">'+''.join(f'<a href="#{esc(v["id"])}">{esc(v["name"])}</a>' for v in edited['perspectives'])+'</nav><div class="viewpoints simple-profiles">'
for v in edited['perspectives']:
    links=''.join(f'<a href="techniques/{i}.html">{esc(next(t["title"] for t in items if t["id"]==i))} →</a>' for i in v['technique_ids'])
    refs=list(dict.fromkeys(v['career_source_ids']+v['source_ids']))
    application=f'<p class="profile-suggestion"><span>このガイドで試すなら</span>{esc(v["application"])}</p>' if v.get('application') else ''
    view_body += f'<section id="{esc(v["id"])}"><h2>{esc(v["name"])}</h2><p class="name-alias">{esc(v["alias"])}</p><p class="profile-bio">{esc(v["bio"])}</p><div class="profile-prose"><p>{esc(v["intro"])}</p>{paragraphs(v.get("paragraphs",[]))}{application}</div><div class="related-links">{links}</div><details class="profile-refs"><summary>出典</summary>{ref_links(refs)}</details><a class="people-back" href="#people-index">人物の目次へ ↑</a></section>'
view_body += '</div><a class="back" href="index.html">← 技法一覧へ戻る</a>'
(ROOT/'perspectives.html').write_text(page('バーテンダーの視点',view_body))

# 全資料を一画面へまとめ、関連リンクも画面内の移動にそろえます。
def in_page_links(body):
    body=re.sub(r'href="(?:\./|\.\./)?techniques/([a-z-]+)\.html(?:[^"#]*)?(?:#[^"]*)?"',r'href="#tech-\1"',body)
    body=re.sub(r'href="evidence\.html#([^"]+)"',r'href="#\1"',body)
    body=re.sub(r'href="(?:\./|\.\./)?perspectives\.html#([^"]+)"',r'href="#\1"',body)
    return body

unified=reading_header('カクテル技法ガイド','作り方を調べる。結果を比べる。バーテンダーの実践を読む。')
unified+='<nav class="reader-nav" aria-label="読む内容"><a href="#techniques">技法</a><a href="#cocktails">カクテル別</a><a href="#comparisons">比較・考察</a><a href="#bartenders">人物</a></nav>'
unified+='<section id="techniques" class="reader-section"><h2>技法を探す</h2><div class="controls"><label for="search">技法・材料・人物で検索</label><div class="search-row"><input id="search" type="search" placeholder="例：シェイク、泡、鹿山" autocomplete="off"><button id="clear" type="button">クリア</button></div><div class="filters" role="group" aria-label="技法の分類">'+''.join(f'<button type="button" data-filter="{g}" aria-pressed="{str(g=="すべて").lower()}">{g}</button>' for g in ['すべて','シェイク','仕込み','調製と提供'])+f'</div><p id="result-count" role="status" aria-live="polite">{len(items)}件</p></div><div class="inline-techniques">'
for t in items:
    names=[v['name']+' '+v['alias'] for v in edited['perspectives'] if t['id'] in v['technique_ids']]
    searchable=' '.join([t['title'],t['english'],t['summary'],t['person']]+names+t['use_cases'])
    guide=t['guide']
    content='<p class="use-line">'+esc(' / '.join(t['use_cases']))+'</p>'
    content+=f'<h3>{esc(guide["method_title"])}</h3><ol class="steps">'+''.join('<li>'+esc(x)+'</li>' for x in t['steps'])+'</ol>'
    content+='<div class="practical-notes">'+ul(t['tips'])+'</div>'
    content+='<div class="reading compact-reading"><p>'+esc(guide['explanation'])+'</p>'
    voice=t['reading']['voice']
    content+='<p class="voice-inline">'+esc(guide['practice'])+'</p>'
    related_people=[v for v in edited['perspectives'] if t['id'] in v['technique_ids']]
    if related_people:
        content+='<div class="context-links"><span>実践を読む</span>'+''.join(f'<a href="#{esc(v["id"])}">{esc(v["name"])}</a>' for v in related_people)+'</div>'
    evidence_refs=[x for x in dict.fromkeys(t['source_ids']+t['reading']['source_ids']) if x.startswith('E')]
    if evidence_refs:
        content+='<div class="context-links"><span>比較の根拠</span>'+''.join(f'<a href="#{x}">{esc(sources[x].get("display_title",sources[x]["title"]))}</a>' for x in evidence_refs)+'</div>'
    content+='<details class="background-reading"><summary>背景と応用を詳しく読む</summary>'+paragraphs(t['reading']['paragraphs'])+'<p>'+esc(t['reading']['application'])+'</p><p class="caption">公開資料を踏まえた本ガイドの解説・提案</p></details>'
    content+='<details><summary>使用上の注意・出典</summary>'+ul(t['limits'])+ref_links(list(dict.fromkeys(t['source_ids']+t['reading']['source_ids'])))+'</details></div>'
    unified+=f'<details id="tech-{esc(t["id"])}" class="card inline-technique" data-group="{esc(t["group"])}" data-search="{esc(searchable)}"><summary><span class="tech-name">{esc(t["title"])}</span><span class="tech-purpose">{esc(t["summary"])}</span></summary><div class="inline-content">{content}</div></details>'
unified+='</div><p id="empty" hidden>一致する技法がありません。検索語や分類を変えてください。</p></section>'
# カクテル別の推奨は開閉なしで比較できます。
cstart=cocktail_body.index('<div class="recommendations">')
cend=cocktail_body.rfind('<a class="back"')
cbody=cocktail_body[cstart:cend].replace('<details>','<section class="cocktail-entry">').replace('</details>','</section>').replace('<summary>','<h3>').replace('</summary>','</h3>')
unified+='<section id="cocktails" class="reader-section"><h2>カクテル別の作り方</h2>'+cbody+'</section>'
estart=evidence_body.index('<nav class="evidence-index"')
eend=evidence_body.rfind('<a class="back"')
unified+='<section id="comparisons" class="reader-section"><h2>比較・考察</h2><p class="topic-shortcut"><a href="#gin-reading">ジンの使い分けを比較する →</a></p><p class="note">実験、作り比べ、実務家のレシピを区別して紹介しています。</p>'+evidence_body[estart:eend]+'</section>'
vstart=view_body.index('<nav id="people-index"')
vend=view_body.rfind('<a class="back"')
gin_rows=''
for g in edited.get('gin_considerations',[]):
    person=next(v for v in edited['perspectives'] if v['id']==g['person_id'])
    gin_rows+=f'<tr><th scope="row"><a href="#{esc(g["person_id"])}">{esc(person["name"])}</a><span>{esc(g["cocktail"])}</span></th><td>{esc(g["focus"])}</td><td>{esc(g["comparison"])}</td></tr>'
unified+='<section id="gin-reading" class="reader-section"><h2>ジンのカクテルを考える</h2><p>ジンをそのまま飲んだときの好みと、カクテルにしたときの相性は、分けて確かめると選びやすくなります。ここでは、本人の公開レシピや発言をもとに、店で比較したい点を整理しました。</p><div class="gin-table-wrap"><table class="gin-table"><thead><tr><th scope="col">人物とカクテル</th><th scope="col">着目する点</th><th scope="col">作り比べるときの提案</th></tr></thead><tbody>'+gin_rows+'</tbody></table></div><p class="caption">比較の提案は本ガイドの考察です。人物名から、本人の実践と出典を同じ画面で読めます。</p><p class="gin-conclusion">マティーニでは冷却と加水、サワーでは酸味・甘味に埋もれない香り、ネグローニでは苦味との組み合わせを確かめます。最初の比較は同じ配合で行い、その後で各ジンに合う配合へ調整すると、「そのレシピに合うジン」と「調整すれば生きるジン」を見分けやすくなります。</p></section>'
unified+='<section id="bartenders" class="reader-section"><h2>バーテンダー</h2>'+view_body[vstart:vend]+'</section>'
unified+='<dialog id="reader-preview" aria-labelledby="preview-title"><header class="preview-bar"><button type="button" id="preview-back" hidden>← 前の資料</button><span id="preview-title">関連する解説</span><button type="button" id="preview-close" aria-label="解説を閉じて元の位置へ戻る">閉じる ×</button></header><div id="preview-content"></div></dialog>'
unified=in_page_links(unified)
# 一覧への戻りリンクも画面内へ向けます。
unified=unified.replace('href="index.html"','href="#techniques"')
(ROOT/'index.html').write_text(page('カクテル技法ガイド',unified))
