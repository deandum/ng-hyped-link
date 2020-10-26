# ng-hyped-link

An Angular library that creates a bootstrap inspired popup card when hovering over a link based on the metadata retrieved from the URL.

The popup information is generated using the [Open Graph protocol](https://ogp.me/) properties from `<meta>` tags. OG properties used:
- `og:site_name`
- `og:title`
- `og:image`
- `og:description`

The tags are retrieved using [jQuery](https://jquery.com/).


## Example
![](docs/ng-hyped-link-demo.png)


## Installation

Using npm:
```
npm install ng-hyped-link
```

Import the module in your `app.module.ts` file:
```angular2
import { NgHypedLinkModule } from 'ng-hyped-link';
```

```angular2
@NgModule({
  imports: [
    NgHypedLinkModule
  ],
})
```

Use the component in the template file:
```angular2html
Click <ng-hyped-link targetUrl="https://github.com/deandum" target="_blank">here</ng-hyped-link> to see my cool link.
```


##Component inputs:
- `targetUrl`: the URL to redirect to when clicked
- `target`: the equivalent of a `target` attribute when using the `<a>` tag


## License
MIT © Dean Dumitru
