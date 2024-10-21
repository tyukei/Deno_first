function handler(req: Request): Response {
    const message = `
      <!DOCTYPE html>
      <html lang="ja">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Denoについて</title>
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
            p, li, pre {
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
          </style>
        </head>
        <body>
          <h1>Denoとは？</h1>
          <p>Denoは、シンプルでセキュアなモダンなJavaScript/TypeScriptランタイムです。Node.jsの創設者であるRyan Dahlが開発し、Node.jsの設計上の問題点を解決することを目指して作られました。</p>
          
          <h2>特徴</h2>
          <ul>
            <li><strong>TypeScriptサポート</strong>: DenoはTypeScriptをネイティブでサポートしており、特別な設定なしにTypeScriptコードを実行できます。</li>
            <li><strong>セキュリティ</strong>: Denoはデフォルトでサンドボックス環境で実行され、ファイルシステムやネットワークアクセスは許可されません。必要なアクセス権限はフラグで指定する必要があります。</li>
            <li><strong>モジュール管理</strong>: URLを利用して直接モジュールをインポートするため、シンプルで軽量なモジュール管理が実現されています。</li>
            <li><strong>標準ライブラリ</strong>: Denoには公式の標準ライブラリがあり、一般的な機能（ファイル操作、HTTPサーバー、テスト機能など）が含まれています。</li>
          </ul>
          
          <h2>インストール方法</h2>
          <p>Denoのインストールは以下のコマンドで行います:</p>
          <pre><code>curl -fsSL https://deno.land/install.sh | sh</code></pre>
          <p>インストールが完了すると、Denoは<code>~/.deno/bin/deno</code>に配置されます。シェルを再起動するか、以下のコマンドを実行して設定を反映させてください。</p>
          <pre><code>source ~/.zshrc</code></pre>
          <p>その後、Denoのバージョンを確認してインストールが成功しているかチェックします:</p>
          <pre><code>deno --version</code></pre>
  
          <h2>簡単なサーバーの例</h2>
          <pre><code>function handler(req: Request): Response {
    return new Response("Hello, Deno World!");
  }
  
  Deno.serve(handler);</code></pre>
  
          <h2>Deno Deployのユースケース</h2>
          <p>現在、Denoの一般的なユースケースは以下の通りです:</p>
          <ul>
            <li>ミドルウェア</li>
            <li>APIサーバー</li>
            <li>フルウェブサイト</li>
          </ul>
  
          <h3>ミドルウェア</h3>
          <p>ミドルウェアとは、リクエストがアプリケーションサーバーに到達する前後に実行されるコードのことです。リクエストが早い段階でJavaScriptやその他のコードを迅速に実行したい場合、ミドルウェアを使用します。Deno Deployを使えば、エッジでミドルウェアコードを展開し、アプリのパフォーマンスを最大化できます。</p>
          <p>例えば、以下のようなミドルウェアが考えられます:</p>
          <ul>
            <li>クッキーの設定</li>
            <li>地理的な位置に基づくサイトのバージョンの提供</li>
            <li>パスの書き換え</li>
            <li>リクエストのリダイレクト</li>
            <li>サーバーからのHTMLを動的に変更してユーザーに提供する</li>
          </ul>
          <p>Deno Deployは、現在ミドルウェアをホスティングするために使用されている他のプラットフォーム（例えば、Cloudflare WorkersやAWS Lambda@Edge、nginxのような従来のロードバランサー）に代わる優れた選択肢です。</p>
  
          <h3>APIサーバー</h3>
          <p>DenoはAPIサーバーにも最適です。エッジでサーバーを展開することで、クライアントに近い場所でリクエストを処理し、従来のホスティングプラットフォーム（HerokuやDigitalOceanなど）よりも低遅延、高パフォーマンス、低コストでAPIを提供できます。</p>
  
          <h3>フルウェブサイト</h3>
          <p>将来的には、エッジ機能上で完全なウェブサイトを構築できるようになると予想されます。既に以下のようなサイトがこの仕組みを利用しています:</p>
          <ul>
            <li>ブログ</li>
            <li>チャットアプリ</li>
            <li>Calendlyクローン</li>
          </ul>
          
          <script>
            // Scroll effect for paragraphs, list items, and code blocks
            const elements = document.querySelectorAll('p, li, pre');
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
  
              lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
            });
  
            // Trigger the scroll effect on load to show elements already in view
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
  