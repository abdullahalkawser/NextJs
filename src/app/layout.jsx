
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      
      >

        <header>
          <nav>
            Navber
          </nav>
        </header>
<main>        {children}</main>

<footer>Footer</footer>
      </body>
    </html>
  );
}
