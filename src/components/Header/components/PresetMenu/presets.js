const presets = [
  {
    label: "Default",
    url: `${process.env.REACT_APP_BASE_URL}`,
  },
  {
    label: "React+Babel Boilerplate",
    url: `${process.env.REACT_APP_BASE_URL}/?js=ZnVuY3Rpb24gTXlBcHAoKSB7DQogIA0KICByZXR1cm4gKA0KICAgICAgPGRpdj4NCiAgICAgICAgICBUaGlzIGlzIG15IFJlYWN0IEFwcGxpY2F0aW9uDQogICAgICA8L2Rpdj4NCgkpOw0KfQ0KDQoNCi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09DQovLyBSZW5kZXIgdGhlIENvbXBvbmVudA0KUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKS5yZW5kZXIoPE15QXBwIC8%2BKTs%3D&html=PCFET0NUWVBFIGh0bWw%2BCjxodG1sPgogICAgPGhlYWQ%2BCiAgICAgICAgPEpTQlgtQ1NTPgogICAgICAgIDxtZXRhIGNoYXJzZXQ9IlVURi04Ij4KICAgICAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCI%2BCiAgICAgICAgPHRpdGxlPlJlYWN0IFBsYXlncm91bmQ8L3RpdGxlPgogICAgICAgIDwhLS0gUmVhY3QgYW5kIFJlYWN0RE9NIGZyb20gQ0ROIC0tPgogICAgICAgIDxzY3JpcHQgc3JjPSJodHRwczovL3VucGtnLmNvbS9yZWFjdEAxOC91bWQvcmVhY3QuZGV2ZWxvcG1lbnQuanMiIGNyb3Nzb3JpZ2luPjwvc2NyaXB0PgogICAgICAgIDxzY3JpcHQgc3JjPSJodHRwczovL3VucGtnLmNvbS9yZWFjdC1kb21AMTgvdW1kL3JlYWN0LWRvbS5kZXZlbG9wbWVudC5qcyIgY3Jvc3NvcmlnaW4%2BPC9zY3JpcHQ%2BCgogICAgICAgIDwhLS0gQmFiZWwgZm9yIEpTWCBzdXBwb3J0IC0tPgogICAgICAgIDxzY3JpcHQgc3JjPSJodHRwczovL3VucGtnLmNvbS9AYmFiZWwvc3RhbmRhbG9uZS9iYWJlbC5taW4uanMiIGNyb3Nzb3JpZ2luPjwvc2NyaXB0PgogICAgPC9oZWFkPgogICAgPGJvZHk%2BCiAgICAgICAgPGRpdiBpZD0icm9vdCI%2BPC9kaXY%2BCiAgICAgICAgPEpTQlgtSlMgdHlwZT0idGV4dC9iYWJlbCIgcHJlc2V0cz0icmVhY3QiPgogICAgPC9ib2R5Pgo8L2h0bWw%2BCg%3D%3D&panelState=eyJyaWdodCI6dHJ1ZSwibGVmdCI6dHJ1ZX0%3D&righttab=Y29uc29sZQ%3D%3D&css=LyogQ1NTIGNvZGUgaGVyZSAqLw%3D%3D#/?lefttab=anM%3D&js=Y29uc3QgeyBSZWFjdCwgUmVhY3RET00gfSA9IHdpbmRvdzsNCmNvbnN0IHsgdXNlU3RhdGUgfSA9IFJlYWN0Ow0KDQpmdW5jdGlvbiBBcHAoKSB7DQogIA0KICByZXR1cm4gKA0KICAgICAgPGRpdj4NCiAgICAgICAgICBNeSBSZWFjdCBBcHBsaWNhdG9uDQogICAgICA8L2Rpdj4NCgkpOw0KfQ0KDQovLyBSZW5kZXIgdGhlIEFwcCBDb21wb25lbnQNClJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSkucmVuZGVyKDxBcHAgLz4pOw%3D%3D&righttab=Y29uc29sZQ%3D%3D&html=PCFET0NUWVBFIGh0bWw%2BCjxodG1sPgogICAgPGhlYWQ%2BCiAgICAgICAgPEpTQlgtQ1NTPgogICAgICAgIDxtZXRhIGNoYXJzZXQ9IlVURi04Ij4KICAgICAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCI%2BCiAgICAgICAgPHRpdGxlPlJlYWN0IFBsYXlncm91bmQ8L3RpdGxlPgogICAgICAgIDwhLS0gUmVhY3QgYW5kIFJlYWN0RE9NIGZyb20gQ0ROIC0tPgogICAgICAgIDxzY3JpcHQgc3JjPSJodHRwczovL3VucGtnLmNvbS9yZWFjdEAxOC91bWQvcmVhY3QuZGV2ZWxvcG1lbnQuanMiIGNyb3Nzb3JpZ2luPjwvc2NyaXB0PgogICAgICAgIDxzY3JpcHQgc3JjPSJodHRwczovL3VucGtnLmNvbS9yZWFjdC1kb21AMTgvdW1kL3JlYWN0LWRvbS5kZXZlbG9wbWVudC5qcyIgY3Jvc3NvcmlnaW4%2BPC9zY3JpcHQ%2BCgogICAgICAgIDwhLS0gQmFiZWwgZm9yIEpTWCBzdXBwb3J0IC0tPgogICAgICAgIDxzY3JpcHQgc3JjPSJodHRwczovL3VucGtnLmNvbS9AYmFiZWwvc3RhbmRhbG9uZS9iYWJlbC5taW4uanMiIGNyb3Nzb3JpZ2luPjwvc2NyaXB0PgogICAgPC9oZWFkPgogICAgPGJvZHk%2BCiAgICAgICAgPGRpdiBpZD0icm9vdCI%2BPC9kaXY%2BCiAgICAgICAgPEpTQlgtSlMgdHlwZT0idGV4dC9iYWJlbCIgcHJlc2V0cz0icmVhY3QiPgogICAgPC9ib2R5Pgo8L2h0bWw%2BCg%3D%3D`,
  },
];

export default presets;
