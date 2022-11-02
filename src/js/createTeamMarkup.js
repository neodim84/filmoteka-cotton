export const teamMarkUp = team => {
  return team
    .map(
      card => `
                <div class="team__card">
                                        <div class="team__wrapper">
                                                <img class="team__image" src="/src/images/students/${card.img}"
                                                        alt="${card.name}" width="50">
                                        </div>
                                        <div class="team__wrapper">
                                                <p>${card.name}</p>
                                                <p>
                                                        <a href="${card.github}"
                                                                class="team__git">GitHub:
                                                                ${card.github}</a>
                                                </p>
                                                <p>Role: ${card.role}</p>
                                        </div>
                                </div>
                `
    )
    .join('');
};
