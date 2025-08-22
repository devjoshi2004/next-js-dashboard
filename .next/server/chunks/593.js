exports.id=593,exports.ids=[593],exports.modules={4142:(a,b,c)=>{Promise.resolve().then(c.bind(c,62525)),Promise.resolve().then(c.t.bind(c,4536,23))},11871:(a,b,c)=>{"use strict";c.d(b,{default:()=>m});var d=c(60687),e=c(20816),f=c(65963),g=c(93635),h=c(85814),i=c.n(h),j=c(16189),k=c(49384);let l=[{name:"Home",href:"/dashboard",icon:e.A},{name:"Invoices",href:"/dashboard/invoices",icon:f.A},{name:"Customers",href:"/dashboard/customers",icon:g.A}];function m(){let a=(0,j.usePathname)();return(0,d.jsx)(d.Fragment,{children:l.map(b=>{let c=b.icon;return(0,d.jsxs)(i(),{href:b.href,className:(0,k.A)("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",{"bg-sky-100 text-blue-600":a===b.href}),children:[(0,d.jsx)(c,{className:"w-6"}),(0,d.jsx)("p",{className:"hidden md:block",children:b.name})]},b.name)})})}},31920:(a,b,c)=>{"use strict";c.d(b,{MX:()=>j,Pt:()=>k,Q5:()=>h,Yu:()=>l,gn:()=>m,nr:()=>g,rv:()=>n,zP:()=>i});var d=c(43971),e=c(81255);let f=(0,d.A)(process.env.POSTGRES_URL,{ssl:"require"});async function g(){try{return console.log("Fetching revenue data..."),await new Promise(a=>setTimeout(a,3e3)),await f`SELECT * FROM revenue`}catch(a){throw console.error("Database Error:",a),Error("Failed to fetch revenue data.")}}async function h(){try{return(await f`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`).map(a=>({...a,amount:(0,e.vv)(a.amount)}))}catch(a){throw console.error("Database Error:",a),Error("Failed to fetch the latest invoices.")}}async function i(){try{let a=f`SELECT COUNT(*) FROM invoices`,b=f`SELECT COUNT(*) FROM customers`,c=f`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`,d=await Promise.all([a,b,c]),g=Number(d[0][0].count??"0"),h=Number(d[1][0].count??"0"),i=(0,e.vv)(d[2][0].paid??"0"),j=(0,e.vv)(d[2][0].pending??"0");return{numberOfCustomers:h,numberOfInvoices:g,totalPaidInvoices:i,totalPendingInvoices:j}}catch(a){throw console.error("Database Error:",a),Error("Failed to fetch card data.")}}async function j(a,b){try{return await f`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${a}%`} OR
        customers.email ILIKE ${`%${a}%`} OR
        invoices.amount::text ILIKE ${`%${a}%`} OR
        invoices.date::text ILIKE ${`%${a}%`} OR
        invoices.status ILIKE ${`%${a}%`}
      ORDER BY invoices.date DESC
      LIMIT ${6} OFFSET ${(b-1)*6}
    `}catch(a){throw console.error("Database Error:",a),Error("Failed to fetch invoices.")}}async function k(a){try{let b=await f`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${a}%`} OR
      customers.email ILIKE ${`%${a}%`} OR
      invoices.amount::text ILIKE ${`%${a}%`} OR
      invoices.date::text ILIKE ${`%${a}%`} OR
      invoices.status ILIKE ${`%${a}%`}
  `;return Math.ceil(Number(b[0].count)/6)}catch(a){throw console.error("Database Error:",a),Error("Failed to fetch total number of invoices.")}}async function l(a){try{let b=(await f`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${a};
    `).map(a=>({...a,amount:a.amount/100}));return console.log(b),b[0]}catch(a){throw console.error("Database Error:",a),Error("Failed to fetch invoice.")}}async function m(){try{return await f`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `}catch(a){throw console.error("Database Error:",a),Error("Failed to fetch all customers.")}}async function n(a){try{return(await f`
		SELECT
		  customers.id,
		  customers.name,
		  customers.email,
		  customers.image_url,
		  COUNT(invoices.id) AS total_invoices,
		  SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
		  SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
		FROM customers
		LEFT JOIN invoices ON customers.id = invoices.customer_id
		WHERE
		  customers.name ILIKE ${`%${a}%`} OR
        customers.email ILIKE ${`%${a}%`}
		GROUP BY customers.id, customers.name, customers.email, customers.image_url
		ORDER BY customers.name ASC
	  `).map(a=>({...a,total_pending:(0,e.vv)(a.total_pending),total_paid:(0,e.vv)(a.total_paid)}))}catch(a){throw console.error("Database Error:",a),Error("Failed to fetch customer table.")}}},35087:(a,b,c)=>{Promise.resolve().then(c.bind(c,27833))},35639:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,16133,23)),Promise.resolve().then(c.t.bind(c,16444,23)),Promise.resolve().then(c.t.bind(c,16042,23)),Promise.resolve().then(c.t.bind(c,49477,23)),Promise.resolve().then(c.t.bind(c,29345,23)),Promise.resolve().then(c.t.bind(c,12089,23)),Promise.resolve().then(c.t.bind(c,46577,23)),Promise.resolve().then(c.t.bind(c,31307,23)),Promise.resolve().then(c.t.bind(c,14817,23))},43335:(a,b,c)=>{Promise.resolve().then(c.bind(c,72847))},44001:(a,b,c)=>{"use strict";c.d(b,{A:()=>h});var d=c(37413),e=c(78181),f=c(96874),g=c.n(f);function h(){return(0,d.jsxs)("div",{className:`${g().className} flex flex-row items-center leading-none text-white`,children:[(0,d.jsx)(e.A,{className:"h-12 w-12 rotate-[15deg]"}),(0,d.jsx)("p",{className:"text-[44px]",children:"Acme"})]})}},46055:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>e});var d=c(31658);let e=async a=>[{type:"image/x-icon",sizes:"48x48",url:(0,d.fillMetadataSegment)(".",await a.params,"favicon.ico")+""}]},58014:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>i,metadata:()=>h});var d=c(37413);c(75372);var e=c(53063),f=c.n(e),g=c(27833);let h={title:{template:"%s | Acme Dashboard",default:"Acme Dashboard"},description:"The official Next.js Learn Dashboard built with App Router.",metadataBase:new URL("https://next-learn-dashboard.vercel.sh")};function i({children:a}){return(0,d.jsxs)("html",{lang:"en",children:[(0,d.jsx)(g.SpeedInsights,{}),(0,d.jsx)("body",{className:`${f().className} antialiased`,children:a})]})}},62525:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(61369).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/its-pc-l-15/work/practice/next-js-dashboard/app/ui/dashboard/nav-links.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/its-pc-l-15/work/practice/next-js-dashboard/app/ui/dashboard/nav-links.tsx","default")},63663:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,25227,23)),Promise.resolve().then(c.t.bind(c,86346,23)),Promise.resolve().then(c.t.bind(c,27924,23)),Promise.resolve().then(c.t.bind(c,40099,23)),Promise.resolve().then(c.t.bind(c,38243,23)),Promise.resolve().then(c.t.bind(c,28827,23)),Promise.resolve().then(c.t.bind(c,62763,23)),Promise.resolve().then(c.t.bind(c,97173,23)),Promise.resolve().then(c.bind(c,25587))},67190:(a,b,c)=>{Promise.resolve().then(c.bind(c,11871)),Promise.resolve().then(c.t.bind(c,85814,23))},71612:(a,b,c)=>{"use strict";c.d(b,{Jv:()=>l,CI:()=>m});var d=c(19443),e=c(10189),f=c(10209),g=c(5486),h=c.n(g);let i=(0,c(43971).A)(process.env.POSTGRES_URL,{ssl:"require"});async function j(a){try{return(await i`SELECT * FROM users WHERE email=${a}`)[0]}catch(a){throw console.error("Failed to fetch user:",a),Error("Failed to fetch user.")}}let{auth:k,signIn:l,signOut:m}=(0,d.Ay)({...{pages:{signIn:"/login"},callbacks:{authorized({auth:a,request:{nextUrl:b}}){let c=!!a?.user;return b.pathname.startsWith("/dashboard")?!!c:!c||Response.redirect(new URL("/dashboard",b))}},providers:[]},providers:[(0,e.A)({async authorize(a){let b=f.Ik({email:f.Yj().email(),password:f.Yj().min(6)}).safeParse(a);if(b.success){let{email:a,password:c}=b.data,d=await j(a);return d&&await h().compare(c,d.password)?d:null}return console.log("Invalid credentials"),null}})]})},75372:()=>{},81255:(a,b,c)=>{"use strict";c.d(b,{YL:()=>f,c6:()=>e,vv:()=>d});let d=a=>(a/100).toLocaleString("en-US",{style:"currency",currency:"USD"}),e=(a,b="en-US")=>{let c=new Date(a);return new Intl.DateTimeFormat(b,{day:"numeric",month:"short",year:"numeric"}).format(c)},f=a=>{let b=[],c=1e3*Math.ceil(Math.max(...a.map(a=>a.revenue))/1e3);for(let a=c;a>=0;a-=1e3)b.push(`$${a/1e3}K`);return{yAxisLabels:b,topLabel:c}}},83249:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>f});var d=c(37413),e=c(87190);function f({children:a}){return(0,d.jsxs)("div",{className:"flex h-screen flex-col md:flex-row md:overflow-hidden",children:[(0,d.jsx)("div",{className:"w-full flex-none md:w-64",children:(0,d.jsx)(e.A,{})}),(0,d.jsx)("div",{className:"flex-grow p-6 md:overflow-y-auto md:p-12",children:a})]})}},87190:(a,b,c)=>{"use strict";c.d(b,{A:()=>m,x:()=>l});var d=c(37413),e=c(67218);c(79130);var f=c(4536),g=c.n(f),h=c(62525),i=c(44001),j=c(32178),k=c(71612);let l=async function(){await (0,k.CI)({redirectTo:"/"})};function m(){return(0,d.jsxs)("div",{className:"flex h-full flex-col px-3 py-4 md:px-2",children:[(0,d.jsx)(g(),{className:"mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40",href:"/",children:(0,d.jsx)("div",{className:"w-32 text-white md:w-40",children:(0,d.jsx)(i.A,{})})}),(0,d.jsxs)("div",{className:"flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2",children:[(0,d.jsx)(h.default,{}),(0,d.jsx)("div",{className:"hidden h-auto w-full grow rounded-md bg-gray-50 md:block"}),(0,d.jsx)("form",{action:l,children:(0,d.jsxs)("button",{className:"flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",children:[(0,d.jsx)(j.A,{className:"w-6"}),(0,d.jsx)("div",{className:"hidden md:block",children:"Sign Out"})]})})]})]})}(0,e.A)(l,"004051230843932ae758a9f983d258ce5629660f85",null)},90253:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>e});var d=c(31658);let e=async a=>[{type:"image/png",width:1686,height:882,url:(0,d.fillMetadataSegment)(".",await a.params,"opengraph-image.png")+"?886e7c13529660db"}]}};