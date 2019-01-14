/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';

import type {
  NormalizationOperation,
  NormalizationSplitOperation,
} from './NormalizationNode';
import type {ReaderFragment} from './ReaderNode';

/**
 * Represents a common GraphQL request with `text` (or persisted `id`) can be
 * used to execute it, an `operation` containing information to normalize the
 * results, and a `fragment` derived from that operation to read the response
 * data (masking data from child fragments).
 */
export type ConcreteRequest =
  | {|
      +kind: 'Request',
      +name: string,
      +operationKind: 'mutation' | 'query' | 'subscription',
      +id: ?string,
      text: ?string,
      +metadata: {[key: string]: mixed},
      +fragment: ReaderFragment,
      +operation: NormalizationOperation,
      +params?: RequestParameters,
    |}
  | {|
      +kind: 'Request',
      +fragment: ReaderFragment,
      +operation: NormalizationOperation,
      +params: RequestParameters,
      text?: ?string,
    |};

/**
 * Contains the `text` (or persisted `id`) required for executing a common
 * GraphQL request.
 */
export type RequestParameters = {|
  +name: string,
  +operationKind: 'mutation' | 'query' | 'subscription',
  +id: ?string,
  +text: ?string,
  +metadata: {[key: string]: mixed},
|};

export type GeneratedNode =
  | ConcreteRequest
  | ReaderFragment
  | NormalizationSplitOperation;

const RelayConcreteNode = {
  CONDITION: 'Condition',
  FRAGMENT: 'Fragment',
  FRAGMENT_SPREAD: 'FragmentSpread',
  INLINE_FRAGMENT: 'InlineFragment',
  LINKED_FIELD: 'LinkedField',
  LINKED_HANDLE: 'LinkedHandle',
  LITERAL: 'Literal',
  LOCAL_ARGUMENT: 'LocalArgument',
  MATCH_FIELD: 'MatchField',
  OPERATION: 'Operation',
  REQUEST: 'Request',
  ROOT_ARGUMENT: 'RootArgument',
  SCALAR_FIELD: 'ScalarField',
  SCALAR_HANDLE: 'ScalarHandle',
  SPLIT_OPERATION: 'SplitOperation',
  VARIABLE: 'Variable',
};

module.exports = RelayConcreteNode;