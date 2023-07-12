let arr = {
  compilerOptions: {
    // 设定编译后的 JavaScript 文件的 ECMAScript 目标版本
    target: 'ES2020',
    // 是否将 class 声明中的字段语义从 Set 变更到 Object.defineProperty
    useDefineForClassFields: true,
    // 设定编译后的 JavaScript 文件使用的模块化方案
    module: 'ESNext',
    // 编译过程中需要引入的库文件的列表
    lib: ['ES2020', 'DOM', 'DOM.Iterable'],
    // 忽略所有的声明文件（ *.d.ts）的类型检查
    skipLibCheck: true,
    // 模块解析策略，是指编译器在查找导入模块内容时所遵循的流程
    moduleResolution: 'bundler',
    allowImportingTsExtensions: true,
    // 是否允许引入 JSON 文件
    resolveJsonModule: true,
    // isolatedModules 设置为 true 时，如果某个 ts 文件中没有一个 import || export 时，
    // TypeScript 则认为这个模块不是一个 ES Module 模块，它被认为是一个全局的脚本，
    isolatedModules: true,
    // 模块加载兼容模式,可以使用 import from 语法导入 commonJS 模块
    esModuleInterop: true,
    // 是否移除编译后的 JavaScript 文件的注释
    removeComments: true,
    // 是否不生成打包后的 JavaScript 文件
    noEmit: true,
    // 支持 jsx 语法
    jsx: 'preserve',
    // 要包含的类型声明文件名列表
    types: ['node'],
    // 解析非相对模块名的基准目录
    baseUrl: '.',
    // 模块名到基于 baseUrl 的路径映射的列表
    paths: {
      '@/*': ['src/*'],
    },
    // 启用所有严格类型检查选项。
    // 启用 --strict 相当于启用 --noImplicitAny, --noImplicitThis, --alwaysStrict，
    // --strictNullChecks和 --strictFunctionTypes和--strictPropertyInitialization。
    strict: true,
    // 存在无用变量时，是否不进行编译
    noUnusedLocals: false,
    // 存在无用参数时，是否不进行编译
    noUnusedParameters: false,
    // 代码中使用的模块文件名是否必须和文件系统中的文件名保持大小写一致
    forceConsistentCasingInFileNames: false,
    // 不允许 switch 表达式中存在 fallthrough case，即如果某个 case 内不存在 break 或 return 关键字，会抛出错误。
    // 注意：只有当该 case 中存在代码逻辑但是无 break 或 return 时才会抛出错误。如果 case 内无逻辑代码则不会抛出错误。
    noFallthroughCasesInSwitch: true,
  },
  // 定义希望被编译的文件所在的目录 ** 代表任意目录 * 代表任意文件
  include: ['src/**/*.ts', 'types/*.d.ts', 'src/**/*.tsx', 'src/**/*.vue'],
  // 指定工程引用依赖
  // 在项目开发中，有时候为了方便将前端项目和后端 node 项目放在同一个目录下开发，两个项目依赖同一个配置文件和通用文件
  // 但我们希望前后端项目进行灵活的分别打包
  references: [{ path: './tsconfig.node.json' }],
}

console.log(arr)

let arr2 = {
  // ...
  compilerOptions: {
    incremental: true, // TS编译器在第一次编译之后会生成一个存储编译信息的文件，第二次编译会在第一次的基础上进行增量编译，可以提高编译的速度
    tsBuildInfoFile: './buildFile', // 增量编译文件的存储位置
    diagnostics: true, // 打印诊断信息
    target: 'ES5', // 目标语言的版本
    module: 'CommonJS', // 生成代码的模板标准
    outFile: './app.js', // 将多个相互依赖的文件生成一个文件，可以用在AMD模块中，即开启时应设置"module": "AMD",
    lib: ['DOM', 'ES2015', 'ScriptHost', 'ES2019.Array'], // TS需要引用的库，即声明文件，es5 默认引用dom、es5、scripthost,如需要使用es的高级版本特性，通常都需要配置，如es8的数组新特性需要引入"ES2019.Array",
    allowJS: true, // 允许编译器编译JS，JSX文件
    checkJs: true, // 允许在JS文件中报错，通常与allowJS一起使用
    outDir: './dist', // 指定输出目录
    rootDir: './', // 指定输出文件目录(用于输出)，用于控制输出目录结构
    declaration: true, // 生成声明文件，开启后会自动生成声明文件
    declarationDir: './file', // 指定生成声明文件存放目录
    emitDeclarationOnly: true, // 只生成声明文件，而不会生成js文件
    sourceMap: true, // 生成目标文件的sourceMap文件
    inlineSourceMap: true, // 生成目标文件的inline SourceMap，inline SourceMap会包含在生成的js文件中
    declarationMap: true, // 为声明文件生成sourceMap
    typeRoots: [], // 声明文件目录，默认时node_modules/@types
    types: [], // 加载的声明文件包
    removeComments: true, // 删除注释
    noEmit: true, // 不输出文件,即编译后不会生成任何js文件
    noEmitOnError: true, // 发送错误时不输出任何文件
    noEmitHelpers: true, // 不生成helper函数，减小体积，需要额外安装，常配合importHelpers一起使用
    importHelpers: true, // 通过tslib引入helper函数，文件必须是模块
    downlevelIteration: true, // 降级遍历器实现，如果目标源是es3/5，那么遍历器会有降级的实现
    strict: true, // 开启所有严格的类型检查
    alwaysStrict: true, // 在代码中注入'use strict'
    noImplicitAny: true, // 不允许隐式的any类型
    strictNullChecks: true, // 不允许把null、undefined赋值给其他类型的变量
    strictFunctionTypes: true, // 不允许函数参数双向协变
    strictPropertyInitialization: true, // 类的实例属性必须初始化
    strictBindCallApply: true, // 严格的bind/call/apply检查
    noImplicitThis: true, // 不允许this有隐式的any类型
    noUnusedLocals: true, // 检查只声明、未使用的局部变量(只提示不报错)
    noUnusedParameters: true, // 检查未使用的函数参数(只提示不报错)
    noFallthroughCasesInSwitch: true, // 防止switch语句贯穿(即如果没有break语句后面不会执行)
    noImplicitReturns: true, //每个分支都会有返回值
    esModuleInterop: true, // 允许export=导出，由import from 导入
    allowUmdGlobalAccess: true, // 允许在模块中全局变量的方式访问umd模块
    moduleResolution: 'node', // 模块解析策略，ts默认用node的解析策略，即相对的方式导入
    baseUrl: './', // 解析非相对模块的基地址，默认是当前目录
    paths: {
      // 路径映射，相对于baseUrl
      // 如使用jq时不想使用默认版本，而需要手动指定版本，可进行如下配置
      jquery: ['node_modules/jquery/dist/jquery.min.js'],
    },
    rootDirs: ['src', 'out'], // 将多个目录放在一个虚拟目录下，用于运行时，即编译后引入文件的位置可能发生变化，这也设置可以虚拟src和out在同一个目录下，不用再去改变路径也不会报错
    listEmittedFiles: true, // 打印输出文件
    listFiles: true, // 打印编译的文件(包括引用的声明文件)
  },
}
console.log(arr2)

