---
title: Exemplo
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Tabs
  defaultValue="js"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', },
    { label: 'Java', value: 'java', },
  ]
}>
<TabItem value="js">

```jsx live
function helloWorld() {
  console.log('Hello, world!');
}
```

</TabItem>
<TabItem value="py">

```py live
def hello_world():
  print 'Hello, world!'
```

</TabItem>
<TabItem value="java">

```java live
class HelloWorld {
  public static void main(String args[]) {
    System.out.println("Hello, World");
  }
}
```

</TabItem>
</Tabs>