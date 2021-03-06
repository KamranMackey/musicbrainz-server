/*
 * @flow
 * Copyright (C) 2020 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import * as React from 'react';

import FormCsrfToken from '../../components/FormCsrfToken';
import FormSubmit from '../../components/FormSubmit';
import Layout from '../../layout';
import {withCatalystContext} from '../../context';

type Props = {
  +$c: CatalystContextT,
  +page: string,
};

const DeleteWikiDoc = withCatalystContext(({
  $c,
  page,
}: Props) => (
  <Layout fullWidth title={l('Remove Page')}>
    <div id="content">
      <h1>{l('Remove Page')}</h1>
      <p>
        {exp.l(`Are you sure you wish to remove the page
                “{page_uri|{page_name}}” from the transclusion table?`,
               {
                 page_name: page,
                 page_uri: '/doc/' + encodeURIComponent(page),
               })}
      </p>
      <form action={$c.req.uri} method="post" name="confirm">
        <FormCsrfToken />
        <FormSubmit
          label={l('Yes, I\'m sure')}
          name="confirm.submit"
          value="1"
        />
      </form>
    </div>
  </Layout>
));

export default DeleteWikiDoc;