let arr3 = {
  compilerOptions: {
    /* 基本选项 */
    target: 'es6', // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    module: 'commonjs', // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    lib: [], // 指定要包含在编译中的库文件
    allowJs: true, // 允许编译 javascript 文件
    checkJs: true, // 报告 javascript 文件中的错误
    jsx: 'preserve', // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    declaration: true, // 生成相应的 '.d.ts' 文件
    declarationDir: './dist/types', // 生成的 '.d.ts' 文件保存文件夹
    sourceMap: true, // 生成相应的 '.map' 文件
    outFile: './', // 将输出文件合并为一个文件
    outDir: './dist', // 指定输出目录
    rootDir: './', // 用来控制输出目录结构 --outDir.
    removeComments: true, // 删除编译后的所有的注释
    noEmit: true, // 不生成输出文件
    importHelpers: true, // 从 tslib 导入辅助工具函数
    isolatedModules: true, // 将每个文件做为单独的模块 （与 'ts.transpileModule' 类似）.

    /* 严格的类型检查选项 */
    strict: true, // 启用所有严格类型检查选项
    noImplicitAny: true, // 在表达式和声明上有隐含的 any类型时报错
    strictNullChecks: true, // 启用严格的 null 检查
    noImplicitThis: true, // 当 this 表达式值为 any 类型的时候，生成一个错误
    alwaysStrict: true, // 以严格模式检查每个模块，并在每个文件里加入 'use strict'

    /* 额外的检查 */
    noUnusedLocals: true, // 有未使用的变量时，抛出错误
    noUnusedParameters: true, // 有未使用的参数时，抛出错误
    noImplicitReturns: true, // 并不是所有函数里的代码都有返回值时，抛出错误
    noFallthroughCasesInSwitch: true, // 报告switch语句的fallthrough错误。（即，不允许switch的case语句贯穿）

    /* 模块解析选项 */
    moduleResolution: 'node', // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    baseUrl: './', // 用于解析非相对模块名称的基础目录
    paths: {}, // 模块名到基于 baseUrl 的路径映射的列表
    rootDirs: [], // 根文件夹列表，其组合内容表示项目运行时的结构内容
    typeRoots: [], // 包含类型声明的文件列表
    types: [], // 需要包含的类型声明文件名列表
    allowSyntheticDefaultImports: true, // 允许从没有设置默认导出的模块中默认导入。
    esModuleInterop: true, // 支持合成模块的默认导入

    /* Source Map Options */
    sourceRoot: './', // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    mapRoot: './', // 指定调试器应该找到映射文件而不是生成文件的位置
    inlineSourceMap: true, // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    inlineSources: true, // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

    /* 其他选项 */
    experimentalDecorators: true, // 启用装饰器
    emitDecoratorMetadata: true, // 为装饰器提供元数据的支持
  },
  /* 指定编译文件或排除指定编译文件 */
  include: ['src/**/*'],
  exclude: ['node_modules', '**/*.spec.ts'],
  files: ['index.ts', 'test.ts'],
  // 从另一个配置文件里继承配置
  extends: '@tsconfig/recommended',
  // 让 IDE 在保存文件的时候根据 tsconfig.json 重新生成文件
  compileOnSave: true, // 支持这个特性需要Visual Studio 2015， TypeScript 1.8.4 以上并且安装 atom-typescript 插件
}
console.log(arr3)
