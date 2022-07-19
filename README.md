TypeScript Package with some useful functions to ease scraping of websites using Puppeteer

<h2> clickOnButton </h2>

```ts
clickOnButton({ DOM: Puppeteer.page, Selector: String });
//finds a button by ID and clicks on it
```

<h2> getRenderedElements </h2>

```ts
getRenderedElements({ DOM: Puppeteer.page, prop: String, valueType: String });
//returns an array of values from HTMLElements that match the chosen property
```

<h2> getRemoteObjectsElements </h2>

```ts
getRemoteObjectsElements({
  DOM: Puppeteer.page,
  prop: String,
  valueType: String,
});
//returns an array of HTMLElements that match the chosen property
```
