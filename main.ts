function handler(req: Request): Response {
    const message = `
      <!DOCTYPE html>
      <html lang="ja">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Denoの物語</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f0f0f0;
              padding: 2rem;
              margin: 0;
              color: #333;
              overflow-x: hidden;
            }
            h1, h2 {
              color: #333;
              transition: transform 0.3s ease, color 0.3s ease;
            }
            h1:hover, h2:hover {
              color: #007BFF;
              transform: scale(1.05);
            }
            p, li, pre, img, a.button {
              opacity: 0;
              transform: translateX(-50px);
              transition: opacity 0.6s ease, transform 0.6s ease;
            }
            .visible {
              opacity: 1;
              transform: translateX(0);
            }
            .hidden {
              opacity: 0;
              transform: translateX(50px);
            }
            code {
              background-color: #eee;
              padding: 0.2rem 0.4rem;
              border-radius: 4px;
            }
            pre {
              background-color: #eee;
              padding: 1rem;
              border-radius: 4px;
              overflow-x: auto;
            }
            img {
              max-width: 200px;
              border-radius: 8px;
              margin: 1rem 0;
            }
            .button {
              display: inline-block;
              padding: 0.8rem 1.5rem;
              background-color: #007BFF;
              color: white;
              text-decoration: none;
              border-radius: 5px;
              transition: background-color 0.3s;
              margin-top: 1.5rem;
            }
            .button:hover {
              background-color: #0056b3;
            }
          </style>
        </head>
        <body>
          <h1>Denoの物語</h1>
          <img src="https://raw.githubusercontent.com/denolib/high-res-deno-logo/master/deno_hr_circle.svg" alt="Denoのロゴ">
          <p>ある日、Ryan Dahlという名のエンジニアがひとつの「道具」を手にしました。それは、世界中の人々が使うプログラミングのランタイムでした。彼はその道具に名前をつけ、こう呼びました。「Node.js」。</p>
          
          <h2>Ryan Dahlという男</h2>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Ryan_Dahl.jpg/440px-Ryan_Dahl.jpg" alt="Ryan Dahlの写真">
          <p>サンディエゴの町で生まれた彼は、幼い頃に手にしたApple IIcという機械に心を奪われました。成長した彼は数学を学び、その世界の美しさに魅了されますが、やがて気づきました。「この抽象的な理論では、現実の世界に触れられない」と。</p>
          
          <h3>放浪の果てに</h3>
          <p>数学の世界を離れた彼は、南米へと旅立ち、Rubyという魔法のプログラミング言語に出会いました。そこで、彼はウェブアプリケーションを作り始め、現実の世界と再び繋がる道を見つけたのです。</p>
  
          <h3>Node.jsの誕生</h3>
          <p>2009年、彼は新たな道具を世に送り出しました。それが「Node.js」でした。プログラマーたちは歓喜し、彼の名は世界中に知れ渡りました。けれども、3年が経ったある日、彼はふと考えました。「新しい風を探しに行こう」と。</p>
          <blockquote>"3年間Node.jsを育ててきたが、私はもう一つの夢を追いかけることにした。" — Ryan Dahl</blockquote>
  
          <h3>Denoという未来</h3>
          <p>そして2018年、彼は再び動き出し、新たなランタイム「Deno」を発表しました。Denoは、彼がかつてのNode.jsで見つけた欠点を克服し、よりシンプルで安全な未来を提供するものでした。</p>
  
          <h2>Denoの特徴</h2>
          <ul>
            <li><strong>TypeScriptサポート</strong>: DenoはTypeScriptをネイティブでサポートし、プログラマーがそのまま書ける環境を提供します。</li>
            <li><strong>セキュリティ</strong>: Denoは、すべての動きを守る砂の城。アクセス権を明示しなければ、外の世界には触れられません。</li>
            <li><strong>モジュール管理</strong>: DenoはURLという橋を渡り、シンプルにモジュールを管理します。重たい荷物を持つ必要はありません。</li>
            <li><strong>標準ライブラリ</strong>: Denoの中には、日常で使える道具が揃っています。ファイル操作、サーバー構築、テスト機能など、あらゆる作業に対応します。</li>
          </ul>
          
          <h2>インストール方法</h2>
          <p>もしあなたがDenoの道を歩みたいのなら、この呪文を唱えてください:</p>
          <pre><code>curl -fsSL https://deno.land/install.sh | sh</code></pre>
          <p>そうすれば、Denoはあなたのコンピューターに現れます。ただし、シェルを再起動するか、この呪文をもう一度唱えてください:</p>
          <pre><code>source ~/.zshrc</code></pre>
          <p>最後に、Denoがしっかりと動いているかどうかを確認してください:</p>
          <pre><code>deno --version</code></pre>
  
          <h2>簡単なサーバーの例</h2>
          <pre><code>function handler(req: Request): Response {
    return new Response("Hello, Deno World!");
  }
  
  Deno.serve(handler);</code></pre>
  
          <h2>Deno Deployの物語</h2>
          <p>Denoには、多くの仲間たちがいます。彼らはDenoを使って様々な世界を創造しています。例えば:</p>
          <ul>
            <li>ミドルウェア</li>
            <li>APIサーバー</li>
            <li>フルウェブサイト</li>
          </ul>
  
          <h3>ミドルウェア</h3>
          <p>ミドルウェアとは、リクエストが届く前と後に魔法をかけるものです。Denoを使えば、クッキーを設定したり、地理情報によってサイトのバージョンを変えたり、リダイレクトの魔法を使うこともできます。</p>
  
          <h3>APIサーバー</h3>
          <p>Denoは、APIサーバーをエッジで展開するのに最適です。これは、クライアントにより近い場所でデータを提供することで、魔法のように高速かつ効率的に働きます。</p>
  
          <h3>フルウェブサイト</h3>
          <p>未来の世界では、全てのサイトがエッジで展開され、Denoがその世界を支える柱となるでしょう。もういくつかのサイトが、その未来を先取りしているのです。</p>
  
          <a class="button" href="https://deno.land" target="_blank">Denoの世界へ</a>
          
          <script>
            const elements = document.querySelectorAll('p, li, pre, img, a.button');
            let lastScrollTop = 0;
  
            window.addEventListener('scroll', () => {
              const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
              const scrollingDown = scrollTop > lastScrollTop;
  
              elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (scrollingDown && rect.top < window.innerHeight - 50) {
                  el.classList.add('visible');
                  el.classList.remove('hidden');
                } else if (!scrollingDown && rect.top >= 0 && rect.top < window.innerHeight) {
                  el.classList.remove('visible');
                  el.classList.add('hidden');
                }
              });
  
              lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
            });
  
            window.dispatchEvent(new Event('scroll'));
          </script>
        </body>
      </html>
    `;
  
    return new Response(message, {
      headers: { "Content-Type": "text/html; charset=UTF-8" },
    });
  }
  
  // サーバーをポート8080で起動
  Deno.serve({ port: 8080 }, handler);
  