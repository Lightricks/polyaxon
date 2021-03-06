import * as React from 'react';

import './emptyList.less';

export function EmptyList(isCurrentUser: boolean, objectType: string, image: string, command?: string) {
  return (
    <div className="row">
      <div className="col-md-offset-2 col-md-8">
        <div className="jumbotron jumbotron-action text-center empty-jumbotron">
          <h3>No {objectType} was found</h3>
          {image && isCurrentUser &&
            <img src={`/static/images/${image}.svg`} alt={image} className="empty-icon"/>
          }
          {command && isCurrentUser &&
          <div>
            You can start a new {objectType} by using CLI: <b> {command} </b>
          </div>
          }
        </div>
      </div>
    </div>
  );
}
