/**
 * @generated SignedSource<<4dd531c04fdf6321b59daa636b66955d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type postsQuery$variables = {};
export type postsQuery$data = {
  readonly posts: ReadonlyArray<{
    readonly content: string | null;
    readonly id: string;
    readonly likeCount: number | null;
  }>;
};
export type postsQuery = {
  response: postsQuery$data;
  variables: postsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Post",
    "kind": "LinkedField",
    "name": "posts",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "content",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "likeCount",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "postsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "postsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "c7c1195a556f2f96b8cf66a01be29592",
    "id": null,
    "metadata": {},
    "name": "postsQuery",
    "operationKind": "query",
    "text": "query postsQuery {\n  posts {\n    id\n    content\n    likeCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "a6587accd94b3c6afdfa7b67ea93bbc4";

export default node;
