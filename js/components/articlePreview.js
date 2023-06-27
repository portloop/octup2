
export const articlePreview = (componentProps) => {
    const props = componentProps;
    const render = function () {
        const { date, apTitle, apDescription, tags, imageRef, cid } = props;
        const tagElements = tags.map((tag) => `<div class="tag">${tag}</div>`);
        const tagString = tagElements.join('');
        const template = document.createElement('template');
        template.innerHTML = `
  <div class="article-preview">
    <div class="ap-img">
      <img src="${imageRef}" alt="">
    </div>
    <div class="ap-desc-text">
      <div class="ap-date">
        ${date}
      </div>
      <div class="ap-title">
        ${apTitle}
      </div>
      <div class="ap-description">
        ${apDescription}
      </div>
      <div class="ap-footer">
        <div class="ap-tags">
          ${tagString}
        </div>
        <span class="ap-read" data-cid='${cid}'>
          Read More >
        </span>
      </div>
    </div>
  </div>
      `;
        return template.content.cloneNode(true);
    };

    return { render };
};