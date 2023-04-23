
1. api
```javascript 
// src/api/aut.js
const apiPrefix = "/api"

// 接口定义
export default {
  auth: {
    /**
     * 用户权限提交
     */
    userPermissionSubmit: {
      method: "post",
      url: `${apiPrefix}/test/submit`,
      resolve: true,
      loading: true
    }
  }
}
```

2. use like

```javascript
// auth.vue
import axios from '@/server/axios.js'

axios.auth.userPermissionSubmit({ name: "admin", password: "123" }).then().catch()
```