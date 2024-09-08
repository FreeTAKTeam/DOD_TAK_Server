"use strict";(self.webpackChunkdocusaurus_static=self.webpackChunkdocusaurus_static||[]).push([[9317],{8621:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var t=n(5893),r=n(1151);const a={},l="Appendix D: PostgreSQL TLS Configuration",i={id:"appendixd",title:"Appendix D: PostgreSQL TLS Configuration",description:"Configure PostgreSQL server to use TLS",source:"@site/docs/appendixd.md",sourceDirName:".",slug:"/appendixd",permalink:"/docs/appendixd",draft:!1,unlisted:!1,editUrl:"https://gitlab.com/octospacc/editocttrialTools/-/blob/main/docusaurus-static/docs/appendixd.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Appendix C: Certificate Signing",permalink:"/docs/appendixc"},next:{title:"Appendix E: Proper Use of Trusted CAs",permalink:"/docs/appendixe"}},c={},o=[{value:"Configure PostgreSQL server to use TLS",id:"configure-postgresql-server-to-use-tls",level:2},{value:"Generate Client keys and certificates",id:"generate-client-keys-and-certificates",level:2},{value:"Configure TAK Server to use SSL",id:"configure-tak-server-to-use-ssl",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"appendix-d-postgresql-tls-configuration",children:"Appendix D: PostgreSQL TLS Configuration"}),"\n",(0,t.jsx)(s.h2,{id:"configure-postgresql-server-to-use-tls",children:"Configure PostgreSQL server to use TLS"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Follow the steps in Appendix B (Certificate Generation) to generate CA keys and certificates if not already done so."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Generate PostgreSQL server keys and certificates:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"cd /opt/tak/certs\nsudo su tak\n./makeCert.sh server takdb\n"})}),"\n",(0,t.jsx)(s.p,{children:"Become a normal user"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"exit\nsudo chown postgres /opt/tak/certs/files/takdb.key\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Update postgresql.conf. The file location can be different depending on your PostgreSQL installation:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["RHEL/Rocky/CentOS: ",(0,t.jsx)(s.code,{children:"/var/lib/pgsql/15/data/postgresql.conf"})]}),"\n",(0,t.jsxs)(s.li,{children:["Ubuntu/RaspPi: ",(0,t.jsx)(s.code,{children:"/etc/postgresql/15/main/postgresql.conf"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sudo vim /var/lib/pgsql/15/data/postgresql.conf\nssl = on\nssl_ca_file = '/opt/tak/certs/files/ca.pem'\nssl_cert_file = '/opt/tak/certs/files/takdb.pem'\nssl_key_file = '/opt/tak/certs/files/takdb.key'\n# Make sure to update the next line to use the correct passphrase as configured in cert-metadata.sh.\nssl_passphrase_command = 'echo \"atakatak\"'\nssl_passphrase_command_supports_reload = on\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Update pg_hba.conf. The file location can be different depending on your PostgreSQL installation:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["RHEL/Rocky/CentOS: ",(0,t.jsx)(s.code,{children:"/var/lib/pgsql/15/data/pg_hba.conf"})]}),"\n",(0,t.jsxs)(s.li,{children:["Ubuntu/RaspPi: ",(0,t.jsx)(s.code,{children:"/etc/postgresql/15/main/pg_hba.conf"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sudo vim /var/lib/pgsql/15/data/pg_hba.conf\n"})}),"\n",(0,t.jsx)(s.p,{children:"Add this new line:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"hostssl\t all             all             all                     cert\nComment out the following lines if you also require SSL authentication for IPv4/IPv6 local connections\n# host    all             all             127.0.0.1/32            trust\n# host    all             all             ::1/128                 trust\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Restart PostgreSQL server. Make sure it starts successfully.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["RHEL, Rocky Linux, and CentOS installations:","\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sudo systemctl restart postgresql-15\nsudo systemctl status postgresql-15\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Ubuntu and Raspberry Pi installations:","\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sudo systemctl restart postgresql\nsudo systemctl status postgresql\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"generate-client-keys-and-certificates",children:"Generate Client keys and certificates"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Generate client keys and certificates:"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"cd /opt/tak/certs\nsudo su tak\n./makeCert.sh dbclient\n"})}),"\n",(0,t.jsx)(s.p,{children:'Client keys and certificates named "martiuser" (by default) will be created in the "files" directory.'}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Test SSL connection using the generated client certificate:"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'psql "host=127.0.0.1 port=5432 user=martiuser dbname=cot sslmode=verify-ca sslcert=files/martiuser.pem sslkey=files/martiuser.key sslrootcert=files/ca.pem"\n'})}),"\n",(0,t.jsx)(s.p,{children:"If you don\u2019t want to verify the server\u2019s credential:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'psql "host=127.0.0.1 port=5432 user=martiuser dbname=cot sslmode=require sslcert=files/martiuser.pem sslkey=files/martiuser.key"\n'})}),"\n",(0,t.jsx)(s.p,{children:'The sslmode "verify-ca" means "I want to be sure that I connect to a server that I trust." The sslmode "require" means "I trust that the network will make sure I always connect to the server I want."'}),"\n",(0,t.jsxs)(s.p,{children:["More information on the sslmode can be found here: ",(0,t.jsx)(s.a,{href:"https://www.postgresql.org/docs/current/libpq-ssl.html",children:"https://www.postgresql.org/docs/current/libpq-ssl.html"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Test database permission from the psql prompt:"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"select count(*) from cot_router;\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:'NOTE: If you want to use a different name for certificates, you would also need to add a new user to the PostgreSQL database and grant permissions for the user. For example, following these steps to create a certificate named "takdbuser"'})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"./makeCert.sh dbclient takdbuser\nsudo su - postgres\n"})}),"\n",(0,t.jsx)(s.p,{children:"Connect to Postgres:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'psql -d cot\n# List all users/roles:\n\\du\nSELECT * FROM pg_roles;\n# Create a new user ("takdbuser") and grant the user necessary roles ("martiuser"). The name of the user must match the CN in the client certificate.\nCREATE USER takdbuser;\ngrant martiuser to takdbuser;\n# Optional: Double check using \\du and "SELECT * FROM pg_roles;"\n'})}),"\n",(0,t.jsx)(s.h2,{id:"configure-tak-server-to-use-ssl",children:"Configure TAK Server to use SSL"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Note that when you created a database client certificate (./makeCert.sh dbclient), an additional private key file in PKCS#8 format was created. Use this file for the param sslkey in CoreConfig.xml instead of using the files with .key extension."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Update CoreConfig.xml:\nUpdate the <connection> tag in <repository> (Remember to use a correct hostname/IP)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'<connection url="jdbc:postgresql://127.0.0.1:5432/cot" username="martiuser" sslEnabled="true" sslMode="verify-ca" sslCert="certs/files/martiuser.pem" sslKey="certs/files/martiuser.key.pk8" sslRootCert="certs/files/ca.pem"/>\n'})}),"\n",(0,t.jsx)(s.p,{children:"If you don\u2019t want to verify the server\u2019s credential (not recommended in production):"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'<connection url="jdbc:postgresql://127.0.0.1:5432/cot" username="martiuser" sslEnabled="true" sslMode="require" sslCert="certs/files/martiuser.pem" sslKey="certs/files/martiuser.key.pk8" />\n'})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Start/Restart TAK server."}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:" sudo systemctl restart takserver\n"})})]})}function u(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>l});var t=n(7294);const r={},a=t.createContext(r);function l(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);