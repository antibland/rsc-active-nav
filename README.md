# Active Nav with RSC

https://github.com/user-attachments/assets/295ae178-e717-48d7-a4f2-20eac03d82ff

We don't need to `use client` to achieve this. Let's do it with CSS `:has`

Note the `id` on `main`:

```javascript
export default function Home() {
  return (
    <main
      id="home"
      className="flex min-h-screen flex-col items-center justify-between p-24 text-4xl"
    >
      <h1>Home</h1>
    </main>
  );
}
```

The following `CSS` will find the element with `id="home` and _from the root_ match the sidebar link with the home href and color it red.

```css
:has(#home) aside a[href="/"]
  color: red;
}
```
