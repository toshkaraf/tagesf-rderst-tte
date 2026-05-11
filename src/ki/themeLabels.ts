import {
  categoryTranslationsDe,
  subcategoryTranslationsDe,
  topicTranslationsDe,
  type KiThemeCategory,
  type KiSubcategory,
  type KiTopic
} from './theme/themeData.gen'

/** Display names always German (kilaszlo translation tables). */
export function categoryLabel(c: KiThemeCategory): string {
  return categoryTranslationsDe[c.id]?.name ?? c.name
}

export function categoryDescription(c: KiThemeCategory): string {
  return categoryTranslationsDe[c.id]?.description ?? c.description
}

export function subcategoryLabel(s: KiSubcategory): string {
  return subcategoryTranslationsDe[s.id] ?? s.name
}

export function topicLabel(t: KiTopic): string {
  return topicTranslationsDe[t.id]?.name ?? t.name
}

export function topicDescription(t: KiTopic): string | null {
  return topicTranslationsDe[t.id]?.description ?? t.description ?? null
}
